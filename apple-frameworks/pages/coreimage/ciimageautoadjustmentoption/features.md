> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption/features](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption/features)

# features (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify an array of features that you want to apply enhancement and red eye filters to.

## Declaration

```swift
static let features: CIImageAutoAdjustmentOption
```

<a id="Discussion"></a>

## Discussion

The associated value is an array of `CIFeature` objects. If you don’t supply an array, the Core Image searches for features using the `CIDetector` class.

## See Also

### Type Properties

- [crop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [enhance](enhance.md): A key used to specify whether to return enhancement filters.
- [level](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [redEye](redeye.md): A key used to specify whether to return a red eye filter.

# kCIImageAutoAdjustFeatures (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify an array of features that you want to apply enhancement and red eye filters to.

## Declaration

```objectivec
extern CIImageAutoAdjustmentOption const kCIImageAutoAdjustFeatures;
```

<a id="Discussion"></a>

## Discussion

The associated value is an array of `CIFeature` objects. If you don’t supply an array, the Core Image searches for features using the `CIDetector` class.

## See Also

### Type Properties

- [kCIImageAutoAdjustCrop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustEnhance](enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustLevel](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [kCIImageAutoAdjustRedEye](redeye.md): A key used to specify whether to return a red eye filter.
