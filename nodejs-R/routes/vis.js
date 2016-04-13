var rio = require("rio");
exports.rio = function(req, res){
	options = {
		host : "127.0.0.1",
		port : 6311,
		command:"plot(rnorm(50),rnorm(50))",//R命令
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
    rio.enableDebug(true);//开启调试模式
    rio.evaluate(options);//运行R代码
	
};