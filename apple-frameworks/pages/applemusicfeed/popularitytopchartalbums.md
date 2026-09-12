> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/popularitytopchartalbums](https://developer.apple.com/documentation/applemusicfeed/popularitytopchartalbums)

# PopularityTopChartAlbums

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

The data structure that represents an album popularity chart resource.

## Declaration

```
object PopularityTopChartAlbums
```

## Properties

- `genre` — `PopularityTopChartAlbums.Genre`: **(Required)** The chart’s associated genre.
- `rankings` — `[PopularityTopChartAlbums.Rankings]`: **(Required)** A list of album rankings in the chart.
- `storefront` — `string`: **(Required)** The chart’s associated storefront.

## Topics

### Related objects

- [PopularityTopChartAlbums.Genre](popularitytopchartalbums/genre-data.dictionary.md): A genre name and its structure.
- [PopularityTopChartAlbums.Rankings](popularitytopchartalbums/rankings-data.dictionary.md): An album’s ranking in a popularity chart.

## See Also

### Objects

- [Album](album.md): The data structure that represents an Album resource.
- [Song](song.md): The data structure that represents a Song resource.
- [Artist](artist.md): The data structure that represents an Artist resource.
- [PopularityTopChartSongs](popularitytopchartsongs.md): The data structure that represents a song popularity chart resource.
