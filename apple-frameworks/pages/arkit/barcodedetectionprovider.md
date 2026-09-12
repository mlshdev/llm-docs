> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/barcodedetectionprovider](https://developer.apple.com/documentation/arkit/barcodedetectionprovider)

# BarcodeDetectionProvider

**Framework:** ARKit  
**Kind:** Class  
**Availability:** visionOS 2.0+

An object that provides the real-time position of barcodes the framework detects in a person’s environment.

## Declaration

```swift
final class BarcodeDetectionProvider
```

<a id="overview"></a>

## Overview

Use this provider to receive updates about barcodes that ARKit detect in a person’s surroundings, This provider returns the results in the form of an asynchronous sequence of [BarcodeAnchor](barcodeanchor.md) structures. Your app needs to include the [Spatial barcode and QR code scanning](../bundleresources/entitlements/com.apple.developer.arkit.barcode-detection.allow.md) entitlement to use this capability; otherwise, it has no effect.

## Topics

### Creating a barcode detection provider

- [init(symbologies:)](barcodedetectionprovider/init%28symbologies_%29.md): Creates a barcode detection provider that looks for the specified symbologies.

### Inspecting a barcode detection provider

- [anchorUpdates](barcodedetectionprovider/anchorupdates.md): An asynchronous sequence of anchor updates that describe the anchors in a person’s surroundings.
- [description](barcodedetectionprovider/description.md): A textual representation of this barcode detection provider.
- [state](barcodedetectionprovider/state.md): The state of a barcode detection provider.

### Type properties

- [isSupported](barcodedetectionprovider/issupported.md): A Boolean value that determines whether a device supports the barcode detection provider.
- [requiredAuthorizations](barcodedetectionprovider/requiredauthorizations.md): The authorization types you need to use the barcode detection provider.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [DataProvider](dataprovider.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Barcode detection

- [BarcodeAnchor](barcodeanchor.md): A barcode’s position in a person’s surroundings.
