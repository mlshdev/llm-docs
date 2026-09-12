> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemusicfeed/song](https://developer.apple.com/documentation/applemusicfeed/song)

# Song

**Interface language:** Data

**Framework:** Apple Music Feed  
**Kind:** Object  
**Availability:** AppleMusicFeed 1.0+

The data structure that represents a Song resource.

## Declaration

```
object Song
```

## Properties

- `album` — `[Song.RelatedAlbum]`: A list of albums that contain the song.
- `artistRoles` — `[Song.ArtistRole]`: **(Required)** A list of artists and their roles.
- `audioLocale` — `string`: The locale of the audio. This usually corresponds to the language of the song. The locale uses the IETF language tag format.
- `contentTraits` — `[string]`: **(Required)** A list of the content traits for the song. The possible values are `remix`, `live`, `compilation`, and `karaoke`.
- `copyright` — `string`: The copyright notice text.
- `copyrightPline` — `string`: The copyright performance rights text that displays in Apple Music.
- `durationInMillis` — `number`: The length of the song in milliseconds.
- `featuredArtists` — `[Song.RelatedArtist]`: **(Required)** A list of the featured artists of the song.
- `genres` — `[Song.Genre]`: **(Required)** A list of genre information for the song.
- `id` — `string`: The identifier for the song in Apple Music.
- `isrc` — `string`: The International Standard Recording Code (ISRC) for the sound or music video recording.
- `lastModifiedTime` — `string`: The time, in ISO 8601 format, of the entity’s most recent update.
- `name` — `Song.Name`: **(Required)** A mapping of locale to localized uncensored names for the song.
- `nameDefault` — `string`: The default name for the song.
- `namePronunciation` — `Song.NamePronunciation`: **(Required)** A mapping of locale to translations for the specific pronunciation-name translation type.
- `parentalAdvisoryType` — `string`: The type of parental advisory status. The possible values are `none`, `explicit`, `not explicit`, and `cleaned`.
- `prices` — `Song.Prices`: **(Required)** A mapping of locale to pricing information. Pricing offer parameters include `price`, `priceType`, and `quality`.
- `primaryArtists` — `[Song.RelatedArtist]`: **(Required)** A list of the primary artists of the song.
- `releaseDate` — `Song.ReleaseDate`: **(Required)** A mapping of locale to release date, in YYYY-MM-DD format.
- `shortPreview` — `string`: **(Required)** A template for the URL for a short audio preview of the song.
- `titleVersion` — `Song.TitleVersion`: **(Required)** A mapping of locale to translations for the specific title-version translation type.
- `titleVersionPronunciation` — `Song.TitleVersionPronunciation`: **(Required)** A mapping of locale to translations for the specific title-version-pronunciation-name translation type.
- `trackNumber` — `number`: The track number of the song.
- `urlTemplate` — `string`: A template for the URL to view the entity in Apple Music. The template requires an ISO country code for the `{country-code}` placeholder.
- `volumeNumber` — `number`: The volume number of the song.

## Topics

### Related objects

- [Song.ArtistRole](song/artistrole.md): Information about an artist’s role.
- [Song.Genre](song/genre.md): A genre name and its structure.
- [Song.Name](song/name-data.dictionary.md): A mapping of locale to localized names for the song.
- [Song.NamePronunciation](song/namepronunciation-data.dictionary.md): A mapping of locale to translations for the specific pronunciation-name translation type.
- [Song.Prices](song/prices-data.dictionary.md): A mapping of locale to pricing information.
- [Song.RelatedAlbum](song/relatedalbum.md): Information about a related album.
- [Song.RelatedArtist](song/relatedartist.md): Information about a related artist.
- [Song.ReleaseDate](song/releasedate-data.dictionary.md): A mapping of locale to release date for the song.
- [Song.TitleVersion](song/titleversion-data.dictionary.md): A mapping of locale to translations for the specific title-version translation type.
- [Song.TitleVersionPronunciation](song/titleversionpronunciation-data.dictionary.md): A mapping of locale to translations for the specific title-version-pronunciation-name translation type.

## See Also

### Objects

- [Album](album.md): The data structure that represents an Album resource.
- [Artist](artist.md): The data structure that represents an Artist resource.
- [PopularityTopChartAlbums](popularitytopchartalbums.md): The data structure that represents an album popularity chart resource.
- [PopularityTopChartSongs](popularitytopchartsongs.md): The data structure that represents a song popularity chart resource.
