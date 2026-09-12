> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product-dictionary-keys](https://developer.apple.com/documentation/storekit/product-dictionary-keys)

# Product Dictionary Keys (Swift)

**Framework:** StoreKit  
**Kind:** API Collection

Keys for identifying products and the tokens for affiliates and campaigns.

<a id="overview"></a>

## Overview

These dictionary keys are used in the parameter for the [loadProduct(withParameters:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method.

The [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key represents the product to display, and is always required. Other keys provide optional affiliate or promoted product information.

Learn more about the Affiliate Program at [https://apple.com/itunes/affiliates](https://apple.com/itunes/affiliates).

## Topics

### Required Key

- [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md): The key representing the iTunes identifier for the item you want the store to display when the view controller is presented.

### Affiliate and Analytics Keys

- [SKStoreProductParameterProductIdentifier](skstoreproductparameterproductidentifier.md): The key representing the product identifier for the promoted product you want the store to display at the top of the page.
- [SKStoreProductParameterAdvertisingPartnerToken](skstoreproductparameteradvertisingpartnertoken.md): The key representing the advertising partner you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterAffiliateToken](skstoreproductparameteraffiliatetoken.md): The key representing the affiliate identifier you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterCampaignToken](skstoreproductparametercampaigntoken.md): The key representing an App Analytics campaign.
- [SKStoreProductParameterProviderToken](skstoreproductparameterprovidertoken.md): The key representing the provider token for the developer that created the app specified by the [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key.
- [SKStoreProductParameterCustomProductPageIdentifier](skstoreproductparametercustomproductpageidentifier.md): The key that represents the custom product page identifier you want the store to display when you present the view controller.

## See Also

### Loading a new product screen

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProduct(withParameters:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProduct(withParameters:impression:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_impression_completionblock_%29.md)
- [loadProduct(parameters:impression:)](skstoreproductviewcontroller/loadproduct%28parameters_impression_%29.md)
- [loadProduct(parameters:impression:reengagementURL:)](skstoreproductviewcontroller/loadproduct%28parameters_impression_reengagementurl_%29.md)

# Product Dictionary Keys (Objective-C)

**Framework:** StoreKit  
**Kind:** API Collection

Keys for identifying products and the tokens for affiliates and campaigns.

<a id="overview"></a>

## Overview

These dictionary keys are used in the parameter for the [loadProductWithParameters:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method.

The [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key represents the product to display, and is always required. Other keys provide optional affiliate or promoted product information.

Learn more about the Affiliate Program at [https://apple.com/itunes/affiliates](https://apple.com/itunes/affiliates).

## Topics

### Required Key

- [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md): The key representing the iTunes identifier for the item you want the store to display when the view controller is presented.

### Affiliate and Analytics Keys

- [SKStoreProductParameterProductIdentifier](skstoreproductparameterproductidentifier.md): The key representing the product identifier for the promoted product you want the store to display at the top of the page.
- [SKStoreProductParameterAdvertisingPartnerToken](skstoreproductparameteradvertisingpartnertoken.md): The key representing the advertising partner you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterAffiliateToken](skstoreproductparameteraffiliatetoken.md): The key representing the affiliate identifier you wish to use for any purchase made through the view controller.
- [SKStoreProductParameterCampaignToken](skstoreproductparametercampaigntoken.md): The key representing an App Analytics campaign.
- [SKStoreProductParameterProviderToken](skstoreproductparameterprovidertoken.md): The key representing the provider token for the developer that created the app specified by the [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key.
- [SKStoreProductParameterCustomProductPageIdentifier](skstoreproductparametercustomproductpageidentifier.md): The key that represents the custom product page identifier you want the store to display when you present the view controller.

## See Also

### Loading a new product screen

- [Offering media for sale in your app](offering-media-for-sale-in-your-app.md): Allow users to purchase media in the App Store from within your app.
- [loadProductWithParameters:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md): Loads a new product screen to display.
- [loadProductWithParameters:impression:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_impression_completionblock_%29.md)
