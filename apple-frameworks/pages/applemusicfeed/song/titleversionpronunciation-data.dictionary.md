> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song/titleversionpronunciation-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/song/titleversionpronunciation-data.dictionary)

# Song.TitleVersionPronunciation

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to translations for the specific title-version-pronunciation-name translation type.

## Declaration

```
object Song.TitleVersionPronunciation
```

## Properties

- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates fallback to `default`.
- `titleVersionPronunciation` — `string`: A localized pronunciation of the song title version.

## See Also

### Related objects

- [Song.ArtistRole](artistrole.md): Information about an artist’s role.
- [Song.Genre](genre.md): A genre name and its structure.
- [Song.Name](name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Song.RelatedAlbum](relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](relatedartist.md): Information about a related artist.
- [Song.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the song.
- [Song.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
