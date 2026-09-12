> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/personalrecommendation/relationships-data.dictionary/personalrecommendationcontentsrelationship](https://developer.apple.com/documentation/applemusicapi/personalrecommendation/relationships-data.dictionary/personalrecommendationcontentsrelationship)

# PersonalRecommendation.Relationships.PersonalRecommendationContentsRelationship

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A relationship from the recommendation to its recommended content.

## Declaration

```
object PersonalRecommendation.Relationships.PersonalRecommendationContentsRelationship
```

## Properties

- `href` — `string`: A relative location for the relationship.
- `next` — `string`: A relative cursor to fetch the next paginated collection of resources in the relationship if more exist.
- `data` — `[Resource]` (required): A list of recommended candidates that are a mixture of albums and playlists.
