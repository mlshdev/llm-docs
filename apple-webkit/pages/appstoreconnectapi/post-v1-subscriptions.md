> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptions](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptions)

# Create an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Create an auto-renewable subscription for your app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptions
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionCreateRequest`

## Response Codes

- `201` Created — `SubscriptionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Managing auto-renewable subscriptions](managing-auto-renewable-subscriptions.md)

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Creating and managing subscriptions

- [Read subscription information](get-v1-subscriptions-_id_.md): Get information about a specific auto-renewable subscription.
- [Modify an auto-renewable subscription](patch-v1-subscriptions-_id_.md): Update a specific auto-renewable subscription.
- [Delete a subscription](delete-v1-subscriptions-_id_.md): Delete a specific auto-renewable subscription that you configured for an app.
