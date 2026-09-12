> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-betalicenseagreements-_id_-relationships-app](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-betalicenseagreements-_id_-relationships-app)

# Get the app ID for a beta license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/betaLicenseAgreements/{id}/relationships/app
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `BetaLicenseAgreementAppLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Beta License Agreement Information

- [List beta license agreements](get-v1-betalicenseagreements.md): Find and list beta license agreements for all apps.
- [Read beta license agreement information](get-v1-betalicenseagreements-_id_.md): Get a specific beta license agreement.
- [Read the app information of a beta license agreement](get-v1-betalicenseagreements-_id_-app.md): Get the app information for a specific beta license agreement.
