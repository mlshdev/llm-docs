> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-merchantids](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-merchantids)

# List merchant ids

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

List all merchant Ids for your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/merchantIds
```

## Query Parameters

- `fields[certificates]` — `[string]`: **Allowed values:** `name`, `certificateType`, `displayName`, `serialNumber`, `platform`, `expirationDate`, `certificateContent`, `activated`, `passTypeId`
- `fields[merchantIds]` — `[string]`: **Allowed values:** `name`, `identifier`, `certificates`
- `filter[identifier]` — `[string]`:
- `filter[name]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `certificates`
- `limit` — `integer`: **Maximum:** `200`
- `limit[certificates]` — `integer`: **Maximum:** `50`
- `sort` — `[string]`: **Allowed values:** `name`, `-name`, `identifier`, `-identifier`

## Response Codes

- `200` OK — `MerchantIdsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing merchant IDs

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md): Create and update certificates so your app uses Apple Pay and Wallet.
- [Read details for a merchant id](get-v1-merchantids-_id_.md): Get information for a merchant ID.
- [List certificates for a merchant id](get-v1-merchantids-_id_-certificates.md): Get a list of all certificates for a specific merchant ID.
- [List certificate IDs for a merchant ID](get-v1-merchantids-_id_-relationships-certificates.md)
- [Modify merchant ids](patch-v1-merchantids-_id_.md): Update a specific merchant ID.
- [Create a merchant id](post-v1-merchantids.md): Add a new merchant ID to your team.
- [Delete a merchant id](delete-v1-merchantids-_id_.md): Delete a specific merchant ID.
