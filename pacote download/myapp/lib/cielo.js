const fetch = require('node-fetch')

class Cielo {
    static async compra(params){
        
const  response  =  await  fetch ( 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales/' ,  { 
	method : 'post' , 
	body : JSON . stringify (params ) , 
	headers : { 
        'Content-Type' : 'application/json', 
        'MerchantId' : ' 53290fd8-e0eb-424a-88f0-9acffdb3c4bb'  ,
        'Merchantkey' : 'FKOIXFLTKXVNVSCSCXZWIKORYCDVKLLJQSRCYTJR'  
    } 
} ) ; 
const  data  = res . json ( ) ;

console . log ( dados ) ;
    }
}

modulo.exports = Cielo;