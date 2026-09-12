> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/directionsresponse](https://developer.apple.com/documentation/applemapsserverapi/directionsresponse)

# DirectionsResponse

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An object that describes the directions from a starting location to a destination in terms routes, steps, and a series of waypoints.

## Declaration

```
object DirectionsResponse
```

## Properties

- `destination` — `Place`: A [Place](place.md) object that describes the destination.
- `origin` — `Place`: A [Place](place.md) result that describes the origin.
- `routes` — `[DirectionsResponse.Route]`: An array of routes. Each route references steps based on indexes into the steps array.
- `stepPaths` — `[Location]`: An array of step paths across all steps across all routes. Each step path is a single polyline represented as an array of points. You reference the step paths by index into the array.
- `steps` — `[DirectionsResponse.Step]`: An array of all steps across all routes. You reference the route steps by index into this array. Each step in turn references its path based on indexes into the `stepPaths` array.

## Topics

### Steps and routes

- [DirectionsResponse.Route](directionsresponse/route.md): An object that represent the components of a single route.
- [DirectionsResponse.Step](directionsresponse/step.md): An object that represents a step along a route.

## See Also

### Getting common object information

- [AutocompleteResult](autocompleteresult.md): An object that contains information you can use to suggest addresses and further refine search results.
- [EtaResponse](etaresponse.md): An object that contains an array of one or more estimated times of arrival (ETAs).
- [Location](location.md): An object that describes a location in terms of its longitude and latitude.
- [MapRegion](mapregion.md): An object that describes a map region in terms of its upper-right and lower-left corners as a pair of geographic points.
- [Place](place.md): An object that describes a place in terms of a variety of spatial, administrative, and qualitative properties.
- [PlaceResults](placeresults.md): An object that contains an array of places.
- [SearchAutocompleteResponse](searchautocompleteresponse.md): An array of autocomplete results.
- [SearchMapRegion](searchmapregion.md): An object that describes an area to search in terms of its upper-right and lower-left corners as a pair of geographic points.
- [SearchResponse](searchresponse.md): An object that contains the search region and an array of place descriptions that a search returns.
- [StructuredAddress](structuredaddress.md): An object that describes the detailed address components of a place.
