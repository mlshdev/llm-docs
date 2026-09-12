> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencelocalization](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencelocalization)

# AppClipDefaultExperienceLocalization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The localized metadata for a default App Clip experience, including the subtitle displayed on the App Clip card.

## Declaration

```
object AppClipDefaultExperienceLocalization
```

## Properties

- `attributes` — `AppClipDefaultExperienceLocalization.Attributes`: The attributes that describe the Default App Clip Experience Localizations resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies a Default App Clip Experience Localizations resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppClipDefaultExperienceLocalization.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipDefaultExperienceLocalizations`

## Topics

### Objects

- [AppClipDefaultExperienceLocalization.Attributes](appclipdefaultexperiencelocalization/attributes-data.dictionary.md): The attributes that describe a Default App Clip Experience Localizations resource.
- [AppClipDefaultExperienceLocalization.Relationships](appclipdefaultexperiencelocalization/relationships-data.dictionary.md): The relationships of the Default App Clip Experience Localizations resource you included in the request and those on which you can operate.

## See Also

### Objects

- [AppClipDefaultExperienceLocalizationResponse](appclipdefaultexperiencelocalizationresponse.md): The response body for endpoints that create, read, or modify a localized App Clip card subtitle.
- [AppClipDefaultExperienceLocalizationCreateRequest](appclipdefaultexperiencelocalizationcreaterequest.md): The request body you use to create a Default App Clip Experience Localization.
- [AppClipDefaultExperienceLocalizationUpdateRequest](appclipdefaultexperiencelocalizationupdaterequest.md): The request body for updating the localized subtitle and action button label for a default App Clip experience.
- [AppClipDefaultExperienceLocalizationsResponse](appclipdefaultexperiencelocalizationsresponse.md): The response body for endpoints that list localized App Clip card subtitles for a default experience.
