> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betalicenseagreements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betalicenseagreements-_id_)

# Modify a beta license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Update the text for your beta license agreement.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaLicenseAgreements/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource.

## HTTP Body

Content type: `application/json`

Type: `BetaLicenseAgreementUpdateRequest`

## Response Codes

- `200` OK — `BetaLicenseAgreementResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:
