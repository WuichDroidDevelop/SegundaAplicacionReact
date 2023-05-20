import React from "react";

export default function Charecters(props) {
    console.log(props)
    const { charecters } = props;
  return ( 
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home">Home</span>
            <div className="container-characters">
            {charecters?.map((charecters, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={charecters.image} alt={charecters.name} />
                    </div>
                    <div>
                    <h3>{charecters.name}</h3>
                    <h6>
                    {charecters.status == "Alive" ? (
                    <><span className="alive"></span>
                    Alive</>
                    ) : (
                    <><span className="dead"></span>
                    Dead</>
                    )}
                    </h6>
                    <p>
                        <span className="text-grey">Episodios:</span>
                        <span>{charecters.episode.length}</span>
                    </p>
                    <p>
                        <span className="text-grey">Especie:</span>
                        <span>{charecters.species}</span>
                    </p>
                    </div>
                </div>
            )
            )}
            </div>
        </div>
  );
}
