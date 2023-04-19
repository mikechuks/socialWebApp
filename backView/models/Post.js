const mongoose = require("mongoose");

const Postschema = new mongoose.Schema ({
userId:{
type:String,
required:true
},
desc:{
type:String,
max:500
},
likes:{
    type:Array,
    default:[]
    },
    img:{
        type:String,
        default:""
 },
},
{timeStamps:true}
);

module.exports = mongoose.model("Post", Postschema);
