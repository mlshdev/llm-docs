> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageautoadjustmentoption](https://developer.apple.com/documentation/coreimage/ciimageautoadjustmentoption)

# CIImageAutoAdjustmentOption (Swift)

**Framework:** Core Image  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
struct CIImageAutoAdjustmentOption
```

## Topics

### Initializers

- [init(rawValue:)](ciimageautoadjustmentoption/init%28rawvalue_%29.md)

### Type Properties

- [crop](ciimageautoadjustmentoption/crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [enhance](ciimageautoadjustmentoption/enhance.md): A key used to specify whether to return enhancement filters.
- [features](ciimageautoadjustmentoption/features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [level](ciimageautoadjustmentoption/level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [redEye](ciimageautoadjustmentoption/redeye.md): A key used to specify whether to return a red eye filter.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# CIImageAutoAdjustmentOption (Objective-C)

**Framework:** Core Image  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
typedef NSString * CIImageAutoAdjustmentOption;
```

## Topics

### Type Properties

- [kCIImageAutoAdjustCrop](ciimageautoadjustmentoption/crop.md): A key used to specify whether to return a filter that crops the image to focus on detected features.
- [kCIImageAutoAdjustEnhance](ciimageautoadjustmentoption/enhance.md): A key used to specify whether to return enhancement filters.
- [kCIImageAutoAdjustFeatures](ciimageautoadjustmentoption/features.md): A key used to specify an array of features that you want to apply enhancement and red eye filters to.
- [kCIImageAutoAdjustLevel](ciimageautoadjustmentoption/level.md): A key used to specify whether to return a filter that rotates the image to keep a level perspective.
- [kCIImageAutoAdjustRedEye](ciimageautoadjustmentoption/redeye.md): A key used to specify whether to return a red eye filter.
