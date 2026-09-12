> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperiencecreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperiencecreaterequest/data-data.dictionary)

# AppClipDefaultExperienceCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipDefaultExperienceCreateRequest.Data
```

## Properties

- `attributes` — `AppClipDefaultExperienceCreateRequest.Data.Attributes`: The attributes that describe the request that creates a Default App Clip Experiences resource.
- `relationships` — `AppClipDefaultExperienceCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipDefaultExperiences`

## Topics

### Objects

- [AppClipDefaultExperienceCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the Default App Clip Experiences resource.
- [AppClipDefaultExperienceCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
