> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason/externalcontentid](https://developer.apple.com/documentation/appletvfeed/tvseason/externalcontentid)

# TvSeason.ExternalContentId

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about an external content ID.

## Declaration

```
object TvSeason.ExternalContentId
```

## Properties

- `catalogId` — `string`: **(Required)** The unique identifier for the external catalog. The possible values are `iTunes ADAM ID`, `TMS ID`, `TMDb`, `Gracenote TMS ID`, `atvtp (Apple TV+ ID)`.
- `id` — `string`: **(Required)** The unique identifier of the content in the specified catalog.

## See Also

### Related objects

- [TvSeason.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvSeason.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvSeason.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.Genre](genre.md): A genre name and its structure.
- [TvSeason.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvSeason.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvSeason.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
