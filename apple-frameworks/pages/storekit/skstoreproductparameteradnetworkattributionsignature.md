> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworkattributionsignature](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworkattributionsignature)

# SKStoreProductParameterAdNetworkAttributionSignature (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the advertising network’s cryptographic signature to use for install validation.

## Declaration

```swift
let SKStoreProductParameterAdNetworkAttributionSignature: String
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). The ad network creates the cryptographic signature, used to sign ads. For instructions on generating this value, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.

# SKStoreProductParameterAdNetworkAttributionSignature (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the advertising network’s cryptographic signature to use for install validation.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkAttributionSignature;
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Signing and providing ads](signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSString](../foundation/nsstring.md). The ad network creates the cryptographic signature, used to sign ads. For instructions on generating this value, see [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md).

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkTimestamp](skstoreproductparameteradnetworktimestamp.md): The key that represents the UNIX time, in milliseconds, of the ad impression.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
