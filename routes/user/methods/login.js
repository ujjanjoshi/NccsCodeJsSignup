(() => {
    const helper = require("./../../../common/index")
    const check_user = require("./../sql/check_user")

    module.exports = async(req, res, next) => {
        const username = req.body.username;
        const password = req.body.password;
     
        let output = await helper.validationHelper.uservalidation(username,phone,email,password)
            const output2=await check_user(username,password)
            res.send(output2);
    }
})()