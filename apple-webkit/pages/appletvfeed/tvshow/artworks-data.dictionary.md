> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/artworks-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvshow/artworks-data.dictionary)

# TvShow.Artworks

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized artwork.

## Declaration

```
object TvShow.Artworks
```

## Properties

- `artwork` — `TvShow.Artworks.Artwork`: The artwork related to this content.
- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.

  Note: The locale can contain a wildcard; for example, `-au` matches all languages for Australia, and `en-*` matches all countries that have English as a language.

## Topics

### Related objects

- [TvShow.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): The artwork related to this content.

## See Also

### Related objects

- [TvShow.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvShow.Genre](genre.md): A genre name and its structure.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
