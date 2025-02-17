import Card from "./Card";
function Tours({tours, removeTour}){


    return(
        <div className='container'>
            <div>
                <h2 className="title">Plan with love</h2>
            </div>
            
            <div className='cards'>
                {
                    tours.map((tour)=>{
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
             

        </div>
    )
}

export default Tours;  

// import Card from "./Card";

// function Tours({ tours, removeTour }) {
//     return (
//         <div>
//             <h2>Plan with love</h2>
//             <div>
//                 {tours.map((tour) => (
//                     <Card key={tour.id} {...tour} removeTour={removeTour} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Tours;
