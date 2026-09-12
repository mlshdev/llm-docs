> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/alternateidsresponse](https://developer.apple.com/documentation/applemapsserverapi/alternateidsresponse)

# AlternateIdsResponse

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

A list of alternate Place IDs and associated errors.

## Declaration

```
object AlternateIdsResponse
```

## Properties

- `errors` — `[PlacesResponse.PlaceLookupError]`: A list f of [PlacesResponse.PlaceLookupError](placesresponse/placelookuperror.md) results.
- `results` — `[AlternateIdsResponse.AlternateIds]`: A list of [AlternateIdsResponse.AlternateIds](alternateidsresponse/alternateids.md) results.

## Topics

### Objects

- [AlternateIdsResponse.AlternateIds](alternateidsresponse/alternateids.md): Contains a list of alternate Place IDs for a given Place ID.

## See Also

### Searching

- [AddressCategory](addresscategory.md): Search categories related to political geographical boundaries.
- [SearchACResultType](searchacresulttype.md): An enumerated string that indicates the result type for the search request.
- [SearchResultType](searchresulttype.md): An enumerated string that indicates the result type for the search autocomplete request.
- [AlternateIdsResponse.AlternateIds](alternateidsresponse/alternateids.md): Contains a list of alternate Place IDs for a given Place ID.
- [PlacesResponse](placesresponse.md): A list of Place IDs and errors.
- [PlacesResponse.PlaceLookupError](placesresponse/placelookuperror.md): An error associated with a lookup call.
- [Search for places that match specific criteria](-v1-search.md): Find places by name or by specific search criteria.
- [Search for places that meet specific criteria to autocomplete a place search](-v1-searchautocomplete.md): Find results that you can use to autocomplete searches.
- [Search for a place using an identifier](-v1-place-_id.md): Obtain a Place object for a given Place ID.
- [Search for places using mulitple identifiers](-v1-place.md): Obtain a set of Place objects for a given set of Place IDs.
- [Obtain a list of alternate place identifiers](-v1-place-alternateids.md): Get a list of alternate Place IDs given one or more Place IDs.
