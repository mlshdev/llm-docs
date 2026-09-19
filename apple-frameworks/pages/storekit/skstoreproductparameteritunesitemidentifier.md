> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/skstoreproductparameteritunesitemidentifier

# SKStoreProductParameterITunesItemIdentifier (Swift)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The key representing the iTunes identifier for the item you want the store to display when the view controller is presented.

## Declaration

```swift
let SKStoreProductParameterITunesItemIdentifier: String
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key, an iTunes item identifier, is an instance of [NSNumber](../foundation/nsnumber.md).

To find a product’s iTunes identifier, go to [linkmaker.itunes.apple.com](http://linkmaker.itunes.apple.com/us/) and search for the product, then locate the iTunes identifier in the link URL. For example, the iTunes identifier for the iBooks app is 364709193.

# SKStoreProductParameterITunesItemIdentifier (Objective-C)

**Framework:** StoreKit  
**Kind:** Global Variable  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 11.0+

The key representing the iTunes identifier for the item you want the store to display when the view controller is presented.

## Declaration

```objectivec
extern NSString * const SKStoreProductParameterITunesItemIdentifier;
```

## Mentioned In

- [Combining parameters to generate a signature for SKAdNetwork 1](combining-parameters-to-generate-a-signature-for-skadnetwork-1.md)
- [Generating the signature to validate StoreKit-rendered ads](generating-the-signature-to-validate-storekit-rendered-ads.md)

<a id="Discussion"></a>

## Discussion

The value for this key, an iTunes item identifier, is an instance of [NSNumber](../foundation/nsnumber.md).

To find a product’s iTunes identifier, go to [linkmaker.itunes.apple.com](http://linkmaker.itunes.apple.com/us/) and search for the product, then locate the iTunes identifier in the link URL. For example, the iTunes identifier for the iBooks app is 364709193.
