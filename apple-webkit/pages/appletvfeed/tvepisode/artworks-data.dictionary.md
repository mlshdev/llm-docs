> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode/artworks-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvepisode/artworks-data.dictionary)

# TvEpisode.Artworks

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A mapping of locale to localized artwork.

## Declaration

```
object TvEpisode.Artworks
```

## Properties

- `artwork` — `TvEpisode.Artworks.Artwork`: The artwork related to this content.
- `locale` — `string`: The IETF language tag format locale that serves as the key for the map of values.

  Note: The locale can contain a wildcard; for example, `-au` matches all languages for Australia, and `en-*` matches all countries that have English as a language.

## Topics

### Related objects

- [TvEpisode.Artworks.Artwork](artworks-data.dictionary/artwork-data.dictionary.md): The artwork related to this content.

## See Also

### Related objects

- [TvEpisode.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvEpisode.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV episode.
- [TvEpisode.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvEpisode.Genre](genre.md): A genre name and its structure.
- [TvEpisode.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvEpisode.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
