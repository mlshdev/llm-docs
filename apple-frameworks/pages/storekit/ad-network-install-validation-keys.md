> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/ad-network-install-validation-keys](https://developer.apple.com/documentation/storekit/ad-network-install-validation-keys)

# Ad network install-validation keys (Swift)

**Framework:** StoreKit  
**Kind:** API Collection

Specify key values that validate and associate an app installation with an ad campaign.

<a id="overview"></a>

## Overview

Ad networks use these keys when calling the product view controller’s [loadProduct(withParameters:completionBlock:)](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method. These keys describe an ad impression in an advertising campaign. The information they contain associates an app installation with an ad campaign. The [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key identifies the advertised app.

Include all the required validation keys in the parameter dictionary for the SKAdNetwork version you’re using.

You also use the values of these keys to generate a signature for the ad impression. For more information, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## Topics

### Required keys for SKAdNetwork 4 and later

- [SKStoreProductParameterAdNetworkSourceIdentifier](skstoreproductparameteradnetworksourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkVersion](skstoreproductparameteradnetworkversion.md): The key that represents the version of the ad network API.
- [SKStoreProductParameterAdNetworkSourceAppStoreIdentifier](skstoreproductparameteradnetworksourceappstoreidentifier.md): The key that represents the App Store ID of the app that displays the ad.

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.

## See Also

### Signing StoreKit-rendered ads

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md): Initiate install validation by displaying a StoreKit-rendered ad with signed parameters.

# Ad network install-validation keys (Objective-C)

**Framework:** StoreKit  
**Kind:** API Collection

Specify key values that validate and associate an app installation with an ad campaign.

<a id="overview"></a>

## Overview

Ad networks use these keys when calling the product view controller’s [loadProductWithParameters:completionBlock:](skstoreproductviewcontroller/loadproduct%28withparameters_completionblock_%29.md) method. These keys describe an ad impression in an advertising campaign. The information they contain associates an app installation with an ad campaign. The [SKStoreProductParameterITunesItemIdentifier](skstoreproductparameteritunesitemidentifier.md) key identifies the advertised app.

Include all the required validation keys in the parameter dictionary for the SKAdNetwork version you’re using.

You also use the values of these keys to generate a signature for the ad impression. For more information, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## Topics

### Required keys for SKAdNetwork 4 and later

- [SKStoreProductParameterAdNetworkSourceIdentifier](skstoreproductparameteradnetworksourceidentifier.md): A four-digit integer that ad networks define to represent the ad campaign.

### Required keys for SKAdNetwork 2 and later

- [SKStoreProductParameterAdNetworkVersion](skstoreproductparameteradnetworkversion.md): The key that represents the version of the ad network API.
- [SKStoreProductParameterAdNetworkSourceAppStoreIdentifier](skstoreproductparameteradnetworksourceappstoreidentifier.md): The key that represents the App Store ID of the app that displays the ad.

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.

## See Also

### Signing StoreKit-rendered ads

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md): Initiate install validation by displaying a StoreKit-rendered ad with signed parameters.
