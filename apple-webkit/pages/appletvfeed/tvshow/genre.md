> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/genre](https://developer.apple.com/documentation/appletvfeed/tvshow/genre)

# TvShow.Genre

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

A genre name and its structure.

## Declaration

```
object TvShow.Genre
```

## Properties

- `name` — `string`: The name of the genre.
- `path` — `[string]`: A list of genres in hierarchical order. Each item in the list is a subgenre of the previous item.

## See Also

### Related objects

- [TvShow.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Rating](rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
