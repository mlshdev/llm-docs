> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-certificates-_id_-relationships-passtypeid](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-certificates-_id_-relationships-passtypeid)

# List passtypeid ids for a certificate

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

List all PassTypeIDId Ids for a specific certificate.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/certificates/{id}/relationships/passTypeId
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `CertificatePassTypeIdLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting certificate infomation and data

- [List and download certificates](get-v1-certificates.md): Find and list certificates and download their data.
- [Read and download certificate information](get-v1-certificates-_id_.md): Get information about a certificate and download the certificate data.
- [List passtypeid ids for a certificate](get-v1-certificates-_id_-passtypeid.md): List all PassTypeID Ids for a specific certificate.
