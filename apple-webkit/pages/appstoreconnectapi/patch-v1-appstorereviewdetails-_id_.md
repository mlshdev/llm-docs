> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-appstorereviewdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-appstorereviewdetails-_id_)

# Modify an app store review detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Update the App Store review details, including the contact information, demo account, and notes.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/appStoreReviewDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store review detail resource ID from the [Read the app store review details resource information of an app store version](get-v1-appstoreversions-_id_-appstorereviewdetail.md) response.

## HTTP Body

Content type: `application/json`

Type: `AppStoreReviewDetailUpdateRequest`

## Response Codes

- `200` OK — `AppStoreReviewDetailResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Reading Review Details

- [Create an app store review detail](post-v1-appstorereviewdetails.md): Add App Store review details to an App Store version, including contact and demo account information.
- [Read app store review detail information](get-v1-appstorereviewdetails-_id_.md): Get App Review details you provided, including contact information, demo account, and notes.
- [List App Store review attachment IDs for an App Store review detail](get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments.md)
