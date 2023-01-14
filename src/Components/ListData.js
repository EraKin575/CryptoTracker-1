import React, { useState, useEffect } from 'react'

import axios from 'axios';

const ListData = () => {

    const [list, setList] = useState([]);
    useEffect(() => {
        const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a67bb7208amshc9f3583b2bf2877p159913jsn086a6691f0d5', //put your key from RAPID API
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?', options)
	.then(response => response.json())
	.then(response => setList((response)) //WATCH THE API RESPONSE ON https://rapidapi.com/Coinranking/api/coinranking1/ AND CHANGE ACCORDING TO OBJECT
	.catch(err => console.error(err));
      
    })
    return (
        <>
            <div className="list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Image</th>
                            <th>Symbol</th>
                            <th>Name</th>
                            <th>Current Price</th>
                            <th>Total Volume</th>
                        </tr>
                    </thead>
                </table>
            </div>

            {
                list.map(lists => {
                    return (
                        <div className='list'>
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">{lists?.market_cap_rank}</th>
                                        <img className='images' 
                                        src={lists?.image} alt="" />
                                        <td>{lists?.symbol}</td>
                                        <td>{lists?.name}</td>
                                        <td>${lists?.current_price}</td>
                                        <td>${lists?.market_cap}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )
                })
            }

        </>
    )
}

export default ListData
