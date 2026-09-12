> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvepisode/genre](https://developer.apple.com/documentation/appletvfeed/tvepisode/genre)

# TvEpisode.Genre

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A genre name and its structure.

## Declaration

```
object TvEpisode.Genre
```

## Properties

- `name` — `string`: The name of the genre.
- `path` — `[string]`: A list of genres in hierarchical order. Each item in the list is a subgenre of the previous item.

## See Also

### Related objects

- [TvEpisode.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvEpisode.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvEpisode.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV episode.
- [TvEpisode.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvEpisode.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV episode.
- [TvEpisode.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvEpisode.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvEpisode.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
