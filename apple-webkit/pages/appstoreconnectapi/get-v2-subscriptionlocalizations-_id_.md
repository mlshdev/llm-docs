> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v2-subscriptionlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v2-subscriptionlocalizations-_id_)

# Read subscription localization information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Get the display name and description for a specific locale of a subscription configured with the v2 API.

## URL

```http
GET https://api.appstoreconnect.apple.com/v2/subscriptionLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[subscriptionLocalizations]` — `[string]`: **Allowed values:** `name`, `locale`, `description`, `version`
- `fields[subscriptionVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscription`, `image`, `images`, `localizations`
- `include` — `[string]`: **Allowed values:** `version`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `200` OK — `SubscriptionLocalizationV2Response`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [Create a subscription localization](post-v2-subscriptionlocalizations.md): Create a localized display name and description for an auto-renewable subscription configured with the v2 API.
- [Modify a subscription localization](patch-v2-subscriptionlocalizations-_id_.md): Update the display name and description for a specific locale of a subscription configured with the v2 API.
- [Delete a subscription localization](delete-v2-subscriptionlocalizations-_id_.md): Delete a localized display name and description for a subscription configured with the v2 API.
