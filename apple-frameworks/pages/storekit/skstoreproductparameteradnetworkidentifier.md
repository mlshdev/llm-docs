> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworkidentifier](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworkidentifier)

# SKStoreProductParameterAdNetworkIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the advertising network’s unique identifier.

## Declaration

```swift
let SKStoreProductParameterAdNetworkIdentifier: String
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md).

Ad networks obtain an ad network identifier during registration. Ad networks are responsible for sharing their ad network IDs with participating app developers. Apps that display ads and need to initiate the app install validation process must include the ad network ID in their `Info.plist`. For more information see [Registering an ad network](registering-an-ad-network.md) and `Configuring Apps`.

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.

# SKStoreProductParameterAdNetworkIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the advertising network’s unique identifier.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkIdentifier;
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md).

Ad networks obtain an ad network identifier during registration. Ad networks are responsible for sharing their ad network IDs with participating app developers. Apps that display ads and need to initiate the app install validation process must include the ad network ID in their `Info.plist`. For more information see [Registering an ad network](registering-an-ad-network.md) and `Configuring Apps`.

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.
