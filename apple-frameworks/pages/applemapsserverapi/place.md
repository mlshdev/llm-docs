> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/place](https://developer.apple.com/documentation/applemapsserverapi/place)

# Place

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An object that describes a place in terms of a variety of spatial, administrative, and qualitative properties.

## Declaration

```
object Place
```

## Properties

- `country` — `string`: The country or region of the place.
- `countryCode` — `string`: The 2-letter country code of the place.
- `displayMapRegion` — `MapRegion`: The geographic region associated with the place.

  This is a rectangular region on a map expressed as south-west and north-east points. Specifically south latitude, west longitude, north latitude, and east longitude.
- `formattedAddressLines` — `[string]`: The address of the place, formatted using its conventions of its country or region.
- `name` — `string`: A place name that you can use for display purposes.
- `coordinate` — `Location`: The latitude and longitude of this place.
- `structuredAddress` — `StructuredAddress`: A [StructuredAddress](structuredaddress.md) object that describes details of the place’s address.
- `alternateIds` — `[string]`: A list of alternate Place IDs for the `id`.
- `id` — `string`: An opaque string that identifies a place.

## Relationships

### Inherited By

- [SearchResponse.Place](searchresponse/place.md)

## See Also

### Getting common object information

- [AutocompleteResult](autocompleteresult.md): An object that contains information you can use to suggest addresses and further refine search results.
- [DirectionsResponse](directionsresponse.md): An object that describes the directions from a starting location to a destination in terms routes, steps, and a series of waypoints.
- [EtaResponse](etaresponse.md): An object that contains an array of one or more estimated times of arrival (ETAs).
- [Location](location.md): An object that describes a location in terms of its longitude and latitude.
- [MapRegion](mapregion.md): An object that describes a map region in terms of its upper-right and lower-left corners as a pair of geographic points.
- [PlaceResults](placeresults.md): An object that contains an array of places.
- [SearchAutocompleteResponse](searchautocompleteresponse.md): An array of autocomplete results.
- [SearchMapRegion](searchmapregion.md): An object that describes an area to search in terms of its upper-right and lower-left corners as a pair of geographic points.
- [SearchResponse](searchresponse.md): An object that contains the search region and an array of place descriptions that a search returns.
- [StructuredAddress](structuredaddress.md): An object that describes the detailed address components of a place.
