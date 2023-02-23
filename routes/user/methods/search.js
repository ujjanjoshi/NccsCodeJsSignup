

(() => {
    const helper = require("./../../../common/index")
    const search_user = require("../sql/search_user")
    // const create_user = require("./../sql/create_user")

    module.exports = async (req, res, next) => {
        const search = req.body.search;
        const output2 = await search_user(search)
        console.log(output2)
        res.send(output2);
        // if (output2 == true) {
        //     res.send('SignUp Succesful')
        // } else {
        //     res.send('SignUp UnSuccesful')
        // }
    }
})()