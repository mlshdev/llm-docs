> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/restrictions/1627442-maxtvshowratingforcountry](https://developer.apple.com/documentation/tvmljs/restrictions/1627442-maxtvshowratingforcountry)

# maxTVShowRatingForCountry

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

The maximum television show rating allowed for the specified country or region.

## Declaration

```
String maxTVShowRatingForCountry(
    in String countryCode
);
```

## Parameters

- `countryCode`: An object containing the valid country code. If the code is invalid, the current country or region based on location is used.

<a id="return_value"></a>

## Return Value

A string representing the maximum allowed rating for a television show in the specified country or region; for example, PG-13.

## See Also

### Retrieving Restriction Information

- [allowsExplicit](1627425-allowsexplicit.md): A boolean value that indicates whether any explicit media is allowed.
- [maxMovieRank](1627305-maxmovierank.md): The maximum allowed ranking for a movie.
- [maxMovieRatingForCountry](1627362-maxmovieratingforcountry.md): The maximum movie rating allowed for the specified country or region.
- [maxTVShowRank](1627434-maxtvshowrank.md): The maximum allowed ranking for a television show.
