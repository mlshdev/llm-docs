> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-subscriptionavailability](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-subscriptionavailability)

# Get the subscription availability ID for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/subscriptionAvailability
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `200` OK — `SubscriptionSubscriptionAvailabilityLinkageResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting subscription availability

- [Read information about the availability of a subscription](get-v1-subscriptions-_id_-subscriptionavailability.md): Deprecated. Get information about the territory availability for a subscription.
- [List plan availabilities for a subscription](get-v1-subscriptions-_id_-planavailabilities.md): List all plan availabilities for a specific auto-renewable subscription.
- [List plan availability IDs for a subscription](get-v1-subscriptions-_id_-relationships-planavailabilities.md): Get a list of plan availability resource IDs for a specific auto-renewable subscription.
