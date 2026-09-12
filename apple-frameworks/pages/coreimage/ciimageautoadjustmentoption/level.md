> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption/level](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption/level)

# level (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A key used to specify whether to return a filter that rotates the image to keep a level perspective.

## Declaration

```swift
static let level: CIImageAutoAdjustmentOption
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. If `true`, Core Image analyzes the image to determine whether it would benefit from rotation—for example, a landscape photo in which the horizon is not horizontal—and returns a filter to perform that rotation. Supply `false` to indicate not to return a rotation filter. If you don’t specify this option, Core Image assumes its value is `false`.

## See Also

### Type Properties

- [crop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [enhance](enhance.md): A key used to specify whether to return enhancement filters.
- [features](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [redEye](redeye.md): A key used to specify whether to return a red eye filter.

# kCIImageAutoAdjustLevel (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+

A key used to specify whether to return a filter that rotates the image to keep a level perspective.

## Declaration

```objectivec
extern CIImageAutoAdjustmentOption const kCIImageAutoAdjustLevel;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. If `true`, Core Image analyzes the image to determine whether it would benefit from rotation—for example, a landscape photo in which the horizon is not horizontal—and returns a filter to perform that rotation. Supply `false` to indicate not to return a rotation filter. If you don’t specify this option, Core Image assumes its value is `false`.

## See Also

### Type Properties

- [kCIImageAutoAdjustCrop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustEnhance](enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustFeatures](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustRedEye](redeye.md): A key used to specify whether to return a red eye filter.
