> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/titleversion-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/album/titleversion-data.dictionary)

# Album.TitleVersion

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to translations for the specific title-version translation type.

## Declaration

```
object Album.TitleVersion
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `titleVersion` — `string`: A localized title version for the content.

## See Also

### Related objects

- [Album.ArtistRole](artistrole.md): Information about an artist’s role.
- [Album.Artworks](artworks-data.dictionary.md): A mapping of locale to localized album cover art.
- [Album.Genre](genre.md): A genre name and its structure.
- [Album.Name](name-data.dictionary.md): A mapping of locale to localized names for the album.
- [Album.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Album.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Album.RecordLabel](recordlabel.md): Information about a record label.
- [Album.RelatedArtist](relatedartist.md): Information about a related artist.
- [Album.RelatedSong](relatedsong.md): Information about a related song.
- [Album.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the album.
- [Album.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
