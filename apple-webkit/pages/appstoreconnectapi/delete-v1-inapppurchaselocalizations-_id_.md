> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-inapppurchaselocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-inapppurchaselocalizations-_id_)

# Delete an in-app purchase localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Delete the metadata for a single in-app purchase localization.

> This endpoint is deprecated. Use [Delete an in-app purchase localization](delete-v2-inapppurchaselocalizations-_id_.md) instead.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/inAppPurchaseLocalizations/{id}
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

- [List all localizations for an in-app purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific in-app purchase.
- [Create an in-app purchase localization (v1)](post-v1-inapppurchaselocalizations.md): Deprecated. Create a localized display name and description for an in-app purchase.
- [Read in-app purchase localization information (v1)](get-v1-inapppurchaselocalizations-_id_.md): Deprecated. Get the display name and description for a specific locale for an in-app purchase.
- [Modify an in-app purchase localization (v1)](patch-v1-inapppurchaselocalizations-_id_.md): Deprecated. Update the display name and description for a specific locale of an in-app purchase.
