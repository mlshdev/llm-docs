> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-relationships-subscriptiongrouplocalizations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-subscriptiongroups-_id_-relationships-subscriptiongrouplocalizations)

# List localization IDs for a subscription group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+ (deprecated in 4.4.1)

> This relationship is deprecated. Use [Get the resource IDs of the localizations of a subscription group version](get-v1-subscriptiongroupversions-_id_-relationships-localizations.md) instead.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/subscriptionGroups/{id}/relationships/subscriptionGroupLocalizations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `SubscriptionGroupSubscriptionGroupLocalizationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a subscription group](post-v1-subscriptiongroups.md): Create a subscription group for an app.
- [List all subscription groups for an app](get-v1-apps-_id_-subscriptiongroups.md): Get a list of subscription groups for a specific app.
- [List subscription group IDs for an app](get-v1-apps-_id_-relationships-subscriptiongroups.md)
- [Read subscription group information](get-v1-subscriptiongroups-_id_.md): Get the details of a specific subscription group.
- [Modify a subscription group](patch-v1-subscriptiongroups-_id_.md): Update the reference name for a specific subscription group.
- [Delete a subscription group](delete-v1-subscriptiongroups-_id_.md): Delete a specific empty subscription group.
- [List all subscription group localizations](get-v1-subscriptiongroups-_id_-subscriptiongrouplocalizations.md): Deprecated. Get a list of all localized metadata for a specific subscription group.
- [List all subscriptions for a subscription group](get-v1-subscriptiongroups-_id_-subscriptions.md): Get a list of all auto-renewable subscriptions in a subscription group.
- [List subscription IDs for a subscription group](get-v1-subscriptiongroups-_id_-relationships-subscriptions.md)
