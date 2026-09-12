> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption/redeye](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption/redeye)

# redEye (Swift)

**Framework:** Core Image  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify whether to return a red eye filter.

## Declaration

```swift
static let redEye: CIImageAutoAdjustmentOption
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. Supply `false` to indicate not to return a red eye filter. If you don’t specify this option, Core Image assumes its value is `true`.

## See Also

### Type Properties

- [crop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [enhance](enhance.md): A key used to specify whether to return enhancement filters.
- [features](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [level](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.

# kCIImageAutoAdjustRedEye (Objective-C)

**Framework:** Core Image  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS · visionOS 1.0+

A key used to specify whether to return a red eye filter.

## Declaration

```objectivec
extern CIImageAutoAdjustmentOption const kCIImageAutoAdjustRedEye;
```

<a id="Discussion"></a>

## Discussion

The value associated with this key is a `CFBoolean` value. Supply `false` to indicate not to return a red eye filter. If you don’t specify this option, Core Image assumes its value is `true`.

## See Also

### Type Properties

- [kCIImageAutoAdjustCrop](crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustEnhance](enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustFeatures](features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustLevel](level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
