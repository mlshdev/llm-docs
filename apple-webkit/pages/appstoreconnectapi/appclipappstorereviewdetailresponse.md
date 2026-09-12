> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appclipappstorereviewdetailresponse](https://developer.apple.com/documentation/appstoreconnectapi/appclipappstorereviewdetailresponse)

# AppClipAppStoreReviewDetailResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

A response containing the App Store review details for a single App Clip.

## Declaration

```
object AppClipAppStoreReviewDetailResponse
```

## Properties

- `data` — `AppClipAppStoreReviewDetail` (required): The resource data.
- `included` — `[AppClipDefaultExperience]`: The requested relationship data.
- `links` — `DocumentLinks` (required): Navigational links that include the self-link.

## See Also

### Objects

- [AppClipAppStoreReviewDetail](appclipappstorereviewdetail.md): The review submission details for an App Clip, including the invocation URLs required for App Store review.
- [AppClipAppStoreReviewDetailCreateRequest](appclipappstorereviewdetailcreaterequest.md): The request body you use to create an App Clip App Store Review Detail.
- [AppClipAppStoreReviewDetailUpdateRequest](appclipappstorereviewdetailupdaterequest.md): The request body you use to update App Clip information that you provide to App Store Review.
