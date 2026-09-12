> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skstoreproductparameteradnetworksourceidentifier](https://developer.apple.com/documentation/storekit/skstoreproductparameteradnetworksourceidentifier)

# SKStoreProductParameterAdNetworkSourceIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · tvOS 16.1+

A four-digit integer that ad networks define to represent the ad campaign.

## Declaration

```swift
let SKStoreProductParameterAdNetworkSourceIdentifier: String
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)
- [SKAdNetwork 4 release notes](skadnetwork-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

This key is available for ad impressions that use SKAdNetwork 4 and later. The [SKStoreProductParameterAdNetworkSourceIdentifier](skstoreproductparameteradnetworksourceidentifier.md), also known as the *hierarchical source identifier*, replaces and extends the campaign identifier value, [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md).

Ad networks and developers define the meaning of the hierarchical source identifier. This string represents an integer of up to four digits. You can encode information about your advertisement in each set of digits; you may receive two, three, or all four digits of the [sourceIdentifier](skadimpression/sourceidentifier.md) in the first winning postback, depending on the ad impression’s postback data tier. For more information about the value you may get in the postback, see [Receiving postbacks in multiple conversion windows](receiving-postbacks-in-multiple-conversion-windows.md).

# SKStoreProductParameterAdNetworkSourceIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · tvOS 16.1+

A four-digit integer that ad networks define to represent the ad campaign.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterAdNetworkSourceIdentifier;
```

## Mentioned In

- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)
- [Identifying the parameters in install-validation postbacks](identifying-the-parameters-in-install-validation-postbacks.md)
- [SKAdNetwork 4 release notes](skadnetwork-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

This key is available for ad impressions that use SKAdNetwork 4 and later. The [SKStoreProductParameterAdNetworkSourceIdentifier](skstoreproductparameteradnetworksourceidentifier.md), also known as the *hierarchical source identifier*, replaces and extends the campaign identifier value, [SKStoreProductParameterAdNetworkCampaignIdentifier](skstoreproductparameteradnetworkcampaignidentifier.md).

Ad networks and developers define the meaning of the hierarchical source identifier. This string represents an integer of up to four digits. You can encode information about your advertisement in each set of digits; you may receive two, three, or all four digits of the [sourceIdentifier](skadimpression/sourceidentifier.md) in the first winning postback, depending on the ad impression’s postback data tier. For more information about the value you may get in the postback, see [Receiving postbacks in multiple conversion windows](receiving-postbacks-in-multiple-conversion-windows.md).
