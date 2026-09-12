> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationupdaterequest](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationupdaterequest)

# AppClipDefaultExperienceLocalizationUpdateRequest

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The request body for updating the localized subtitle and action button label for a default App Clip experience.

## Declaration

```
object AppClipDefaultExperienceLocalizationUpdateRequest
```

## Properties

- `data` — `AppClipDefaultExperienceLocalizationUpdateRequest.Data` (required): The resource data.

## Topics

### Objects

- [AppClipDefaultExperienceLocalizationUpdateRequest.Data](appclipdefaultexperiencelocalizationupdaterequest/data-data.dictionary.md): The data element of the request body.

## See Also

### Objects

- [AppClipDefaultExperienceLocalization](appclipdefaultexperiencelocalization.md): The localized metadata for a default App Clip experience, including the subtitle displayed on the App Clip card.
- [AppClipDefaultExperienceLocalizationResponse](appclipdefaultexperiencelocalizationresponse.md): The response body for endpoints that create, read, or modify a localized App Clip card subtitle.
- [AppClipDefaultExperienceLocalizationCreateRequest](appclipdefaultexperiencelocalizationcreaterequest.md): The request body you use to create a Default App Clip Experience Localization.
- [AppClipDefaultExperienceLocalizationsResponse](appclipdefaultexperiencelocalizationsresponse.md): The response body for endpoints that list localized App Clip card subtitles for a default experience.
