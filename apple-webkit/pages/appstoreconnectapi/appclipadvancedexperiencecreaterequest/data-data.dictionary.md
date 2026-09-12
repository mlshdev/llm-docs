> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipadvancedexperiencecreaterequest/data-data.dictionary)

# AppClipAdvancedExperienceCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipAdvancedExperienceCreateRequest.Data
```

## Properties

- `attributes` — `AppClipAdvancedExperienceCreateRequest.Data.Attributes` (required): The attributes that describe the request that creates an Advanced App Clip Experiences resource.
- `relationships` — `AppClipAdvancedExperienceCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipAdvancedExperiences`

## Topics

### Objects

- [AppClipAdvancedExperienceCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Advanced App Clip Experiences resource.
- [AppClipAdvancedExperienceCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.

## See Also

### Objects

- [AppClipAdvancedExperienceLocalizationInlineCreate](../appclipadvancedexperiencelocalizationinlinecreate.md): An inline object for specifying localized text and action button when creating an App Clip advanced experience.
