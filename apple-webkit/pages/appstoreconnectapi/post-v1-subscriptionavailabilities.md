> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionavailabilities](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionavailabilities)

# Modify the territory availability of a subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.3+ (deprecated in 4.4)

Update the territory availability of a specific subscription.

> This endpoint is deprecated. Use [Create a subscription plan availability](post-v1-subscriptionplanavailabilities.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionAvailabilities
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionAvailabilityCreateRequest`

## Response Codes

- `201` Created — `SubscriptionAvailabilityResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Read the availability of a subscription](get-v1-subscriptionavailabilities-_id_.md): Deprecated. Get information about the territory availability for a subscription.
- [List the territory availability of a subscription](get-v1-subscriptionavailabilities-_id_-availableterritories.md): Deprecated. List the territory availability and currency of a specific subscription.
- [List available territory IDs for a subscription availability](get-v1-subscriptionavailabilities-_id_-relationships-availableterritories.md): Deprecated.
