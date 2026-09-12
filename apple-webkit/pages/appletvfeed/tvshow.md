> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow](https://developer.apple.com/documentation/appletvfeed/tvshow)

# TvShow

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

The data structure that represents a TV show resource.

## Declaration

```
object TvShow
```

## Properties

- `artworks` — `TvShow.Artworks`: ****(Required)**** A mapping of locale to localized artwork.
- `castAndCrew` — `[TvShow.CastAndCrew]`: ****(Required)**** A list of cast and crew for the TV show.
- `description` — `TvShow.Description`: ****(Required)**** A mapping of locale to localized descriptions of the TV show.
- `externalContentIds` — `[TvShow.ExternalContentId]`: ****(Required)**** A list of unique identifiers for the TV show in the catalog of another provider.
- `genres` — `[TvShow.Genre]`: ****(Required)**** A list of genres associated with the TV show.
- `id` — `string`: ****(Required)**** The unique identifier for the TV show.
- `lastModifiedTime` — `date-time`: The time, in ISO 8601 format, of the entity’s most recent update.
- `name` — `TvShow.Name`: ****(Required)**** A mapping of locale to localized names for the TV show.
- `originalPremiereDate` — `string`: The date of the original content release in YYYY-MM-DD format.
- `prices` — `TvShow.Prices`: ****(Required)**** A mapping of storefront to pricing information and availability.
- `rating` — `[TvShow.Rating]`: ****(Required)**** A list of ratings for the TV show in different rating systems.
- `url` — `TvShow.Url`: ****(Required)**** A mapping of two-letter country code to URLs for the TV show.

## Topics

### Related objects

- [TvShow.Artworks](tvshow/artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.CastAndCrew](tvshow/castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](tvshow/description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](tvshow/externalcontentid.md): Information about an external content ID.
- [TvShow.Genre](tvshow/genre.md): A genre name and its structure.
- [TvShow.Name](tvshow/name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](tvshow/prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Rating](tvshow/rating-data.dictionary.md): Information about a content rating.
- [TvShow.Url](tvshow/url-data.dictionary.md): A mapping of locale to localized URLs for the content.

## See Also

### Objects

- [Movie](movie.md): The data structure that represents a movie resource.
- [TvEpisode](tvepisode.md): The data structure that represents a TV episode resource.
- [TvSeason](tvseason.md): The data structure that represents a TV season resource.
- [SportingEvent](sportingevent.md): The data structure that represents a sporting event resource.
