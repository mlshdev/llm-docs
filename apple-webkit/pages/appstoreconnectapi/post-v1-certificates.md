> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-certificates](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-certificates)

# Create a certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Create a new certificate using a certificate signing request.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/certificates
```

## HTTP Body

Content type: `application/json`

Type: `CertificateCreateRequest`

## Response Codes

- `201` Created — `CertificateResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md)

## See Also

### Creating and modifying certificates

- [Modify a Certificate](patch-v1-certificates-_id_.md): Update the activation status for a specific certificate.
