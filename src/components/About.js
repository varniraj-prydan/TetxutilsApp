import React, { useState } from 'react'





export default function About(props) {
    // const [bg, setBg] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderRadius : '10px'
    // })
    console.log(props.mode,"from here")
    let bg = {
        color : props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white' 
    }

    //const [btnText,setBtnText] = useState("Enable Dark Mode");

    // const handleMode = () => {
    //     console.log("entered");
    //     console.log( bg.color)
    //     if (bg.color === "black") {
    //         setBg({
    //             color: "white",
    //             backgroundColor: "black",
    //             borderRadius : '5px'
    //         })   
    //         setBtnText("Enable Light Mode");
    //     }
    //     else
    //     {
    //         setBg({
    //             color: 'black',
    //             backgroundColor:'white',
    //             borderRadius : '5px'
    //         })
    //         setBtnText("Enable Dark Mode");
    //     }
    // }
    return (
        
        <div className='container' style={bg}>
            <h2>About US</h2>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item" style={bg}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={bg}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={bg}>
                            <strong >This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={bg}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={bg}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={bg}>
                        <div className="accordion-body">
                            <strong >This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={bg}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={bg}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong >This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

