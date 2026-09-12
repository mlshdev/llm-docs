> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-certificates-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-certificates-_id_)

# Modify a Certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Update the activation status for a specific certificate.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/certificates/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List and download certificates](get-v1-certificates.md) response.

## HTTP Body

Content type: `application/json`

Type: `CertificateUpdateRequest`

## Response Codes

- `200` OK — `CertificateResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.8 release notes](app-store-connect-api-3-8-release-notes.md)
- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md)

## See Also

### Creating and modifying certificates

- [Create a certificate](post-v1-certificates.md): Create a new certificate using a certificate signing request.
