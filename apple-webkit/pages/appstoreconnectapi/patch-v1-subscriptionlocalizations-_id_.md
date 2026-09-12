> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptionlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptionlocalizations-_id_)

# Modify a subscription localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Update a specific localized subscription display name and description for an auto-renewable subscription.

> This endpoint is deprecated. Use [Modify a subscription localization](patch-v2-subscriptionlocalizations-_id_.md) instead.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionLocalizationUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionLocalizationResponse`:
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

### Endpoints

- [List all localizations for an auto-renewable subscription](get-v1-subscriptions-_id_-subscriptionlocalizations.md): Deprecated. Get a list of the subscription localizations for a specific auto-renewable subscription.
- [List localization IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-subscriptionlocalizations.md): Deprecated.
- [Read subscription localization information (v1)](get-v1-subscriptionlocalizations-_id_.md): Deprecated. Get the specific localized metadata for an auto-renewable subscription.
- [Create a subscription localization (v1)](post-v1-subscriptionlocalizations.md): Deprecated. Create a localized display name and description for an auto-renewable subscription.
- [Delete a subscription localization (v1)](delete-v1-subscriptionlocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for an auto-renewable subscription.
