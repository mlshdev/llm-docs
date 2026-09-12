> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/personalrecommendation](https://developer.apple.com/documentation/applemusicapi/personalrecommendation)

# PersonalRecommendation

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

A resource object that represents recommended resources for a user calculated using their selected preferences.

## Declaration

```
object PersonalRecommendation
```

## Properties

- `id` — `string` (required): The identifier for the recommendation.
- `type` — `string` (required): This value must always be `personal-recommendation`.
  **Allowed values:** `personal-recommendation`
- `href` — `string` (required): The relative location for the recommendation resource.
- `attributes` — `PersonalRecommendation.Attributes`: The attributes for the recommendation.
- `relationships` — `PersonalRecommendation.Relationships`: The relationships for the playlist.

## Topics

### Related Objects

- [PersonalRecommendation.Attributes](personalrecommendation/attributes-data.dictionary.md): The attributes for a recommendation resource.
- [PersonalRecommendation.Relationships](personalrecommendation/relationships-data.dictionary.md): The relationships for a recommendation resource.

## See Also

### Handling the Response

- [PersonalRecommendationResponse](personalrecommendationresponse.md): The response to a request for personal recommendations.
