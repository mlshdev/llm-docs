> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/movie/externalcontentid](https://developer.apple.com/documentation/appletvfeed/movie/externalcontentid)

# Movie.ExternalContentId

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about an external content ID.

## Declaration

```
object Movie.ExternalContentId
```

## Properties

- `catalogId` — `string`: **(Required)** The unique identifier for the external catalog. The possible values are `iTunes ADAM ID`, `TMS ID`, `TMDb`, `Gracenote TMS ID`, `atvtp (Apple TV+ ID)`.
- `id` — `string`: **(Required)** The unique identifier of the content in the specified catalog.

## See Also

### Related objects

- [Movie.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [Movie.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [Movie.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the movie.
- [Movie.Genre](genre.md): A genre name and its structure.
- [Movie.Name](name-data.dictionary.md): A mapping of locale to localized names for the movie.
- [Movie.OriginalReleaseDate](originalreleasedate-data.dictionary.md): A mapping of locale to localized release date.
- [Movie.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [Movie.Rating](rating-data.dictionary.md): Information about a content rating.
- [Movie.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
