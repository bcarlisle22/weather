import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions} from "../../api";

const Search = ({onSearchChange}) => {

   const [search, setSearch] = useState(null);

    const loadOptions = (inputValue) =>{
        return fetch(
          `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
          geoApiOptions

        )
        .then((response) => response.json())
        .then((response) => {
            return{
                options: response.data.map((city)=> {
                    return{
                        value:`${city.latitude} ${city.longitude}`, //spelled latitude wrong - fixed
                        label:`${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch((err) => console.error(err));
    };

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    };

    return (
        <AsyncPaginate
        placeholder="Search for a city"
        debounceTimeout={600}
        value={search}
        onChange ={handleOnChange}
        loadOptions = {loadOptions} // changed from geoApiOptions to loadOptions
        />
    );
}

export default Search;