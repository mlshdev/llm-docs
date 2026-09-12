> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptionlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptionlocalizations)

# Create a subscription localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create a localized display name and description for an auto-renewable subscription.

> This endpoint is deprecated. Use [Create a subscription localization](post-v2-subscriptionlocalizations.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionLocalizationCreateRequest`

## Response Codes

- `201` Created — `SubscriptionLocalizationResponse`:
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

### Endpoints

- [List all localizations for an auto-renewable subscription](get-v1-subscriptions-_id_-subscriptionlocalizations.md): Deprecated. Get a list of the subscription localizations for a specific auto-renewable subscription.
- [List localization IDs for an auto-renewable subscription](get-v1-subscriptions-_id_-relationships-subscriptionlocalizations.md): Deprecated.
- [Read subscription localization information (v1)](get-v1-subscriptionlocalizations-_id_.md): Deprecated. Get the specific localized metadata for an auto-renewable subscription.
- [Modify a subscription localization (v1)](patch-v1-subscriptionlocalizations-_id_.md): Deprecated. Update a specific localized subscription display name and description for an auto-renewable subscription.
- [Delete a subscription localization (v1)](delete-v1-subscriptionlocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for an auto-renewable subscription.
