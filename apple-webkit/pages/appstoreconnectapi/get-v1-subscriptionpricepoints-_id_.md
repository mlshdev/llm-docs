> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptionpricepoints-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptionpricepoints-_id_)

# Read subscription price point information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Get details about a specific subscription price point.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionPricePoints/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionPricePoints]` — `[string]`: **Allowed values:** `customerPrice`, `proceeds`, `proceedsYear2`, `territory`, `equalizations`, `adjustedEqualizations`
- `include` — `[string]`: **Allowed values:** `territory`
- `fields[territories]` — `[string]`: **Allowed values:** `currency`

## Response Codes

- `200` OK — `SubscriptionPricePointResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Reading and managing subscription price points and prices

- [List all subscription price point equalizations](get-v1-subscriptionpricepoints-_id_-equalizations.md): Get a list of subscription price points and their equivalent in a specified currency.
- [List equalization IDs for a subscription price point](get-v1-subscriptionpricepoints-_id_-relationships-equalizations.md)
- [List adjusted equalizations for a subscription price point](get-v1-subscriptionpricepoints-_id_-adjustedequalizations.md): List the adjusted territory equalizations for a subscription price point.
- [Create a subscription price change](post-v1-subscriptionprices.md): Schedule a subscription price change for a specific territory.
- [Delete subscription prices](delete-v1-subscriptionprices-_id_.md): Delete a scheduled price change for an auto-renewable subscription.
