> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/searchresponse](https://developer.apple.com/documentation/applemapsserverapi/searchresponse)

# SearchResponse

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An object that contains the search region and an array of place descriptions that a search returns.

## Declaration

```
object SearchResponse
```

## Properties

- `displayMapRegion` — `SearchMapRegion`: Represents a rectangular region on a map expressed as south-west and north-east points. More specifically south latitude, west longitude, north latitude and east longitude.
- `paginationInfo` — `SearchResponse.PaginationInfo`:
- `results` — `[SearchResponse.Place]`: An array of [SearchResponse.Place](searchresponse/place.md) results.

## Topics

### Place information returned by a search

- [SearchResponse.Place](searchresponse/place.md): A structure returned by a search that describes a place.
- [SearchResponse.PaginationInfo](searchresponse/paginationinfo-data.dictionary.md): An object that returns a page of search responses.

## See Also

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
- [StructuredAddress](structuredaddress.md): An object that describes the detailed address components of a place.
