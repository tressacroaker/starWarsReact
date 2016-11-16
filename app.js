var Person = React.createClass({
  render: function(){
    return (
      <div className="card">
        <h2>{this.props.name}:</h2>
        <h4>Height: {this.props.height}</h4>
        <h4>Mass: {this.props.mass}</h4>
        <h4>Hair Color: {this.props.haircolor}</h4>
        <h4>Skin Color: {this.props.skincolor}</h4>
        <h4>Eye Color: {this.props.eyecolor}</h4>
        <h4>Birth Year: {this.props.birthyear}</h4>
        <h4>Gender: {this.props.gender}</h4>
      </div>
    )
  }
});

var Species = React.createClass({
  render: function(){
    return (
      <div className="card">
        <h2>{this.props.name}:</h2>
        <h4>Classification: {this.props.classification}</h4>
        <h4>Designation: {this.props.designation}</h4>
        <h4>Average Height: {this.props.averageheight}</h4>
        <h4>Skin Colors: {this.props.skincolors}</h4>
        <h4>Eye Colors: {this.props.eyecolors}</h4>
        <h4>Hair Colors: {this.props.haircolors}</h4>
        <h4>Birth Year: {this.props.birthyear}</h4>
        <h4>Average Lifespan: {this.props.averagelifespan}</h4>
        <h4>Language: {this.props.language}</h4>
      </div>
    )
  }
})

var List = React.createClass({
  render: function(){
    var PersonNodes = this.props.data.map(function(person){
      return(
      <Person key={person.id}
        name={person.name}
        height={person.height}
        mass={person.mass}
        haircolor={person.hair_color}
        skincolor={person.skin_color}
        eyecolor={person.eye_color}
        birthyear={person.birth_year}
        gender={person.gender}
        />
    );
  });
  var SpeciesNodes = this.props.data.map(function(species){
    return (
      <Species
        name={species.name}
        classification={species.classification}
        designation={species.designation}
        averageheight={species.average_height}
        skincolors={species.skin_colors}
        haircolors={species.hair_colors}
        eyecolors={species.eye_colors}
        averagelifespan={species.average_lifespan}
        language={species.language}
      />
    );
  });
    return (
      <div className="container">
        {PersonNodes} {SpeciesNodes}
      </div>
    );
  }
});

var StarWarsPage = React.createClass({
  loadPeopleFromServer: function(){
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/people",
      success: function(data){
        console.log(data);
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(status, err.toString());
      }.bind(this)
    })
  },
  loadSpeciesFromServer: function(){
    $.ajax({
      method: "GET",
      url: "http://swapi.co/api/species",
      success: function(data){
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err){
      }.bind(this)
    })
  },

  getInitialState: function(){
    return {
      data: []
    };
  },
  render: function(){
    return (
      <div className="outerContainer">
      <button onClick={this.loadPeopleFromServer}>People</button>
      <button onClick={this.loadSpeciesFromServer}>Species</button>
      <button onClick={this.loadPeopleFromServer}>Starships</button>
      <button onClick={this.loadPeopleFromServer}>Vehichles</button>
      <List data={this.state.data}/>
      </div>
    );
  }
});


ReactDOM.render(
  <StarWarsPage />, document.getElementById('content')
);
