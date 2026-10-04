> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f22abf4916e5; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreconnectapi/in-app-purchase-images-v1

# In-App Purchase images (v1)

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection  
**Availability:** App Store Connect API 2.0+ (deprecated in 4.4.1)

Create, modify, and delete promotion images for your In-App Purchases.

<a id="overview"></a>

## Overview

> **Important**

>  This is deprecated. Use [In-App Purchase images](in-app-purchase-images.md) instead.

## Topics

### Endpoints

- [Create an image for an In-App Purchase (v1)](post-v1-inapppurchaseimages.md): Deprecated. Reserve an image asset to appear in the App Store, representing an In-App Purchase.
- [Read In-App Purchase image information (v1)](get-v1-inapppurchaseimages-_id_.md): Deprecated. Read details about a specific In-App Purchase image.
- [List In-App Purchase images](get-v2-inapppurchases-_id_-images.md): Deprecated. List all images for a specific In-App Purchase.
- [Commit an image for an In-App Purchase (v1)](patch-v1-inapppurchaseimages-_id_.md): Deprecated. Commit an uploaded image asset for an In-App Purchase.
- [Delete an In-App Purchase image (v1)](delete-v1-inapppurchaseimages-_id_.md): Deprecated. Delete the image asset that appears on the App Store listing that represents an In-App Purchase.

### Objects

- [InAppPurchaseImage](inapppurchaseimage.md): Deprecated. A screenshot or image associated with an In-App Purchase or subscription, displayed on the App Store product page.
- [InAppPurchaseImageCreateRequest](inapppurchaseimagecreaterequest.md): Deprecated. The request body you use to create an In-App Purchase image reservation.
- [InAppPurchaseImageResponse](inapppurchaseimageresponse.md): Deprecated. A response containing a single image for an In-App Purchase.
- [InAppPurchaseImageUpdateRequest](inapppurchaseimageupdaterequest.md): Deprecated. The request body for updating the upload state or file content of an In-App Purchase image.
- [InAppPurchaseImagesResponse](inapppurchaseimagesresponse.md): Deprecated. A response containing a list of images for an In-App Purchase.

## See Also

### Managing In-App Purchases

- [Managing In-App Purchases](managing-in-app-purchases.md): Create In-App Purchases, configure their metadata and pricing, submit them for review, and promote them with the App Store Connect API.
- [Working with In-App Purchase versions](working-with-in-app-purchase-versions.md): Manage draft versions of an In-App Purchase’s localized metadata and review images before submitting for App Review.
- [Migrating In-App Purchase metadata to v2](migrating-in-app-purchase-metadata-to-v2.md): Update an existing integration from the pre-4.4.1 metadata workflow to the version-based v2 workflow.
- [In-App Purchase Versions](in-app-purchase-versions.md): Create and read draft versions of an In-App Purchase, with their localized metadata and review images.
- [In-App Purchases](in-app-purchases.md): Create, modify, and delete In-App Purchases for your app.
- [In-App Purchase Localizations](in-app-purchase-localizations.md): Create, modify, and delete localized metadata for In-App Purchase versions.
- [In-App Purchase localizations (v1)](in-app-purchase-localizations-v1.md): Deprecated. Create, modify, and delete localized metadata for In-App Purchases.
- [In-App Purchase price schedules](in-app-purchase-price-schedules.md): Create a scheduled price change for an In-App Purchase, and get information about scheduled price changes.
- [In-App Purchase availability](in-app-purchase-availability.md): Read and modify territory availability for an In-App Purchase.
- [In-App Purchase images](in-app-purchase-images.md): Create, modify, and delete promotion images for In-App Purchases.
