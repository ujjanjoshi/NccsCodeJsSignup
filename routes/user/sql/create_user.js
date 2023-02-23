(()=>{
    module.exports=async(name,phone,email,password,address,usertypeid,status)=>{
        const helper = require("./../../../common/index");
        const d = new Date().getTime();
        const output=await helper.mysqlHelper.query("INSERT INTO users (username,phone,email,password,adress,usertypeid,status,createdAt) VALUES ('"+name+"','"+phone+"','"+email+"','"+password+"','"+address+"','"+usertypeid+"','"+status+"',"+d+")");
        // console.log("INSERT INTO users (username,phone,email,password,adress,usertypeid,status) VALUES ('"+name+"','"+phone+"','"+email+"','"+password+"','"+address+"','"+usertypeid+"','"+status+"')");
        if(output[0].affectedRows>0){
            return true
        }
        else{
            return false
        }
    }
})()