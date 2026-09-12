> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-subscriptiongrouplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-subscriptiongrouplocalizations-_id_)

# Delete a subscription group localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Delete localized metadata that you configured for a subscription group.

> This endpoint is deprecated. Use [Delete a subscription group localization](delete-v2-subscriptiongrouplocalizations-_id_.md) instead.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/subscriptionGroupLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

> **Note**

>  Changes that you make to product metadata with the App Store Connect API can take up to 1 hour to appear in the sandbox environment.

## See Also

### Endpoints

- [Create a subscription group localization (v1)](post-v1-subscriptiongrouplocalizations.md): Deprecated. Create a localized display name and optional custom app name for a subscription group.
- [Read subscription group localization information (v1)](get-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Get the specific localized subscription group display name and optional custom app name for a subscription group.
- [Modify a subscription group localization (v1)](patch-v1-subscriptiongrouplocalizations-_id_.md): Deprecated. Update a specific localized display name and optional custom app name for a subscription group.
