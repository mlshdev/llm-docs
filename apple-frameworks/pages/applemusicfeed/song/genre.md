> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song/genre](https://developer.apple.com/documentation/applemusicfeed/song/genre)

# Song.Genre

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A genre name and its structure.

## Declaration

```
object Song.Genre
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

- [Song.ArtistRole](artistrole.md): Information about an artist’s role.
- [Song.Name](name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Song.RelatedAlbum](relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](relatedartist.md): Information about a related artist.
- [Song.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the song.
- [Song.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Song.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
