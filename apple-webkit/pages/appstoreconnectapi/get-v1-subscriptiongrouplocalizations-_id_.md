> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongrouplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongrouplocalizations-_id_)

# Read subscription group localization information (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Get the specific localized subscription group display name and optional custom app name for a subscription group.

> This endpoint is deprecated. Use [Read subscription group localization information](get-v2-subscriptiongrouplocalizations-_id_.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGroupLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionGroupLocalizations]` — `[string]`: **Allowed values:** `name`, `customAppName`, `locale`, `state`, `subscriptionGroup`
- `include` — `[string]`: **Allowed values:** `subscriptionGroup`
- `fields[subscriptionGroups]` — `[string]`: **Allowed values:** `referenceName`, `subscriptions`, `subscriptionGroupLocalizations`, `versions`

## Response Codes

- `200` OK — `SubscriptionGroupLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a subscription group localization (v1)](post-v1-subscriptiongrouplocalizations.md): Deprecated. Create a localized display name and optional custom app name for a subscription group.
- [Modify a subscription group localization (v1)](patch-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Update a specific localized display name and optional custom app name for a subscription group.
- [Delete a subscription group localization (v1)](delete-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for a subscription group.
