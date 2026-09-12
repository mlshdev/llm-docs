> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason/artworks-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvseason/artworks-data.dictionary)

# TvSeason.Artworks

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized artwork.

## Declaration

```
object TvSeason.Artworks
```

## Properties

- `artwork` — `TvSeason.Artworks.Artwork`: The artwork related to this content.
- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.

  Note: The locale can contain a wildcard; for example, `-au` matches all languages for Australia, and `en-*` matches all countries that have English as a language.

## Topics

### Related objects

- [TvSeason.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): The artwork related to this content.

## See Also

### Related objects

- [TvSeason.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvSeason.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvSeason.Genre](genre.md): A genre name and its structure.
- [TvSeason.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvSeason.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvSeason.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
