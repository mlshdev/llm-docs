> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipappstorereviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/appclipappstorereviewdetail)

# AppClipAppStoreReviewDetail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The review submission details for an App Clip, including the invocation URLs required for App Store review.

## Declaration

```
object AppClipAppStoreReviewDetail
```

## Properties

- `attributes` — `AppClipAppStoreReviewDetail.Attributes`: The attributes that describe the App Clip App Store Review Details resource.
- `id` — `string` (required): The opaque resource ID that uniquely identifies an App Clip App Store Review Details resource.
- `links` — `ResourceLinks`: Navigational links that include the self-link.
- `relationships` — `AppClipAppStoreReviewDetail.Relationships`: The navigational links to related data and included resource types and IDs.
- `type` — `string` (required): The resource type.
  **Allowed values:** `appClipAppStoreReviewDetails`

## Topics

### Objects

- [AppClipAppStoreReviewDetail.Attributes](appclipappstorereviewdetail/attributes-data.dictionary.md): The attributes that describe the App Clip App Store Review Details resource.
- [AppClipAppStoreReviewDetail.Relationships](appclipappstorereviewdetail/relationships-data.dictionary.md): The relationships of the App Clip App Store Details resource you included in the request and those on which you can operate.

## See Also

### Objects

- [AppClipAppStoreReviewDetailResponse](appclipappstorereviewdetailresponse.md): A response containing the App Store review details for a single App Clip.
- [AppClipAppStoreReviewDetailCreateRequest](appclipappstorereviewdetailcreaterequest.md): The request body you use to create an App Clip App Store Review Detail.
- [AppClipAppStoreReviewDetailUpdateRequest](appclipappstorereviewdetailupdaterequest.md): The request body you use to update App Clip information that you provide to App Store Review.
