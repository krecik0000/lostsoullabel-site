import React from 'react'
import './Build.css'
{/* Info box przeznaczony do wyświetlania informacji na stronie */}
function Ibox(props) {
    const infoExist = props.infoM;
    return (  
        <div className="infoBox">
            {infoExist.length > 0 && 
            <div className="build">
                <div className="bText">
                    <h1>{infoExist}</h1>
                </div>
            </div>}
        </div>
    )
}
export default Ibox;
