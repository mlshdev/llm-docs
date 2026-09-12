> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworktimestamp](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworktimestamp)

# SKStoreProductParameterAdNetworkTimestamp (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the UNIX time, in milliseconds, of the ad impression.

## Declaration

```swift
let SKStoreProductParameterAdNetworkTimestamp: String
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). Ad networks generate the timestamp, represented as UNIX time in milliseconds, at the time you’re preparing to serve the ad.

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.

# SKStoreProductParameterAdNetworkTimestamp (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+

The key that represents the UNIX time, in milliseconds, of the ad impression.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkTimestamp;
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../foundation/nsnumber.md). Ad networks generate the timestamp, represented as UNIX time in milliseconds, at the time you’re preparing to serve the ad.

## See Also

### Required keys

- [SKStoreProductParameterAdNetworkIdentifier](skstoreproductparameteradnetworkidentifier.md): The key that represents the advertising network’s unique identifier.
- [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md): The key that represents the advertising network’s campaign.
- [SKStoreProductParameterAdNetworkNonce](skstoreproductparameteradnetworknonce.md): The key that represents a random value to use for added security.
- [SKStoreProductParameterAdNetworkAttributionSignature](skstoreproductparameteradnetworkattributionsignature.md): The key that represents the advertising network’s cryptographic signature to use for install validation.
