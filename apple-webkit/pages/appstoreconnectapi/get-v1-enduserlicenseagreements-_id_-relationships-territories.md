> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_-relationships-territories](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-enduserlicenseagreements-_id_-relationships-territories)

# List territory IDs for an end user license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/{id}/relationships/territories
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `EndUserLicenseAgreementTerritoriesLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting Territories

- [List territories](get-v1-territories.md): List all territories where the App Store operates.
- [List all territories for an end user license agreement](get-v1-enduserlicenseagreements-_id_-territories.md): List all the App Store territories to which a specific custom app license agreement applies.
