> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionprices](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionprices)

# Create a subscription price change

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Schedule a subscription price change for a specific territory.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionPrices
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionPriceCreateRequest`

## Response Codes

- `201` Created — `SubscriptionPriceResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md)
- [Configuring subscription prices across territories](configuring-subscription-prices-across-territories.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Reading and managing subscription price points and prices

- [Read subscription price point information](get-v1-subscriptionpricepoints-_id_.md): Get details about a specific subscription price point.
- [List all subscription price point equalizations](get-v1-subscriptionpricepoints-_id_-equalizations.md): Get a list of subscription price points and their equivalent in a specified currency.
- [List equalization IDs for a subscription price point](get-v1-subscriptionpricepoints-_id_-relationships-equalizations.md)
- [List adjusted equalizations for a subscription price point](get-v1-subscriptionpricepoints-_id_-adjustedequalizations.md): List the adjusted territory equalizations for a subscription price point.
- [Delete subscription prices](delete-v1-subscriptionprices-_id_.md): Delete a scheduled price change for an auto-renewable subscription.
