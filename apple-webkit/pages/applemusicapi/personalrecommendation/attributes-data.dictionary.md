> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/applemusicapi/personalrecommendation/attributes-data.dictionary](https://developer.apple.com/documentation/applemusicapi/personalrecommendation/attributes-data.dictionary)

# PersonalRecommendation.Attributes

**Interface language:** Data

**Framework:** Apple Music API  
**Kind:** Object  
**Availability:** Apple Music 1.0+

The attributes for a recommendation resource.

## Declaration

```
object PersonalRecommendation.Attributes
```

## Properties

- `isGroupRecommendation` — `boolean` (required): Whether the recommendation is of group type.
- `kind` — `string` (required): The type of recommendation. Possible values are:

  - **`music-recommendations`**: A recommendation for music content.
  - **`recently-played`**: A recommendation based on recently played content.
  - **`unknown`**: A generic recommendation type.  
  **Allowed values:** `music-recommendations`, `recently-played`, `unknown`
- `nextUpdateDate` — `string` (required): The next date in UTC format for updating the recommendation.
- `reason` — `PersonalRecommendation.Attributes.Reason`: The localized reason for the recommendation.
- `resourceTypes` — `[string]` (required): The resource types supported by the recommendation.
- `title` — `PersonalRecommendation.Attributes.Title`: The localized title for the recommendation.

## Topics

### Attribute Objects

- [PersonalRecommendation.Attributes.Reason](attributes-data.dictionary/reason-data.dictionary.md): An object that represents the reason for a personal recommendation.
- [PersonalRecommendation.Attributes.Title](attributes-data.dictionary/title-data.dictionary.md): An object that represents the title of a personal recommendation.

## See Also

### Related Objects

- [PersonalRecommendation.Relationships](relationships-data.dictionary.md): The relationships for a recommendation resource.
