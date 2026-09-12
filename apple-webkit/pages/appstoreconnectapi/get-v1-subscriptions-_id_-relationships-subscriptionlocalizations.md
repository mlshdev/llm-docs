> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-subscriptionlocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptions-_id_-relationships-subscriptionlocalizations)

# List localization IDs for an auto-renewable subscription

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.4.1)

> This relationship is deprecated. Use [List localization IDs for a subscription version](get-v1-subscriptionversions-_id_-relationships-localizations.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptions/{id}/relationships/subscriptionLocalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionSubscriptionLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List all localizations for an auto-renewable subscription](get-v1-subscriptions-_id_-subscriptionlocalizations.md): Deprecated. Get a list of the subscription localizations for a specific auto-renewable subscription.
- [Read subscription localization information (v1)](get-v1-subscriptionlocalizations-_id_.md): Deprecated. Get the specific localized metadata for an auto-renewable subscription.
- [Create a subscription localization (v1)](post-v1-subscriptionlocalizations.md): Deprecated. Create a localized display name and description for an auto-renewable subscription.
- [Modify a subscription localization (v1)](patch-v1-subscriptionlocalizations-_id_.md): Deprecated. Update a specific localized subscription display name and description for an auto-renewable subscription.
- [Delete a subscription localization (v1)](delete-v1-subscriptionlocalizations-_id_.md): Deprecated. Delete localized metadata that you configured for an auto-renewable subscription.
