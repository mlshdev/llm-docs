> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipappstorereviewdetailcreaterequest/data-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/appclipappstorereviewdetailcreaterequest/data-data.dictionary)

# AppClipAppStoreReviewDetailCreateRequest.Data

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data element of the request body.

## Declaration

```
object AppClipAppStoreReviewDetailCreateRequest.Data
```

## Properties

- `attributes` — `AppClipAppStoreReviewDetailCreateRequest.Data.Attributes`: The attributes that describe the request that creates an App Clip App Store Review Details resource.
- `relationships` — `AppClipAppStoreReviewDetailCreateRequest.Data.Relationships` (required): The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipAppStoreReviewDetails`

## Topics

### Objects

- [AppClipAppStoreReviewDetailCreateRequest.Data.Attributes](data-data.dictionary/attributes-data.dictionary.md): The attributes you set that describe the new App Clip App Store Review Details resource.
- [AppClipAppStoreReviewDetailCreateRequest.Data.Relationships](data-data.dictionary/relationships-data.dictionary.md): The relationships to other resources that you can set with this request.
