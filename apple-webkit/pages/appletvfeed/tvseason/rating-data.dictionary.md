> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appletvfeed/tvseason/rating-data.dictionary](https://developer.apple.com/documentation/appletvfeed/tvseason/rating-data.dictionary)

# TvSeason.Rating

**Interface language:** Data

**Framework:** Apple TV Feed  
**Kind:** Object  
**Availability:** AppleTVFeed 1.0+

Information about a content rating.

## Declaration

```
object TvSeason.Rating
```

## Properties

- `rating` — `string`: The rating of the content in the specified rating system, for example, `PG` or `TV-MA`.
- `systemCode` — `string`: The code for the rating system, for example, `MPAA` or `US-TV`.

<a id="overview"></a>

## Overview

You can download a full list of rating systems and their ratings codes from the UMC Catalog Data Interface Specification at [Content Advisories and Ratings](https://developer.apple.com/documentation/applemusicapi/get_a_catalog_resource_by_id).

## See Also

### Related objects

- [TvSeason.Artworks](artworks-data.dictionary.md): A mapping of locale to localized artwork.
- [TvSeason.CastAndCrew](castandcrew-data.dictionary.md): Information about a cast or crew member, including translations of their name.
- [TvSeason.Description](description-data.dictionary.md): A mapping of locale to localized descriptions of the TV season.
- [TvSeason.ExternalContentId](externalcontentid.md): Information about an external content ID.
- [TvSeason.Genre](genre.md): A genre name and its structure.
- [TvSeason.Name](name-data.dictionary.md): A mapping of locale to localized names for the TV season.
- [TvSeason.Prices](prices-data.dictionary.md): A mapping of storefront to pricing information and availability.
- [TvSeason.Url](url-data.dictionary.md): A mapping of locale to localized URLs for the content.
