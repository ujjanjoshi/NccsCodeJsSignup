(() => {
    const helper = require("./../../../common/index")
    const create_user = require("./../sql/create_user")

    module.exports = async(req, res, next) => {
        const name = req.body.name;
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
        let output = await helper.validationHelper.uservalidation(name,phone,email,password)
      
       
        if (output == true) {
            const output2=await create_user(name,phone,email,password)
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