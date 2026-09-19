> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/paymentcardreader/issupported

# isSupported

**Framework:** ProximityReader  
**Kind:** Type Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A Boolean value that indicates whether this device model supports Tap to Pay on iPhone.

## Declaration

```swift
static let isSupported: Bool
```

## Mentioned In

- [Adding support for Tap to Pay on iPhone to your app](../adding-support-for-tap-to-pay-on-iphone-to-your-app.md)

<a id="discussion"></a>

## Discussion

For this property to be `true`, the device model must be iPhone XS or newer. This property doesn’t check the OS version.
