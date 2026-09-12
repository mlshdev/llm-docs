> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/placesresponse/placelookuperror](https://developer.apple.com/documentation/applemapsserverapi/placesresponse/placelookuperror)

# PlacesResponse.PlaceLookupError

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An error associated with a lookup call.

## Declaration

```
object PlacesResponse.PlaceLookupError
```

## Properties

- `errorCode` — `string`: An error code that indicates whether an Place ID is invalid because it’s malformed, not found, or resulted in any other error.
  **Allowed values:** `FAILED_INVALID_ID`, `FAILED_NOT_FOUND`, `FAILED_INTERNAL_ERROR`
- `id` — `string`: The Place ID.

## See Also

### Searching

- [AddressCategory](../addresscategory.md): Search categories related to political geographical boundaries.
- [SearchACResultType](../searchacresulttype.md): An enumerated string that indicates the result type for the search request.
- [SearchResultType](../searchresulttype.md): An enumerated string that indicates the result type for the search autocomplete request.
- [AlternateIdsResponse](../alternateidsresponse.md): A list of alternate Place IDs and associated errors.
- [AlternateIdsResponse.AlternateIds](../alternateidsresponse/alternateids.md): Contains a list of alternate Place IDs for a given Place ID.
- [PlacesResponse](../placesresponse.md): A list of Place IDs and errors.
- [Search for places that match specific criteria](../-v1-search.md): Find places by name or by specific search criteria.
- [Search for places that meet specific criteria to autocomplete a place search](../-v1-searchautocomplete.md): Find results that you can use to autocomplete searches.
- [Search for a place using an identifier](../-v1-place-_id.md): Obtain a Place object for a given Place ID.
- [Search for places using mulitple identifiers](../-v1-place.md): Obtain a set of Place objects for a given set of Place IDs.
- [Obtain a list of alternate place identifiers](../-v1-place-alternateids.md): Get a list of alternate Place IDs given one or more Place IDs.
