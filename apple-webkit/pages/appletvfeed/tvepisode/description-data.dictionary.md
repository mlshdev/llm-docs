> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode/description-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvepisode/description-data.dictionary)

# TvEpisode.Description

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized descriptions of the TV episode.

## Declaration

```
object TvEpisode.Description
```

## Properties

- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.
- `short` — `string`: The short-form localized description of the content.
- `standard` — `string`: The full localized description of the content.

## See Also

### Related objects

- [TvEpisode.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvEpisode.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvEpisode.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvEpisode.Genre](genre.md): A genre name and its structure.
- [TvEpisode.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvEpisode.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
