> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v2-subscriptionlocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v2-subscriptionlocalizations-_id_)

# Delete a subscription localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Delete a localized display name and description for a subscription configured with the v2 API.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v2/subscriptionLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `204` No Content:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)

## See Also

### Endpoints

- [Create a subscription localization](post-v2-subscriptionlocalizations.md): Create a localized display name and description for an auto-renewable subscription configured with the v2 API.
- [Read subscription localization information](get-v2-subscriptionlocalizations-_id_.md): Get the display name and description for a specific locale of a subscription configured with the v2 API.
- [Modify a subscription localization](patch-v2-subscriptionlocalizations-_id_.md): Update the display name and description for a specific locale of a subscription configured with the v2 API.
