> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadimpression/signature](https://developer.apple.com/documentation/storekit/skadimpression/signature)

# signature (Swift)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

The advertising network’s cryptographic signature for the ad impression.

## Declaration

```swift
var signature: String { get set }
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

The ad network creates a cryptographic signature that it uses to sign ads. For instructions on generating this value, see [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md).

# signature (Objective-C)

**Framework:** StoreKit  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+

The advertising network’s cryptographic signature for the ad impression.

## Declaration

```objectivec
@property (nonatomic, strong) NSString * signature;
```

## Mentioned In

- [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md)
- [Signing and providing ads](../signing-and-providing-ads.md)

<a id="Discussion"></a>

## Discussion

The ad network creates a cryptographic signature that it uses to sign ads. For instructions on generating this value, see [Generating the signature to validate view-through ads](../generating-the-signature-to-validate-view-through-ads.md).
