> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song/artistrole](https://developer.apple.com/documentation/applemusicfeed/song/artistrole)

# Song.ArtistRole

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

Information about an artist’s role.

## Declaration

```
object Song.ArtistRole
```

## Properties

- `artistId` — `string`: The identifier for the artist in Apple Music.
- `artistName` — `string`: The name of the artist.
- `roleName` — `string`: The artist’s role. Possible values include `compose-author`, `contributor`, `translator`, `performer`, `arranger`, `composer`, `adapter`, and `author`.

## See Also

### Related objects

- [Song.Genre](genre.md): A genre name and its structure.
- [Song.Name](name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Song.RelatedAlbum](relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](relatedartist.md): Information about a related artist.
- [Song.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the song.
- [Song.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Song.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
