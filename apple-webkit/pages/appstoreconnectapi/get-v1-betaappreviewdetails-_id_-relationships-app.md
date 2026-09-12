> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betaappreviewdetails-_id_-relationships-app](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betaappreviewdetails-_id_-relationships-app)

# Get the app ID for a beta app review detail

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaAppReviewDetails/{id}/relationships/app
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BetaAppReviewDetailAppLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Beta App Review Details

- [List beta app review details](get-v1-betaappreviewdetails.md): Find and list beta app review details for all apps.
- [Read beta app review detail information](get-v1-betaappreviewdetails-_id_.md): Get beta app review details for a specific app.
- [Read the app information of a beta app review detail](get-v1-betaappreviewdetails-_id_-app.md): Get the app information for a specific beta app review details resource.
