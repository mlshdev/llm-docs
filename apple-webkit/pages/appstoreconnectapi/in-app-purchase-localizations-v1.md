> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/in-app-purchase-localizations-v1](https://developer.apple.com/documentation/appstoreconnectapi/in-app-purchase-localizations-v1)

# In-app purchase localizations (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create, modify, and delete localized metadata for in-app purchases.

<a id="overview"></a>

## Overview

> **Important**

>  This is deprecated. Use [In-App Purchase Localizations](in-app-purchase-localizations.md) instead.

## Topics

### Endpoints

- [List all localizations for an in-app purchase](get-v2-inapppurchases-_id_-inapppurchaselocalizations.md): Deprecated. Get a list of localized display names and descriptions for a specific in-app purchase.
- [Create an in-app purchase localization (v1)](post-v1-inapppurchaselocalizations.md): Deprecated. Create a localized display name and description for an in-app purchase.
- [Read in-app purchase localization information (v1)](get-v1-inapppurchaselocalizations-_id_.md): Deprecated. Get the display name and description for a specific locale for an in-app purchase.
- [Modify an in-app purchase localization (v1)](patch-v1-inapppurchaselocalizations-_id_.md): Deprecated. Update the display name and description for a specific locale of an in-app purchase.
- [Delete an in-app purchase localization (v1)](delete-v1-inapppurchaselocalizations-_id_.md): Deprecated. Delete the metadata for a single in-app purchase localization.

### Objects

- [InAppPurchaseContentResponse](inapppurchasecontentresponse.md): A response containing a single hosted content record for an in-app purchase.
- [InAppPurchaseContent](inapppurchasecontent.md): Hosted downloadable content associated with a non-consumable in-app purchase.
- [InAppPurchaseLocalizationCreateRequest](inapppurchaselocalizationcreaterequest.md): Deprecated. The request body you use to create an in-app purchase localization.
- [InAppPurchaseLocalizationUpdateRequest](inapppurchaselocalizationupdaterequest.md): Deprecated. The request body you use to update an in-app purchase localization update request.
- [InAppPurchaseLocalizationsResponse](inapppurchaselocalizationsresponse.md): Deprecated. The response body for endpoints that list localizations for an in-app purchase.
- [InAppPurchaseLocalization](inapppurchaselocalization.md): Deprecated. The localized display name and description for an in-app purchase shown to customers in a specific language.

## See Also

### Managing In-App Purchases

- [Managing in-app purchases](managing-in-app-purchases.md): Create in-app purchases, configure their metadata and pricing, submit them for review, and promote them with the App Store Connect API.
- [Working with in-app purchase versions](working-with-in-app-purchase-versions.md): Manage draft versions of an in-app purchase’s localized metadata and review images before submitting for App Review.
- [Migrating in-app purchase metadata to v2](migrating-in-app-purchase-metadata-to-v2.md): Update an existing integration from the pre-4.4.1 metadata workflow to the version-based v2 workflow.
- [In-App Purchase Versions](in-app-purchase-versions.md): Create and read draft versions of an in-app purchase, with their localized metadata and review images.
- [In-App Purchases](in-app-purchases.md): Create, modify, and delete in-app purchases for your app.
- [In-App Purchase Localizations](in-app-purchase-localizations.md): Create, modify, and delete localized metadata for in-app purchase versions.
- [In-App purchase price schedules](in-app-purchase-price-schedules.md): Create a scheduled price change for an in-app purchase, and get information about scheduled price changes.
- [In-app purchase availability](in-app-purchase-availability.md): Read and modify territory availability for an in-app purchase.
- [In-app purchase images](in-app-purchase-images.md): Create, modify, and delete promotion images for in-app purchases.
- [In-app purchase images (v1)](in-app-purchase-images-v1.md): Deprecated. Create, modify, and delete promotion images for your in-app purchases.
