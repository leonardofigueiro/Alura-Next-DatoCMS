const TOKEN = process.env.TOKEN;

export async function cmsService({
    query
}) {

    try {
        const pageContentresponse = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN
    },
    body: JSON.stringify({
        query,
    })
   })
   .then(async (respostaDoServidor) => {
    const body = await respostaDoServidor.json();
    if (!body.errors) return body;
    throw new Error(JSON.stringify(body));
   })

    return {
        data: pageContentresponse.data
    }
    } catch (error) {
        throw new Error(error.message)
    }
   
}