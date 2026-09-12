> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-merchantids](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-merchantids)

# Create a merchant id

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.8+

Add a new merchant ID to your team.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/merchantIds
```

## HTTP Body

Content type: `application/json`

Type: `MerchantIdCreateRequest`

## Response Codes

- `201` Created — `MerchantIdResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md)

## See Also

### Managing merchant IDs

- [Managing merchant IDs and Payment Processing certificates](managing-payment-processing-certificates.md): Create and update certificates so your app uses Apple Pay and Wallet.
- [List merchant ids](get-v1-merchantids.md): List all merchant Ids for your team.
- [Read details for a merchant id](get-v1-merchantids-_id_.md): Get information for a merchant ID.
- [List certificates for a merchant id](get-v1-merchantids-_id_-certificates.md): Get a list of all certificates for a specific merchant ID.
- [List certificate IDs for a merchant ID](get-v1-merchantids-_id_-relationships-certificates.md)
- [Modify merchant ids](patch-v1-merchantids-_id_.md): Update a specific merchant ID.
- [Delete a merchant id](delete-v1-merchantids-_id_.md): Delete a specific merchant ID.
