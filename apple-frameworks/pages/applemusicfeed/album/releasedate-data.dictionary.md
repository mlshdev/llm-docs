> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/releasedate-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/album/releasedate-data.dictionary)

# Album.ReleaseDate

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to release date for the album.

## Declaration

```
object Album.ReleaseDate
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `releaseDate` — `string`: The date of content release in YYYY-MM-DD format. For Apple Music, the locale is always `default`, so the release date is the same regardless of the time zone.

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
- [Album.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Album.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
