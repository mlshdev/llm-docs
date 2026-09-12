> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvshow/rating-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvshow/rating-data.dictionary)

# TvShow.Rating

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a content rating.

## Declaration

```
object TvShow.Rating
```

## Properties

- `rating` — `string`: The rating of the content in the specified rating system, for example, `PG` or `TV-MA`.
- `systemCode` — `string`: The code for the rating system, for example, `MPAA` or `US-TV`.

<a id="overview"></a>

## Overview

You can download a full list of rating systems and their ratings codes from the UMC Catalog Data Interface Specification at [Content Advisories and Ratings](https://developer.apple.com/documentation/applemusicapi/get_a_catalog_resource_by_id).

## See Also

### Related objects

- [TvShow.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvShow.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvShow.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV show.
- [TvShow.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvShow.Genre](genre.md): A genre name and its structure.
- [TvShow.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV show.
- [TvShow.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvShow.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
