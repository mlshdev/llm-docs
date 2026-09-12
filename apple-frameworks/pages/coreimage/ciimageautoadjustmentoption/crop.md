> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption/crop](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption/crop)

# crop (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A key used to specify whether to return a filter that crops the image to focus on detected features.

## Declaration

```swift
static let crop: CIImageAutoAdjustmentOption
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. If `true`, the returned filters include an operation that crops the image around the features specified with the [features](features.md) option (or any features detected in the image, if that option is not present). Supply `false` to indicate not to return a crop filter. If you don’t specify this option, Core Image assumes its value is `false`.

## See Also

### Type Properties

- [enhance](enhance.md): A key used to specify whether to return enhancement filters.
- [features](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [level](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [redEye](redeye.md): A key used to specify whether to return a red eye filter.

# kCIImageAutoAdjustCrop (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A key used to specify whether to return a filter that crops the image to focus on detected features.

## Declaration

```objectivec
extern CIImageAutoAdjustmentOption const kCIImageAutoAdjustCrop;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. If `true`, the returned filters include an operation that crops the image around the features specified with the [kCIImageAutoAdjustFeatures](features.md) option (or any features detected in the image, if that option is not present). Supply `false` to indicate not to return a crop filter. If you don’t specify this option, Core Image assumes its value is `false`.

## See Also

### Type Properties

- [kCIImageAutoAdjustEnhance](enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustFeatures](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustLevel](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [kCIImageAutoAdjustRedEye](redeye.md): A key used to specify whether to return a red eye filter.
