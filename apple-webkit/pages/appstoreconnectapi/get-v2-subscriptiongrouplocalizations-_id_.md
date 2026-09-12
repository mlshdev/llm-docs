> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-subscriptiongrouplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-subscriptiongrouplocalizations-_id_)

# Read subscription group localization information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Get the custom name for a specific locale of a subscription group configured with the v2 API.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/subscriptionGroupLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionGroupLocalizations]` — `[string]`: **Allowed values:** `name`, `customAppName`, `locale`, `version`
- `fields[subscriptionGroupVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscriptionGroup`, `localizations`
- `include` — `[string]`: **Allowed values:** `version`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionGroupLocalizationV2Response`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a subscription group localization](post-v2-subscriptiongrouplocalizations.md): Create a localized custom name for a subscription group configured with the v2 API.
- [Modify a subscription group localization](patch-v2-subscriptiongrouplocalizations-_id_.md): Update the custom name for a specific locale of a subscription group configured with the v2 API.
- [Delete a subscription group localization](delete-v2-subscriptiongrouplocalizations-_id_.md): Delete a localized custom name for a subscription group configured with the v2 API.
