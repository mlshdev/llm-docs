> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipdefaultexperienceupdaterequest/data-data.dictionary)

# AppClipDefaultExperienceUpdateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipDefaultExperienceUpdateRequest.Data
```

## Properties

- `attributes` — `AppClipDefaultExperienceUpdateRequest.Data.Attributes`: The attributes that describe the request that updates a Default App Clip Experiences resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies the request.
- `relationships` — `AppClipDefaultExperienceUpdateRequest.Data.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipDefaultExperiences`

## Topics

### Objects

- [AppClipDefaultExperienceUpdateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new Default App Clip Experiences resource.
- [AppClipDefaultExperienceUpdateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
