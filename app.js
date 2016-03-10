var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));


app.get('/', function(req, res){
	res.render('index');
});

app.post('/data', upload.single('file'), function(req, res, next){
	if(req.file === undefined){
		res.send("No file found. Try uploading again?");
	}
	var obj = {
		"fileName": req.file.originalname,
		"size": req.file.size
	}
	obj = JSON.stringify(obj);
	res.send(JSON.parse(obj));
});

app.listen(PORT, function(){
	console.log("Express listening on port " + PORT);
});