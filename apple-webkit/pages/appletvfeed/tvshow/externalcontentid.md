> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/externalcontentid](https://developer.apple.com/documentation/appletvfeed/tvshow/externalcontentid)

# TvShow.ExternalContentId

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about an external content ID.

## Declaration

```
object TvShow.ExternalContentId
```

## Properties

- `catalogId` — `string`: **(Required)** The unique identifier for the external catalog. The possible values are `iTunes ADAM ID`, `TMS ID`, `TMDb`, `Gracenote TMS ID`, `atvtp (Apple TV+ ID)`.
- `id` — `string`: **(Required)** The unique identifier of the content in the specified catalog.

## See Also

### Related objects

- [TvShow.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.Genre](genre.md): A genre name and its structure.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
