> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/restrictions/1627434-maxtvshowrank](https://developer.apple.com/documentation/tvmljs/restrictions/1627434-maxtvshowrank)

# maxTVShowRank

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+

The maximum allowed ranking for a television show.

## Declaration

```
readonly attribute int maxTVShowRank;
```

<a id="discussion"></a>

## Discussion

The rank for a television show is an integer ranging from `0` to `1000`.

## See Also

### Retrieving Restriction Information

- [allowsExplicit](1627425-allowsexplicit.md): A boolean value that indicates whether any explicit media is allowed.
- [maxMovieRank](1627305-maxmovierank.md): The maximum allowed ranking for a movie.
- [maxMovieRatingForCountry](1627362-maxmovieratingforcountry.md): The maximum movie rating allowed for the specified country or region.
- [maxTVShowRatingForCountry](1627442-maxtvshowratingforcountry.md): The maximum television show rating allowed for the specified country or region.
