> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/appstorereviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/appstorereviewdetail)

# AppStoreReviewDetail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.2+

The data structure that represent an App Store Review Details  resource.

## Declaration

```
object AppStoreReviewDetail
```

## Properties

- `attributes` — `AppStoreReviewDetail.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `AppStoreReviewDetail.Relationships`:
- `type` — `string` (required): **Allowed values:** `appStoreReviewDetails`

## Topics

### Objects

- [AppStoreReviewDetail.Attributes](appstorereviewdetail/attributes-data.dictionary.md): Attributes that describe an App Store Review Details resource.
- [AppStoreReviewDetail.Relationships](appstorereviewdetail/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects

- [AppStoreReviewDetailCreateRequest](appstorereviewdetailcreaterequest.md): The request body you use to create an App Store Review Detail.
- [AppStoreReviewDetailUpdateRequest](appstorereviewdetailupdaterequest.md): The request body you use to update an App Store Review Detail.
- [AppStoreReviewDetailResponse](appstorereviewdetailresponse.md): The response body for endpoints that read or modify App Store review details for a version.
- [AppStoreReviewDetailAppStoreReviewAttachmentsLinkagesResponse](appstorereviewdetailappstorereviewattachmentslinkagesresponse.md)
