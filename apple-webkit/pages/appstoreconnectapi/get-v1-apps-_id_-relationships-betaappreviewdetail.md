> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betaappreviewdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-betaappreviewdetail)

# Get the beta app review detail ID for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/betaAppReviewDetail
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `AppBetaAppReviewDetailLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting an app’s TestFlight details

- [Read the beta app review details resource of an app](get-v1-apps-_id_-betaappreviewdetail.md): Get the beta app review details for a specific app.
- [Read the beta license agreement of an app](get-v1-apps-_id_-betalicenseagreement.md): Get the beta license agreement for a specific app.
- [Get the beta license agreement ID for an app](get-v1-apps-_id_-relationships-betalicenseagreement.md)
- [List all beta app localizations of an app](get-v1-apps-_id_-betaapplocalizations.md): Get a list of localized beta test information for a specific app.
- [List beta app localization IDs for an app](get-v1-apps-_id_-relationships-betaapplocalizations.md)
