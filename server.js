const express = require('express');
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
var getBootstrapNode = require('bootstrap-node');
const app = express();
app.use(express.static(__dirname + "/public"));
var bootstrapNode = getBootstrapNode();
app.set('view engine','ejs')
var db;





//console.log('boots '+bootstrapNode);





app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res)=>{
  db.collection('dict').find().toArray((err,result)=>{
    console.log(result);
    res.render('dict.ejs',{dict: result});
  });
});

app.get('/dict/:part/:group', (req, res)=>{
  console.log('req '+req.params.part);
  db.collection('dict').find({part:req.params.part,group:req.params.group}).toArray((err,result)=>{
    //console.log(result);
    //console.log('req '+req.params.part);
    part = req.params.part || "";
    group = req.params.group || "";
    res.render('dict.ejs',{dict: result, part: part, group: group});
  });
});

app.post('/dict', (req, res)=>{
  db.collection('dict').save(req.body, (err,result)=>{
    if (err) return console.log(err)

    console.log('save in db')
    res.redirect('/dict/'+req.body.part+'/'+req.body.group);
  });
});

app.get('/dictionary', (req, res)=>{
  var col1, col2;
  db.collection('dict').find({}).toArray((err,result)=>{
      var noun = [];
      //console.log('result '+result);
      for(var i=0;i<result.length;i++){
      //console.log('result[i] '+result[i]);
        if ( result[i].part == 'noun' ){
          noun.push(result[i]);
        }
      }
      //console.log('noun '+noun);

    res.render('dictionary.ejs',{dict: result, noun:noun});
  });
});


app.post('/quotes', (req, res)=>{
//  db.collection('quotes').save(req.body, (err,result)=>{
//    if (err) return console.log(err)

//    console.log('save in db')
//    res.redirect('/');
//  });
});

mongoClient.connect('mongodb://ann:111@ds137801.mlab.com:37801/eng', (err,database)=>{console.log(1);
  if (err) return console.log(err)
  db = database;
  app.listen(3000, function() {
    console.log('listening on 3000')
  })
});
