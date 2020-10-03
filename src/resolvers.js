const users =[
    {id:1,name:"jardielson silva ferreira",email:"jardielsonbio@gmail.com",phone:"(86)9 8121-7085"},
    {id:2,name:"sir isaac newton",email:"bestphysics@gmail.com",phone:"(xx) x xxxx-xxxx"},
]

module.exports = {
    Query:{
        users: ()=>users,
        user:  ()=>users[0]
    },

    Mutation:{
        createUser: ()=>users[1],
    }
}