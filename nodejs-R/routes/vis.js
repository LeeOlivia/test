var rio = require("rio");
exports.rio = function(req, res){
	options = {
		host : "127.0.0.1",
		port : 6311,
		command:"plot(rnorm(50),rnorm(50))",//R����
        callback: function (err, val) {
            if (!err) {
            	console.log("RETURN:"+val);
            	return res.send({'success':true,'res':val});
            } else {
            	console.log("ERROR:Rserve call failed")
            	return res.send({'success':false});
            }
        }
    }
    rio.enableDebug(true);//��������ģʽ
    rio.evaluate(options);//����R����
	
};