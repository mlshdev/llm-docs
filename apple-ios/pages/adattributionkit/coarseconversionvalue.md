> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/adattributionkit/coarseconversionvalue](https://developer.apple.com/documentation/adattributionkit/coarseconversionvalue)

# CoarseConversionValue

**Framework:** AdAttributionKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Values that describe developer-defined, relative-attribution conversion values.

## Declaration

```swift
enum CoarseConversionValue
```

<a id="overview"></a>

## Overview

Use these values to differentiate between the value of a person’s actions that are meaningful for a specific interaction. These values have no effect on the framework, but calling the [updateConversionValue(\_:lockPostback:)](postback/updateconversionvalue%28__lockpostback_%29.md) method with the value with [CoarseConversionValue.low](coarseconversionvalue/low.md), for example, causes the postback that the ad network receives to have a field `"coarse-conversion-value": "low"`.

## Topics

### Enumeration Cases

- [CoarseConversionValue.high](coarseconversionvalue/high.md): A value that represents a developer-defined, coarse conversion value that is high.
- [CoarseConversionValue.low](coarseconversionvalue/low.md): A value that represents a developer-defined, coarse conversion value that is low.
- [CoarseConversionValue.medium](coarseconversionvalue/medium.md): A value that represents a developer-defined, coarse conversion value that is medium.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Postbacks

- [Postback](postback.md): A structure that provides methods you use to update conversion values for ad attributions.
- [PostbackUpdate](postbackupdate.md): Values you use to update properties in a postback, such as the conversion value.
