import React from 'react'
import '../assets/css/createOrder.css'
import '../App.css'
import DashboardSidebar from './DashboradSidebar';
import Search from './Search';
import jeans from '../assets/productImages/jeans.jpg';
import joggers from '../assets/productImages/joggers.jpg';
import others from '../assets/productImages/others.jpg';
import trousers from '../assets/productImages/trousers.jpg';
import tshirts from '../assets/productImages/tshirts.jpg';
import shirts from '../assets/productImages/shirts.jpg';
import boxers from '../assets/productImages/boxers.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/confirmorder.css';
import tick from '../assets/uploads/icons/tick.jpg';
import wash from '../assets/uploads/icons/washing-machine-grey.svg';
import bluewash from '../assets/uploads/icons/washing-machine.svg'
import blueiron from '../assets/uploads/icons/ironing.svg';
import iron from '../assets/uploads/icons/ironing-grey.svg';
import fold from '../assets/uploads/icons/fold-grey.svg';
import bluefold from '../assets/uploads/icons/bluefold.png';
import bleach from '../assets/uploads/icons/bleach-grey.svg';
import bluebleach from '../assets/uploads/icons/bleach.svg';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
    const navigate = useNavigate();
    const washTypePrice = { "Wash": 20, "Iron": 15, "Fold": 10, "Pack": 25 }
    const [amount, setamount] = useState(0)
    const [totalitems, setItem] = useState(0)
    const [storeNo, setStoreNo] = useState("")
    const [storeAddress, setStoreAddress] = useState("")
    const [disabled, setDisabled] = useState(true)
    // const [order, setOrder] = useState({
    //     status: "",
    //     product_details: [],
    //     totalitems: 0,
    //     totalprice: 0
    // });

    const [eachProductWashTypes, seteachProductWashTypes] = useState({
        "shirts": [false, false, false, false],
        "tshirts": [false, false, false, false],
        "trousers": [false, false, false, false],
        "jeans": [false, false, false, false],
        "joggers": [false, false, false, false],
        "boxers": [false, false, false, false],
        "others": [false, false, false, false]
    })

    const [price, setPrice] = useState({
        "shirts": 0,
        "tshirts": 0,
        "trousers": 0,
        "jeans": 0,
        "joggers": 0,
        "boxers": 0,
        "others": 0
    });
    const ShirtWashService = (ind) => {
        const washType = eachProductWashTypes.shirts
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["shirts"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "shirts": val
        })

    }


    const TshirtWashService = (ind) => {
        const washType = eachProductWashTypes.tshirts
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["tshirts"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "tshirts": val
        })
    }
    const TrouserWashService = (ind) => {
        const washType = eachProductWashTypes.trousers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        // seteachProductWashTypes.shirts = washType
        seteachProductWashTypes({ ...eachProductWashTypes, ["trousers"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "trousers": val
        })
    }
    const JeanWashService = (ind) => {
        const washType = eachProductWashTypes.jeans
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["jeans"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "jeans": val
        })
    }
    const JoggerWashService = (ind) => {
        const washType = eachProductWashTypes.joggers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["joggers"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "joggers": val
        })
    }
    const BoxerWashService = (ind) => {
        const washType = eachProductWashTypes.boxers
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["boxers"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "boxers": val
        })
    }
    const OtherWashService = (ind) => {
        const washType = eachProductWashTypes.others
        if (washType[ind] === true) {
            washType[ind] = false
        } else {
            washType[ind] = true
        }
        seteachProductWashTypes({ ...eachProductWashTypes, ["others"]: washType })
        console.log(washType)
        const val = cost(washType)
        setPrice({
            ...price,
            "others": val
        })
    }
    const cost = (arr) => {

        var cost = 0
        for (let i = 0; i < 4; i++) {
            if (i === 0) {
                if (arr[i] == true) {
                    cost += washTypePrice['Wash']
                }
            } else if (i === 1) {
                if (arr[i] === true) {
                    cost += washTypePrice['Iron']
                }
            } else if (i === 2) {
                if (arr[i] === true) {
                    cost += washTypePrice['Fold']
                }
            } else {
                if (arr[i] === true) {
                    cost += washTypePrice['Pack']
                }

            }
        }


        return cost
    }



    const [quantity, setquantity] = useState({
        "shirts": 0,
        "tshirts": 0,
        "trousers": 0,
        "jeans": 0,
        "joggers": 0,
        "boxers": 0,
        "others": 0
    })

    const handler = (e) => {

        const { name, value } = e.target

        setquantity({
            ...quantity,
            [name]: value
        })
    }

    const proceedHandler = () => {

        setItem(parseFloat(quantity.shirts) + parseFloat(quantity.tshirts) + parseFloat(quantity.trousers) + parseFloat(quantity.jeans) + parseFloat(quantity.joggers) + parseFloat(quantity.boxers) + parseFloat(quantity.others));
        //console.log("final item", totalitems)
        //const totalprice = price.shirts * quantity.shirts + price.tshirts * quantity.tshirts + price.trousers * quantity.trousers + price.jeans * quantity.jeans + price.boxers * quantity.boxers + price.joggers * quantity.joggers + price.others * quantity.others;
        //const totalitems = quantity.shirts + quantity.tshirts + quantity.trousers + quantity.jeans + quantity.boxers + quantity.joggers + quantity.others
        var eachProductAmount = 0
        console.log(price)
        for (const [key, value] of Object.entries(price)) {
            eachProductAmount += parseFloat(value * quantity[key])
            setamount(eachProductAmount)
            // console.log("final amount", amount)

        }
      
    }



    const order_details = []
    for (let x in quantity) {
        let product_info = {}
        if (quantity[x] > 0) {
            product_info["productType"] = x
            product_info["quantity"] = quantity[x]
            product_info["price"] = price[x]
            product_info.Wash = eachProductWashTypes[x][0]
            product_info.Iron = eachProductWashTypes[x][1]
            product_info.Fold = eachProductWashTypes[x][2]
            product_info.Pack = eachProductWashTypes[x][3]
            order_details.push(product_info)

        }

    }
    // const products = order_details

    const washTypeprod = []

    order_details.forEach(product => {
        let washh = ""
        if (product.Wash === true) {
            washh += "Washing  "
        }
        if (product.Iron === true) {
            washh += "Ironing  "
        }
        if (product.Fold === true) {
            washh += "Folding "
        }
        if (product.Pack === true) {
            washh += "Packing"

        }
        washTypeprod.push(washh)
    });


    const resetProduct = (item) => {
        if (item === "shirts") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.shirts = 0;
            price.shirts = 0;
        } else if (item === "tshirts") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.tshirts = 0;
            price.tshirts = 0;
        } else if (item === "trousers") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.trousers = 0;
            price.trousers = 0;
        } else if (item === "jeans") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.jeans = 0;
            price.jeans = 0;

        } else if (item === "joggers") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.joggers = 0;
            price.joggers = 0;

        } else if (item === "boxers") {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.boxers = 0;
            price.boxers = 0;

        } else {
            seteachProductWashTypes({ ...eachProductWashTypes, [item]: [false, false, false, false] })
            quantity.others = 0;
            price.others = 0;

        }
    }
    const handleForm = () => {
        setStoreNo("+91 9999999999")
        setStoreAddress("Near phone Booth, 10th road")
        setDisabled(false)
    }
    const order={
        product_details:order_details,
        totalitems:totalitems,
        totalprice:amount
    }

    // setOrder(finalOrder)

    const submithandler = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:9002/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization:"Bearer "+localStorage.getItem("jwt")
            }, body: JSON.stringify({
                order
            }).then(await res.json()).catch(err => console.log(err))
        })
    }

    return (
        <>
            <DashboardSidebar />
            <section id="createOrder">
                <h5 className='text-order'>Create Order</h5>
                <Search />
                <table className="table product_list mt-2">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">Product Types</th>
                            <th scope="row">Quantity</th>
                            <th scope="row">Wash Type</th>
                            <th scope="row">Price</th>
                            <th scope="row"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={shirts} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>Shirts</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            <td>
                                {/* <input  type='number' value={quantity.shirts} onChange={handler} width={10} /> */}
                                <input className="quan" name="shirts" type="number" value={quantity.shirts} min="0" autocomplete="off" onkeyup="if(value<0) value=0" onChange={handler} ></input>
                                {/* <button className="quan" name="shirt" value={quantity.shirts} onClick={()=>handler}>{quantity.shirts}</button> */}
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.shirts[0] === true ? bluewash : wash} onClick={() => ShirtWashService(0)} />

                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.shirts[1] === true ? blueiron : iron} onClick={() => ShirtWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.shirts[2] === true ? bluefold : fold} onClick={() => ShirtWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.shirts[3] === true ? bluebleach : bleach} onClick={() => ShirtWashService(3)} />
                                    </li>
                                </ul>
                            </td>

                            {quantity.shirts && price.shirts ?
                                <td>{quantity.shirts}*{price.shirts}=<span className="total">{price.shirts * quantity.shirts}</span></td> :
                                <td>--</td>}
                            {/* <button className='btn btn-regular'>Reset</button> */}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("shirts")}>Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={tshirts} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>T Shirts</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="tshirts" type="number" value={quantity.tshirts} min="0" autocomplete="off" onkeyup="if(value<0) value=0" onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.tshirts[0] === true ? bluewash : wash} onClick={() => TshirtWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.tshirts[1] === true ? blueiron : iron} onClick={() => TshirtWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.tshirts[2] === true ? bluefold : fold} onClick={() => TshirtWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.tshirts[3] === true ? bluebleach : bleach} onClick={() => TshirtWashService(3)} />
                                    </li>
                                </ul>
                            </td>

                            {quantity.tshirts && price.tshirts ?
                                <td>{quantity.tshirts}*{price.tshirts}=<span className="total">{price.tshirts * quantity.tshirts}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("tshirts")}  >Reset</button></td>

                        </tr>

                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={trousers} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>Trousers</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="trousers" type="number" value={quantity.trousers} min="0" autocomplete="off" onkeyup="if(value<0) value=0;" onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.trousers[0] === true ? bluewash : wash} onClick={() => TrouserWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.trousers[1] === true ? blueiron : iron} onClick={() => TrouserWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.trousers[2] === true ? bluefold : fold} onClick={() => TrouserWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.trousers[3] === true ? bluebleach : bleach} onClick={() => TrouserWashService(3)} />
                                    </li>
                                </ul>
                            </td>
                            {quantity.trousers && price.trousers ?
                                <td>{quantity.trousers}*{price.trousers}=<span className="total">{price.trousers * quantity.trousers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("trousers")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={jeans} />
                                    </div>
                                    <div class="textprod">
                                        <h6 className='mb-0'>Jeans</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="jeans" type="number" value={quantity.jeans} min="0" autocomplete="off" onkeyup="if(value<0) value=0" onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.jeans[0] === true ? bluewash : wash} onClick={() => JeanWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.jeans[1] === true ? blueiron : iron} onClick={() => JeanWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.jeans[2] === true ? bluefold : fold} onClick={() => JeanWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.jeans[3] === true ? bluebleach : bleach} onClick={() => JeanWashService(3)} />
                                    </li>
                                </ul>
                            </td>
                            {quantity.jeans && price.jeans ?
                                <td>{quantity.jeans}*{price.jeans}=<span className="total">{price.jeans * quantity.jeans}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("jeans")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={joggers} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>Jogger</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="joggers" type="number" value={quantity.joggers} onkeyup="if(value<0) value=0" onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.joggers[0] === true ? bluewash : wash} onClick={() => JoggerWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.joggers[1] === true ? blueiron : iron} onClick={() => JoggerWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.joggers[2] === true ? bluefold : fold} onClick={() => JoggerWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.joggers[3] === true ? bluebleach : bleach} onClick={() => JoggerWashService(3)} />
                                    </li>
                                </ul>
                            </td>
                            {quantity.joggers && price.joggers ?
                                <td>{price.joggers}*{quantity.jogger}=<span className="total">{price.joggers * quantity.joggers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("joggers")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={boxers} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>Boxers</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="boxers" type="number" value={quantity.boxers} autocomplete="off" onkeyup="if(value<0) value=0" onChange={handler}></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.boxers[0] === true ? bluewash : wash} onClick={() => BoxerWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.boxers[1] === true ? blueiron : iron} onClick={() => BoxerWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.boxers[2] === true ? bluefold : fold} onClick={() => BoxerWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.boxers[3] === true ? bluebleach : bleach} onClick={() => BoxerWashService(3)} />
                                    </li>
                                </ul>
                            </td>
                            {quantity.boxers && price.boxers ?
                                <td>{quantity.boxers}*{price.boxers}=<span className="total">{price.boxers * quantity.boxers}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("boxers")}  >Reset</button></td>

                        </tr>
                        <tr>
                            <td>
                                <div class="wrapper">
                                    <div class="image">
                                        <img src={others} />
                                    </div>
                                    <div class="text-prod">
                                        <h6 className='mb-0'>Others</h6>
                                        <p className='mb-0'>Paris is the most beautiful city.</p>
                                    </div>
                                </div>

                            </td>
                            {/* <td><input className="quantity" type="number"/></td> */}
                            <td>
                                <input className="quan" name="others" type="number" value={quantity.others} min="0" autocomplete="off" onkeyup="if(value<0) value=0" onChange={handler} ></input>
                            </td>
                            <td>
                                <ul className='mb-0'>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.others[0] === true ? bluewash : wash} onClick={() => OtherWashService(0)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.others[1] === true ? blueiron : iron} onClick={() => OtherWashService(1)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.others[2] === true ? bluefold : fold} onClick={() => OtherWashService(2)} />
                                    </li>
                                    <li>
                                        <img className="cont" src={eachProductWashTypes.others[3] === true ? blueiron : iron} onClick={() => OtherWashService(3)} />
                                    </li>
                                </ul>
                            </td>

                            {quantity.others && price.others ?
                                <td>{quantity.others}*{price.others}=<span className="total">{price.others * quantity.others}</span></td> :
                                <td>--</td>}
                            <td><button className="reset btn btn-regular" onClick={() => resetProduct("others")}  >Reset</button></td>

                        </tr>
                    </tbody>
                </table>
                <div className='proceedCancelBtn '>
                    <button className='btn btn-regular btn-cancel'>Cancel</button>

                    <button className='btn btn-filled btn-proceed navbar-btn pull-left' type="button" data-toggle="modal" data-target="#sidebar-right" onClick={() => proceedHandler()}>Proceed</button>


                </div>

            </section>

            {/* MOdal */}
            <div class="modal summary-modal fade right" id="sidebar-right" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title">Summary</h4>
                        </div>
                        <div class="modal-body">
                            <div className="store" Style="    background-color: #F4F9FF;">
                                <div className="storeloc">
                                    <form className='store__form'>
                                        <select onChange={handleForm} defaultValue="Store Location">
                                            <option disabled>Store Location</option>
                                            <option className='store__option'>Jp Nagar</option>
                                            <option>Others</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="storeadd">
                                    <b>Store Address</b>
                                    {/* Near phone booth, 10th road */}
                                    <p>{storeAddress}</p>
                                </div>
                                <div className="storephone">
                                    <b>Phone</b>
                                    <p>{storeNo}</p>
                                </div>
                            </div>


                            <h6>Order Details</h6>
                            <table className="table mt-2">
                                <tbody>
                                    {order_details.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td> {product.productType}</td>
                                                <td> <i>{washTypeprod[index]}</i></td>
                                                <td>{product.quantity} x {product.price}=</td>
                                                <td>{product.quantity * product.price}</td>
                                            </tr>
                                        )
                                    })}


                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Sub Total:</td>
                                        <td>{amount}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Pickup Charges</td>
                                        <td>90</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>Total:</th>
                                        <th>Rs<span>{amount + 90}</span></th>
                                    </tr>

                                </tbody>
                            </table>
                            <h6 className='mt-3'>Address</h6>
                            <section>
                                <div className='d-flex'>
                                    <div className='card'>
                                        <h6>Home <img src={tick} className="tick" /></h6>
                                        <p className='mb-0'>#223, 10th road, Jp Nagar, Bangalore</p>
                                    </div>
                                    <div className='card'>
                                        <h6>Other</h6>
                                        <p className='mb-0'>#223, 10th road, Jp Nagar, Bangalore</p>
                                    </div>
                                    <div className='add-more'>
                                        <a href="/#">Add New</a>
                                    </div>
                                </div>
                            </section>

                            <div className=' row bottom-btn'>
                                {/* <a href="#myModal">  <button className='btn btn-filled btn-proceed mt-2' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal" setDisabled={disabled}>Confirm</button></a> */}
                                <a href="#myModal" className='btn btn-filled btn-proceed mt-2' data-toggle="modal" >Confirm</a>
                            </div>


                        </div>  {/* modal body ends */}
                    </div>
                </div>
            </div>
            {/* modal ends */}


            {/* <!-- Modal HTML --> */}
            <div id="myModal" class="modal fade">
                <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div class="icon-box">
                                {/* <img class="tick-img" src={tick2x}/>  */}
                            </div>


                        </div>
                        <h4 class="modal-title">Your order is  successfully created</h4>
                        <div class="modal-body">
                            <p class="text-center">You can track the delivery in the "Orders" section</p>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success btn-block" data-dismiss="modal" onChange={submithandler} >Go To Orders</button>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreateOrder





























































































