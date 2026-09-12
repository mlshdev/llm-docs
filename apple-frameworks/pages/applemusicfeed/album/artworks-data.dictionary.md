> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/album/artworks-data.dictionary](https://developer.apple.com/documentation/applemusicfeed/album/artworks-data.dictionary)

# Album.Artworks

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

A mapping of locale to localized album cover art.

## Declaration

```
object Album.Artworks
```

## Properties

- `artwork` — `Album.Artworks.Artwork`: The cover art for the album.
- `locale` — `string`: A locale in the IETF language tag format. An empty value indicates default artwork without an associated locale.

## Topics

### Related objects

- [Album.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): Information about a piece of artwork.

## See Also

### Related objects

- [Album.ArtistRole](artistrole.md): Information about an artist’s role.
- [Album.Genre](genre.md): A genre name and its structure.
- [Album.Name](name-data.dictionary.md): A mapping of locale to localized names for the album.
- [Album.NamePronunciation](namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Album.Prices](prices-data.dictionary.md): A mapping of locale to pricing information.
- [Album.RecordLabel](recordlabel.md): Information about a record label.
- [Album.RelatedArtist](relatedartist.md): Information about a related artist.
- [Album.RelatedSong](relatedsong.md): Information about a related song.
- [Album.ReleaseDate](releasedate-data.dictionary.md): A mapping of locale to release date for the album.
- [Album.TitleVersion](titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Album.TitleVersionPronunciation](titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
