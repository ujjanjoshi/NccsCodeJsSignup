(() => {
    const helper = require("./../../../common/index")
    const create_user = require("./../sql/create_user")

    module.exports = async(req, res, next) => {
        const username = req.body.username;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = Math.floor(Math.random() * 1000000)+100000;
        const address = req.body.address;
        const usertypeid = req.body.usertypeid;	
        const status = req.body.status;
        let output = await helper.validationHelper.uservalidation(username,phone,email,password)
        if (output == true) {
            const output2=await create_user(username,phone,email,password,address,usertypeid,status)
            if(output2==true){
                res.send('SignUp Succesful')
            }else{
                res.send('SignUp UnSuccesful')
            }
            
        }else{
            res.send('SignUp UnSuccesful')
        }
    }
})()