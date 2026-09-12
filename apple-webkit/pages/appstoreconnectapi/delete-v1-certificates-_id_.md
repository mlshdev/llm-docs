> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-certificates-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-certificates-_id_)

# Revoke a certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Revoke a lost, stolen, compromised, or expiring signing certificate.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/certificates/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md)
