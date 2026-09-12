> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/ratings/relationships-data.dictionary/ratingscontentrelationship](https://developer.apple.com/documentation/applemusicapi/ratings/relationships-data.dictionary/ratingscontentrelationship)

# Ratings.Relationships.RatingsContentRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship between the rating and the assocaited content.

## Declaration

```
object Ratings.Relationships.RatingsContentRelationship
```

## Properties

- `data` — `[*]` (required): The content associated with the rating.
  **Allowed types:** `Albums`, `LibraryMusicVideos`, `LibraryPlaylists`, `LibrarySongs`, `MusicVideos`, `Playlists`, `Songs`, `Stations`
- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
