> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/personalrecommendation/relationships-data.dictionary](https://developer.apple.com/documentation/applemusicapi/personalrecommendation/relationships-data.dictionary)

# PersonalRecommendation.Relationships

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The relationships for a recommendation resource.

## Declaration

```
object PersonalRecommendation.Relationships
```

## Properties

- `contents` — `PersonalRecommendation.Relationships.PersonalRecommendationContentsRelationship`: The contents associated with the content recommendation type. By default, `contents` includes objects.

  Fetch limits: 10 default, 10 maximum.

## Topics

### Related Objects

- [PersonalRecommendation.Relationships.PersonalRecommendationContentsRelationship](relationships-data.dictionary/personalrecommendationcontentsrelationship.md): A relationship from the recommendation to its recommended content.

## See Also

### Related Objects

- [PersonalRecommendation.Attributes](attributes-data.dictionary.md): The attributes for a recommendation resource.
