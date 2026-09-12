> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipheaderimagecreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipheaderimagecreaterequest/data-data.dictionary)

# AppClipHeaderImageCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipHeaderImageCreateRequest.Data
```

## Properties

- `attributes` — `AppClipHeaderImageCreateRequest.Data.Attributes` (required): The attributes that describes the request that creates an App Clip Header Images resource.
- `relationships` — `AppClipHeaderImageCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipHeaderImages`

## Topics

### Objects

- [AppClipHeaderImageCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new App Clip Header Images resource.
- [AppClipHeaderImageCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
