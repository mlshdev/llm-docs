> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/popularitytopchartsongs/genre-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/popularitytopchartsongs/genre-data.dictionary)

# PopularityTopChartSongs.Genre

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A genre name and its structure.

## Declaration

```
object PopularityTopChartSongs.Genre
```

## Properties

- `name` — `string`: The name of the genre.
- `path` — `[string]`: A list of genres in hierarchical order. For example, if `Classical` is a subgenre of `Music`, this value is `[‘Music’, ‘Classical’]`.

<a id="Discussion"></a>

## Discussion

Genres are hierarchical beginning with the genre `Music`.

<a id="Data-example"></a>

## Data example

The feed export is in Parquet format. This data example is in JSON format for illustrative purposes.

```
{
    "genres": {
        "name": "Rock",
        "path": [
            "Music",
            "Classical",
            "Rock"
        ]
    }
}
```

## See Also

### Related objects

- [PopularityTopChartSongs.Rankings](rankings-data.dictionary.md): A song’s ranking in a popularity chart.
