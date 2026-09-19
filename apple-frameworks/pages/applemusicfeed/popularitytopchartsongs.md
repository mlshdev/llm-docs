> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemusicfeed/popularitytopchartsongs

# PopularityTopChartSongs

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

The data structure that represents a song popularity chart resource.

## Declaration

```
object PopularityTopChartSongs
```

## Properties

- `genre` — `PopularityTopChartSongs.Genre`: **(Required)** The chart’s associated genre.
- `rankings` — `[PopularityTopChartSongs.Rankings]`: **(Required)** A list of song rankings in the chart.
- `storefront` — `string`: **(Required)** The chart’s associated storefront.

## Topics

### Related objects

- [PopularityTopChartSongs.Genre](popularitytopchartsongs/genre-data.dictionary.md): A genre name and its structure.
- [PopularityTopChartSongs.Rankings](popularitytopchartsongs/rankings-data.dictionary.md): A song’s ranking in a popularity chart.

## See Also

### Objects

- [Album](album.md): The data structure that represents an Album resource.
- [Song](song.md): The data structure that represents a Song resource.
- [Artist](artist.md): The data structure that represents an Artist resource.
- [PopularityTopChartAlbums](popularitytopchartalbums.md): The data structure that represents an album popularity chart resource.
