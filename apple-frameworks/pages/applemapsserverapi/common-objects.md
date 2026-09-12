> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/common-objects](https://developer.apple.com/documentation/applemapsserverapi/common-objects)

# Common objects

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** API Collection

Understand the common JSON objects that API responses contain.

## Topics

### Getting an access token

- [TokenResponse](tokenresponse.md): An object that contains an access token and an expiration time in seconds.

### Getting common object information

- [AutocompleteResult](autocompleteresult.md): An object that contains information you can use to suggest addresses and further refine search results.
- [DirectionsResponse](directionsresponse.md): An object that describes the directions from a starting location to a destination in terms routes, steps, and a series of waypoints.
- [EtaResponse](etaresponse.md): An object that contains an array of one or more estimated times of arrival (ETAs).
- [Location](location.md): An object that describes a location in terms of its longitude and latitude.
- [MapRegion](mapregion.md): An object that describes a map region in terms of its upper-right and lower-left corners as a pair of geographic points.
- [Place](place.md): An object that describes a place in terms of a variety of spatial, administrative, and qualitative properties.
- [PlaceResults](placeresults.md): An object that contains an array of places.
- [SearchAutocompleteResponse](searchautocompleteresponse.md): An array of autocomplete results.
- [SearchMapRegion](searchmapregion.md): An object that describes an area to search in terms of its upper-right and lower-left corners as a pair of geographic points.
- [SearchResponse](searchresponse.md): An object that contains the search region and an array of place descriptions that a search returns.
- [StructuredAddress](structuredaddress.md): An object that describes the detailed address components of a place.

### Getting common type information

- [CountryCode](countrycode.md): A string that represents a two-letter country code.
- [DirectionsAvoid](directionsavoid.md): A list of the features you can request to avoid when calculating directions.
- [Lang](lang.md): A string that represents a standard tag for identifying languages.
- [PoiCategory](poicategory.md): A string that describes a specific point of interest (POI) category.
- [SearchLocation](searchlocation.md): A string that describes a geographic location in the form of longitude and latitude.
- [SearchRegion](searchregion.md): A string that describes a region to search in terms of its upper-right and lower-left corners as a pair of geographic points.
- [UserLocation](userlocation.md): A string that describes the user’s location in terms of longitude and latitude.

### Handling errors

- [ErrorResponse](errorresponse.md): Information about an error that occurs while processing a request.

## See Also

### Essentials

- [Creating and using tokens with Maps Server API](creating-and-using-tokens-with-maps-server-api.md): Sign JSON Web Tokens to use Maps Server API and debug common signing errors.
- [Creating a Maps identifier and a private key](creating-a-maps-identifier-and-a-private-key.md): Create a Maps identifier and a private key before generating tokens for MapKit JS.
- [Generate a Maps token](-v1-token.md): Returns a JWT maps access token that you use to call the service API.
- [Debugging an Invalid token](debugging-an-invalid-token.md): Inspect the JavaScript console logs, the token, and events to determine why a token is invalid.
- [Integrating the Apple Maps Server API into Java server applications](integrating-the-apple-maps-server-api-into-java-server-applications.md): Streamline your app’s API by moving georelated searches from inside your app to your server.
