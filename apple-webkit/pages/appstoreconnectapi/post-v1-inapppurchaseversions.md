> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/post-v1-inapppurchaseversions

# Create an In-App Purchase version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.4.1+

Create a draft version of an In-App Purchase, capturing its current localized metadata and review images for App Review submission.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/inAppPurchaseVersions
```

## HTTP Body

Content type: `application/json`

Type: `InAppPurchaseVersionCreateRequest`

## Response Codes

- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `201` Created — `InAppPurchaseVersionResponse`:
- `409` Conflict — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md)
- [Managing In-App Purchases](managing-in-app-purchases.md)
- [Working with In-App Purchase versions](working-with-in-app-purchase-versions.md)

## See Also

### Endpoints

- [Read In-App Purchase version information](get-v1-inapppurchaseversions-_id_.md): Get information about a specific draft version of an In-App Purchase.
- [Read the image for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-image.md): Get the review image attached to a draft version of an In-App Purchase.
- [List images for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-images.md): List the review images attached to a draft version of an In-App Purchase.
- [List localizations for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-localizations.md): List the localized display names and descriptions captured in a draft version of an In-App Purchase.
- [Read the image ID for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-relationships-image.md): Get the related resource ID for the review image attached to a draft version of an In-App Purchase.
- [List image IDs for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-relationships-images.md): Get the related resource IDs for the review images attached to a draft version of an In-App Purchase.
- [List localization IDs for an In-App Purchase version](get-v1-inapppurchaseversions-_id_-relationships-localizations.md): Get the related resource IDs for the localizations captured in a draft version of an In-App Purchase.
- [List the versions of an In-App Purchase](get-v2-inapppurchases-_id_-versions.md): List the draft versions of an In-App Purchase configured with the v2 API.
- [Get the resource IDs of the versions of an In-App Purchase](get-v2-inapppurchases-_id_-relationships-versions.md): Get the related resource IDs for the draft versions of an In-App Purchase configured with the v2 API.
