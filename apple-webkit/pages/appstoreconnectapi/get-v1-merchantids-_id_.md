> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-merchantids-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-merchantids-_id_)

# Read details for a merchant id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Get information for a merchant ID.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/merchantIds/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the merchant ID resource ID from the [List merchant ids](get-v1-merchantids.md) response.

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `fields[merchantIds]` — `[string]`: **Allowed values:** `name`, `identifier`, `certificates`
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit[certificates]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `MerchantIdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing merchant IDs

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md): Create and update certificates so your app uses Apple Pay and Wallet.
- [List merchant ids](get-v1-merchantids.md): List all merchant Ids for your team.
- [List certificates for a merchant id](get-v1-merchantids-_id_-certificates.md): Get a list of all certificates for a specific merchant ID.
- [List certificate IDs for a merchant ID](get-v1-merchantids-_id_-relationships-certificates.md)
- [Modify merchant ids](patch-v1-merchantids-_id_.md): Update a specific merchant ID.
- [Create a merchant id](post-v1-merchantids.md): Add a new merchant ID to your team.
- [Delete a merchant id](delete-v1-merchantids-_id_.md): Delete a specific merchant ID.
