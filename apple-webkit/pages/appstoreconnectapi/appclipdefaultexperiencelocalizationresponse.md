> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationresponse)

# AppClipDefaultExperienceLocalizationResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The response body for endpoints that create, read, or modify a localized App Clip card subtitle.

## Declaration

```
object AppClipDefaultExperienceLocalizationResponse
```

## Properties

- `data` — `AppClipDefaultExperienceLocalization` (required): The resource data.
- `included` — `[*]`: The requested relationship data.
  **Allowed types:** `AppClipDefaultExperience`, `AppClipHeaderImage`
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppClipDefaultExperienceLocalization](appclipdefaultexperiencelocalization.md): The localized metadata for a default App Clip experience, including the subtitle displayed on the App Clip card.
- [AppClipDefaultExperienceLocalizationCreateRequest](appclipdefaultexperiencelocalizationcreaterequest.md): The request body you use to create a Default App Clip Experience Localization.
- [AppClipDefaultExperienceLocalizationUpdateRequest](appclipdefaultexperiencelocalizationupdaterequest.md): The request body for updating the localized subtitle and action button label for a default App Clip experience.
- [AppClipDefaultExperienceLocalizationsResponse](appclipdefaultexperiencelocalizationsresponse.md): The response body for endpoints that list localized App Clip card subtitles for a default experience.
