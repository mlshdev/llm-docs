> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-appstorereviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-relationships-appstorereviewdetail)

# Get the App Store review detail ID for an App Store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/relationships/appStoreReviewDetail
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppStoreVersionAppStoreReviewDetailLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading Release and Review Information

- [Read the app store version submission information of an app store version](get-v1-appstoreversions-_id_-appstoreversionsubmission.md): Deprecated. Get the App Review submission for a specific App Store version.
- [Get the App Store version submission ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionsubmission.md): Deprecated.
- [Read the app store review details resource information of an app store version](get-v1-appstoreversions-_id_-appstorereviewdetail.md): Get the details you provide to App Review so they can test your app.
- [Read the app store version phased release information of an app store version](get-v1-appstoreversions-_id_-appstoreversionphasedrelease.md): Read the phased release status and configuration for a version with phased release enabled.
- [Get the phased release ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionphasedrelease.md)
