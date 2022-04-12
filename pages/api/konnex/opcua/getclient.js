import {getAccessToken, getSession, withApiAuthRequired} from "@auth0/nextjs-auth0";
  
export default withApiAuthRequired(async function getClient(req, res) {
    const {accessToken} = await getAccessToken(req,res)
    // const session = await getSession(req, res);
    // const accessToken = session?.idToken;
    const id = req.query.id
    try{
        const response = await fetch(`http://localhost:8000/client?id=${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`   
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    }catch(err){
        console.log(err)
    }
    
});