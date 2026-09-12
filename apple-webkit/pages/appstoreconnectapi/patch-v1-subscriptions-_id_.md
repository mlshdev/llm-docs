> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptions-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptions-_id_)

# Modify an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+

Update a specific auto-renewable subscription.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptions/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Creating and managing subscriptions

- [Create an auto-renewable subscription](post-v1-subscriptions.md): Create an auto-renewable subscription for your app.
- [Read subscription information](get-v1-subscriptions-_id_.md): Get information about a specific auto-renewable subscription.
- [Delete a subscription](delete-v1-subscriptions-_id_.md): Delete a specific auto-renewable subscription that you configured for an app.
