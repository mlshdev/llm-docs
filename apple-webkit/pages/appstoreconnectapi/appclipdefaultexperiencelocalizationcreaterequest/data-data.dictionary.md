> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencelocalizationcreaterequest/data-data.dictionary)

# AppClipDefaultExperienceLocalizationCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipDefaultExperienceLocalizationCreateRequest.Data
```

## Properties

- `attributes` — `AppClipDefaultExperienceLocalizationCreateRequest.Data.Attributes` (required): The attributes that describes the request that creates a Default App Clip Experience Localizations resource.
- `relationships` — `AppClipDefaultExperienceLocalizationCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipDefaultExperienceLocalizations`

## Topics

### Objects

- [AppClipDefaultExperienceLocalizationCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the Default App Clip Experience Localizations resource.
- [AppClipDefaultExperienceLocalizationCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
