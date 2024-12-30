import { useState } from "react";

const FacilityManagement = () => {
    const [facilities, setFacilities] = useState([]);
    const [input, setInput] = useState({
        name: "",
        price: "",
    })
    const handleSubmit = () => {
        console.log(input);
        setFacilities([...facilities, input]);
        setInput({ name: "", price: "" })
    }

    return (
        <div>
            <h1>Facility Management</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />
                <input
                    type="number"
                    name="price"
                    value={input.price}
                    onChange={(e) => setInput({ ...input, price: e.target.value })}
                />
            </form>
            <button onClick={() => handleSubmit()}>Add</button>
            {facilities.length > 0 &&
                <table>
                    <thead >

                        <tr>
                            <th style={{border:"2px"}}>S.No</th>
                            <th>Facility</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {facilities.map((facility, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{facility.name}</td>
                                <td>{facility.price}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            }
        </div>
    )
}

export default FacilityManagement;