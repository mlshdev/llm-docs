> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-subscriptiongrouplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-subscriptiongrouplocalizations-_id_)

# Modify a subscription group localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Update a specific localized display name and optional custom app name for a subscription group.

> This endpoint is deprecated. Use [Modify a subscription group localization](patch-v2-subscriptiongrouplocalizations-_id_.md) instead.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/subscriptionGroupLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## HTTP Body

Content type: `application/json`

Type: `SubscriptionGroupLocalizationUpdateRequest`

## Response Codes

- `200` OK — `SubscriptionGroupLocalizationResponse`:
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

- [Create a subscription group localization (v1)](post-v1-subscriptiongrouplocalizations.md): Deprecated. Create a localized display name and optional custom app name for a subscription group.
- [Read subscription group localization information (v1)](get-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Get the specific localized subscription group display name and optional custom app name for a subscription group.
- [Delete a subscription group localization (v1)](delete-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for a subscription group.
