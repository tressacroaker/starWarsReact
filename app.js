var List = React.createClass({

  render: function() {
    if (this.props.selection == "People!"){
      var Nodes = this.props.data.map(function(person) {
        return (
          <Person
            name={person.name}
            height={person.height}
      			mass={person.mass}
      			haircolor={person.hair_color}
      			skincolor={person.skin_color}
      			eyecolor={person.eye_color}
      			birthyear={person.birth_year}
      			gender={person.gender}
      			homeworld={person.homeworld}
          />
        );
      });
    } else if (this.props.selection == "Planets!"){
      var Nodes = this.props.data.map(function(planet) {
        return (
          <Planet
            name={planet.name}
            rotationperiod={planet.rotation_period}
            orbitalperiod={planet.orbital_period}
            diameter={planet.diameter}
            climate={planet.climate}
            gravity={planet.gravity}
            terrain={planet.terrain}
            surfacewater={planet.surface_water}
            population={planet.population}
          />
        );
      });
    } else if (this.props.selection == "Starships!"){
      var Nodes = this.props.data.map(function(starship) {
        return (
          <Starship
            name={starship.name}
      			model={starship.model}
      			manufacturer={starship.manufacturer}
      			costincredits={starship.cost_in_credits}
      			length={starship.length}
      			maxatmospheringspeed={starship.max_atmosphering_speed}
      			crew={starship.crew}
      			passengers={starship.passengers}
      			cargocapacity={starship.cargo_capacity}
      			consumables={starship.consumables}
      			hyperdriverating={starship.hyperdrive_rating}
      			MGLT={starship.MGLT}
      			starshipclass={starship.starship_class}
          />
        );
      });
    } else if (this.props.selection == "Vehicles!"){
      var Nodes = this.props.data.map(function(vehicle) {
        return (
          <Vehicle
            name={vehicle.name}
      			model={vehicle.model}
      			manufacturer={vehicle.manufacturer}
      			costincredits={vehicle.cost_in_credits}
      			length={vehicle.length}
      			maxatmospheringspeed={vehicle.max_atmosphering_speed}
      			crew={vehicle.crew}
      			passengers={vehicle.passengers}
      			cargocapacity={vehicle.cargo_capacity}
      			consumables={vehicle.consumables}
      			vehicleclass={vehicle.vehicle_class}
          />
        );
      });
    } else if (this.props.selection == "Films!"){
      var Nodes = this.props.data.map(function(film) {
        return (
          <Film
            title={film.title}
            episodeid={film.episode_id}
            openingcrawl={film.opening_crawl}
            director={film.director}
            producer={film.producer}
            releasedate={film.release_date}
          />
        );
      });
    } else if (this.props.selection == "Species!"){
      var Nodes = this.props.data.map(function(speci) {
        return (
          <Speci
            name={speci.name}
      			classification={speci.classification}
      			designation={speci.designation}
      			averageheight={speci.average_height}
      			skincolors={speci.skin_colors}
      			haircolors={speci.hair_colors}
      			eyecolors={speci.eye_colors}
      			averagelifespan={speci.average_lifespan}
      			language={speci.language}
          />
        );
      });
    }
    return (
      <div>
        <h1 className="selection">{this.props.selection}</h1>
        <div className="List">
          {Nodes}
        </div>
      </div>
    );
  }
});

var Person = React.createClass({
  render: function() {
    return (
      <div className="person">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Height: {this.props.height}</li>
          <li>Mass: {this.props.mass}</li>
          <li>Hair Color: {this.props.haircolor}</li>
          <li>Skin Color: {this.props.skincolor}</li>
          <li>Eye Color: {this.props.eyecolor}</li>
          <li>Birth Year: {this.props.birthyear}</li>
          <li>Gender: {this.props.gender}</li>
        </ul>
      </div>
    );
  }
});
var Planet = React.createClass({
  render: function() {
    return (
      <div className="planet">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Rotational Period: {this.props.rotationperiod}</li>
          <li>Orbital Period: {this.props.orbitalperiod}</li>
          <li>Diameter: {this.props.diameter}</li>
          <li>Climate: {this.props.climate}</li>
          <li>Gravity: {this.props.gravity}</li>
          <li>Terrain: {this.props.terrain}</li>
          <li>Surface Water: {this.props.surfacewater}</li>
          <li>Population: {this.props.population}</li>
        </ul>
      </div>
    );
  }
});
var Vehicle = React.createClass({
  render: function() {
    return (
      <div className="vehicle">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Model: {this.props.model}</li>
          <li>Manufacturer: {this.props.manufacturer}</li>
          <li>Cost In Credits: {this.props.costincredits}</li>
          <li>Length: {this.props.length}</li>
          <li>Max Atomsphering Speed: {this.props.maxatmospheringspeed}</li>
          <li>Crew: {this.props.crew}</li>
          <li>Passengers: {this.props.passengers}</li>
          <li>Cargo Capacity: {this.props.cargocapacity}</li>
          <li>Consumables: {this.props.consumables}</li>
          <li>Vehicle Class: {this.props.vehicleclass}</li>
        </ul>
      </div>
    );
  }
});
var Starship = React.createClass({
  render: function() {
    return (
      <div className="starship">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Model: {this.props.model}</li>
          <li>Manufacturer: {this.props.manufacturer}</li>
          <li>Cost In Credits: {this.props.costincredits}</li>
          <li>Length: {this.props.length}</li>
          <li>Max Atmosphering Speed: {this.props.maxatmospheringspeed}</li>
          <li>Crew: {this.props.crew}</li>
          <li>Passengers: {this.props.passengers}</li>
          <li>Cargo Capacity: {this.props.cargocapacity}</li>
          <li>Consumables: {this.props.consumables}</li>
          <li>Hyperdrive Rating {this.props.hyperdriverating}</li>
          <li>MGLT: {this.props.MGLT}</li>
          <li>Starship Class: {this.props.starshipclass}</li>
        </ul>
      </div>
    );
  }
});
var Film = React.createClass({
  render: function() {
    return (
      <div className="film">
        <h2>{this.props.title}</h2>
        <ul>
          <li>Opening Crawl: {this.props.openingcrawl}</li>
          <li>Episode ID: {this.props.episodeid}</li>
          <li>Director: {this.props.director}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Release Date: {this.props.releasedate}</li>
        </ul>
      </div>
    );
  }
});
var Speci = React.createClass({
  render: function() {
    return (
      <div className="speci">
        <h2>{this.props.name}</h2>
        <ul>
          <li>Classification: {this.props.classification}</li>
          <li>Designation: {this.props.designation}</li>
          <li>Average Height: {this.props.averageheight}</li>
          <li>Skin Colors: {this.props.skincolors}</li>
          <li>Hair Colors: {this.props.haircolors}</li>
          <li>Eye Colors: {this.props.eyecolors}</li>
          <li>Average Life Span: {this.props.averagelifespan}</li>
          <li>Language: {this.props.language}</li>
        </ul>
      </div>
    );
  }
});

var StarWarsPage = React.createClass({
  loadPeopleFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "people",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "People!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "people", status, err.toString());
      }.bind(this)
    });
  },
  loadPlanetsFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "planets",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "Planets!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "planets", status, err.toString());
      }.bind(this)
    });
  },
  loadStarshipsFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "starships",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "Starships!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "starships", status, err.toString());
      }.bind(this)
    });
  },
  loadVehiclesFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "vehicles",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "Vehicles!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "vehicles", status, err.toString());
      }.bind(this)
    });
  },
  loadFilmsFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "films",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "Films!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "films", status, err.toString());
      }.bind(this)
    });
  },
  loadSpeciesFromServer: function() {
    $.ajax({
      method: "GET",
      url: this.props.url + "species",
      success: function(data) {
        this.setState({data: data.results});
        this.setState({selection: "Species!"});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url + "species", status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      data: [],
      selection: ""
    };
  },
  render: function() {
    return (
      <div className="swpage">
        <h1 className="pagetitle">This is a List of all of the Things Star Wars</h1>
        <p className="pageinstructions">Click on a data type to see a list of info.</p>
        <div className="nav">
          <button onClick={this.loadPeopleFromServer}>People</button>
          <button onClick={this.loadPlanetsFromServer}>Planets</button>
          <button onClick={this.loadStarshipsFromServer}>Starships</button>
          <button onClick={this.loadVehiclesFromServer}>Vehicles</button>
          <button onClick={this.loadFilmsFromServer}>Films</button>
          <button onClick={this.loadSpeciesFromServer}>Species</button>
        </div>
        <List data={this.state.data} selection={this.state.selection}/>
      </div>
    );
  }
});

ReactDOM.render(
  <StarWarsPage url="http://swapi.co/api/"/>,
  document.getElementById('content')
);
