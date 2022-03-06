import "./style.css";


export default function App() {
  return (
    <div className="App">
        <Plans/>    
    </div>
  );
}


function Plans(){
  const plans = [
    {
      name:"FREE", 
      price: 0,
      features:[ 
      "Single User",
     "5GB Storage",
     "Unlimited Public Projects",
      "Community Access",
     "Unlimited Private Projects",
     "Dedicated Phone Support",
     "Free Subdomain",
      "Monthly Status Reports"
     ],
    },
    {
      name:"PLUS", 
      price:9,
      features:[ 
       "5 User",
       "50GB Storage",
       "Unlimited Public Projects",
       "Community Access",
        "Unlimited Private Projects",
        "Dedicated Phone Support",
        "Free Subdomain",
        "Monthly Status Reports"
    ],
  },
    {
      name:"PRO", 
      price:49,
      features:[
      "unlimited User",
       "150GB Storage",
       "Unlimited Public Projects",
        "Community Access",
         "Unlimited Private Projects",
        "Dedicated Phone Support",
        " UnlimitedFree Subdomain",
        "Monthly Status Reports"
     ],
   },  
 ];

    return (
      <div >
       { 
       plans.map((plan,index) => ( <Card key={index} name={plan.name} price={plan.price} features={plan.features}  />
       ))}      
      </div>
    );

}
function Card(props){
   return (
    <div className="card">
    <p className="plan-name">{props.name}</p>
    <p className="price">${props.price}<span className="price-duration">/month</span></p>
    <ul className="features">
       {props.features.map((feature,index) => <li key={index}>  {feature}</li> )}
     </ul>
    <button className="buy">BUY</button>
</div>
   )
}



