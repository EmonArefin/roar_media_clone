import axios from "axios"

const baseUrl = "https://basic-blog.teamrabbil.com/api"

export async function postCategories(){
    let res = await axios.get(baseUrl+"/post-categories") //problem why we use axios
    if (res.status==200){
        return res.data
    } else{
        return []
    }
}

export async function postLatest(){
    let res = await axios.get(baseUrl+"/post-newest")
    if (res.status==200){
        return res.data
    } else{
        return []
    }
}

export async function postByCategory(id){
    let res = await axios.get(baseUrl+"/post-list/"+id)
    if (res.status==200){
        return res.data
    } else{
        return []
    }
}

export async function postDetails(id){
    let res = await axios.get(baseUrl+"/post-details/"+id)
    if (res.status==200){
        return res.data
    } else{
        return []
    }
}