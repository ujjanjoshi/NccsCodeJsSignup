(()=>{
    module.exports=async(name,phone,email,password)=>{
        const helper = require("./../../../common/index")
        const output=await helper.mysqlHelper.query("INSERT INTO Signup (name,phone,email,password) VALUES ('"+name+"','"+phone+"','"+email+"','"+password+"')");
        console.log(output[0].affectedRows>0)
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()