> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption/enhance](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption/enhance)

# enhance (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify whether to return enhancement filters.

## Declaration

```swift
static let enhance: CIImageAutoAdjustmentOption
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. Supply `false` to indicate not to return enhancement filters. If you don’t specify this option, Core Image assumes its value is `true`.

## See Also

### Type Properties

- [crop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [features](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [level](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [redEye](redeye.md): A key used to specify whether to return a red eye filter.

# kCIImageAutoAdjustEnhance (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify whether to return enhancement filters.

## Declaration

```objectivec
extern CIImageAutoAdjustmentOption const kCIImageAutoAdjustEnhance;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. Supply `false` to indicate not to return enhancement filters. If you don’t specify this option, Core Image assumes its value is `true`.

## See Also

### Type Properties

- [kCIImageAutoAdjustCrop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustFeatures](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustLevel](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [kCIImageAutoAdjustRedEye](redeye.md): A key used to specify whether to return a red eye filter.
