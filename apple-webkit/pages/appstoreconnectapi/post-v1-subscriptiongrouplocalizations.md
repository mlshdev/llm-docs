> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-subscriptiongrouplocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-subscriptiongrouplocalizations)

# Create a subscription group localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create a localized display name and optional custom app name for a subscription group.

> This endpoint is deprecated. Use [Create a subscription group localization](post-v2-subscriptiongrouplocalizations.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/subscriptionGroupLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupLocalizationCreateRequest`

## Response Codes

- `201` Created — `SubscriptionGroupLocalizationResponse`:
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

- [Read subscription group localization information (v1)](get-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Get the specific localized subscription group display name and optional custom app name for a subscription group.
- [Modify a subscription group localization (v1)](patch-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Update a specific localized display name and optional custom app name for a subscription group.
- [Delete a subscription group localization (v1)](delete-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for a subscription group.
