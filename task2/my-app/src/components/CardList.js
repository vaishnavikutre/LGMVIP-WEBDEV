import React from 'react';
import Card from './Card';
import '../containers/styles.css';


const CardList = ({item})=>{
    return(
            <div>
                {

                    item.map((user, i) => {
                        return(
                                    <Card
                                    key={i}
                                    id={item[i].id}
                                    name={item[i].first_name}
                                    lname={item[i].last_name}
                                    email={item[i].email}
                                    />
                            );
                    })
                }
                
                <br></br>
            </div>
        );
}

export default CardList;
