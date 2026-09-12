> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstorereviewdetailresponse](https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewdetailresponse)

# AppStoreReviewDetailResponse

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The response body for endpoints that read or modify App Store review details for a version.

## Declaration

```
object AppStoreReviewDetailResponse
```

## Properties

- `data` — `AppStoreReviewDetail` (required):
- `included` — `[*]`: **Allowed types:** `AppStoreReviewAttachment`, `AppStoreVersion`
- `links` — `DocumentLinks` (required):

## See Also

### Objects

- [AppStoreReviewDetail](appstorereviewdetail.md): The data structure that represent an App Store Review Details resource.
- [AppStoreReviewDetailCreateRequest](appstorereviewdetailcreaterequest.md): The request body you use to create an App Store Review Detail.
- [AppStoreReviewDetailUpdateRequest](appstorereviewdetailupdaterequest.md): The request body you use to update an App Store Review Detail.
- [AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse](appstorereviewdetailappstorereviewattachmentslinkagesresponse.md)
