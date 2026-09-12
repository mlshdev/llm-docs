> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/name-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/album/name-data.dictionary)

# Album.Name

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to localized names for the album.

## Declaration

```
object Album.Name
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `name` — `string`: A localized uncensored name for the album.

## See Also

### Related objects

- [Album.ArtistRole](artistrole.md): Information about an artist’s role.
- [Album.Artworks](artworks-data.dictionary.md): A mapping of locale to localized album cover art.
- [Album.Genre](genre.md): A genre name and its structure.
- [Album.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Album.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Album.RecordLabel](recordlabel.md): Information about a record label.
- [Album.RelatedArtist](relatedartist.md): Information about a related artist.
- [Album.RelatedSong](relatedsong.md): Information about a related song.
- [Album.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the album.
- [Album.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Album.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
