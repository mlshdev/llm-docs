> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song/releasedate-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/song/releasedate-data.dictionary)

# Song.ReleaseDate

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to release date for the song.

## Declaration

```
object Song.ReleaseDate
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `releaseDate` — `string`: The date of content release in YYYY-MM-DD format. For Apple Music, the locale is always `default`, so the release date is the same regardless of the time zone.

## See Also

### Related objects

- [Song.ArtistRole](artistrole.md): Information about an artist’s role.
- [Song.Genre](genre.md): A genre name and its structure.
- [Song.Name](name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Song.RelatedAlbum](relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](relatedartist.md): Information about a related artist.
- [Song.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Song.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
