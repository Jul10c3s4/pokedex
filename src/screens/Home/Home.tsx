import { View, Text, Image, ScrollView } from "react-native"
import HomeStyle from "../../styles/Home.style"
import TextField from "../../components/TextField"
import TextButton from "../../components/TextButton"
import Card from "../../components/Card"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"

const Home = ()=>{
    interface Pokemon {
        code: string,
        name: string,
        url: string
    }

    const [listPokemon, setListPokemon] = useState<Array<Pokemon>>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const fetchPokemonSprites = async () => {
            try{
                console.log("oi");
                
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
                const data = await response.json();

                const pokemonList = data.results;
                
                const newPokemon : Array<Pokemon> = []
                let id_pokemon: number = 0
                
                for(const pokemon of pokemonList){
                    id_pokemon++
                    const pokemonResponse = await fetch(pokemon.url);
                    
                    const pokemonData = await pokemonResponse.json();
                    
                    const name = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
                    console.log(name);
                    
                    const pokemonCard: Pokemon = {
                        code: `#${id_pokemon}`,
                        name: name, 
                        url: pokemonData.sprites.other['official-artwork'].front_default,
                    }
                    newPokemon.push(pokemonCard)
                }
                setListPokemon(newPokemon)
                setLoading(false)
            }catch(error){
                console.error("Erro ao tentar obter sprites de pokemon: ", error)
            }
        };
        fetchPokemonSprites()
    }, [])

    const renderCardRows = (pokemon: Array<Pokemon>) =>{

        const cardRows: Array<JSX.Element> = [];
        let currentRow: Array<JSX.Element> = [];

        for(let i = 0; i < pokemon.length; i++){
            const {code, name, url} = pokemon[i];
            
            currentRow.push(<Card key={i} code={code} name={name} url={url}/>)

            if((i+1) % 3 === 0 || i === pokemon.length - 1){
                cardRows.push(
                    <View key={i} style={HomeStyle.cardRow}>
                        {currentRow}
                    </View>
                );
                currentRow = [];
            }
        }
        return cardRows;
    };

    return (
        <View style={HomeStyle.home}>
            <View style={HomeStyle.rowContainer}>
                <Image style={{marginTop: 5, tintColor:"white",height: 40, width:40}} source={require("../../../assets/Pokeball.png")}  />
                <Text style={{marginLeft:20,fontSize:40,fontWeight:"bold",color:"white"}}>Pokedéx</Text>
            </View>
            <View style={HomeStyle.rowContainer}>
                <TextField></TextField>
                <TextButton label="#" onclick={()=>{}} style={HomeStyle.textButton}></TextButton>
            </View>
            <View style={HomeStyle.container}>
            <View style={HomeStyle.subContainer}>
                {loading ? <Loading/>:<ScrollView>
                {renderCardRows(listPokemon)}
                </ScrollView>}
            </View>
        </View>
        </View>
    )
}

export default Home