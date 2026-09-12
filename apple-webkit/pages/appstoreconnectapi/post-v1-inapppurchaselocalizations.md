> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-inapppurchaselocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaselocalizations)

# Create an in-app purchase localization (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create a localized display name and description for an in-app purchase.

> This endpoint is deprecated. Use [Create an in-app purchase localization](post-v2-inapppurchaselocalizations.md) instead.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseLocalizationCreateRequest`

## Response Codes

- `201` Created — `InAppPurchaseLocalizationResponse`:
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

- [List all localizations for an in-app purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific in-app purchase.
- [Read in-app purchase localization information (v1)](get-v1-inapppurchaselocalizations-_id_.md): Deprecated. Get the display name and description for a specific locale for an in-app purchase.
- [Modify an in-app purchase localization (v1)](patch-v1-inapppurchaselocalizations-_id_.md): Deprecated. Update the display name and description for a specific locale of an in-app purchase.
- [Delete an in-app purchase localization (v1)](delete-v1-inapppurchaselocalizations-_id_.md): Deprecated. Delete the metadata for a single in-app purchase localization.
