> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/armattegenerator/resolution](https://developer.apple.com/documentation/arkit/armattegenerator/resolution)

# ARMatteGenerator.Resolution (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A resolution for a matte texture.

## Declaration

```swift
enum Resolution
```

<a id="overview"></a>

## Overview

You generate a matte texture every frame, specifying whether its resolution is the full size or half of the camera image.

## Topics

### Choosing a Resolution Option

- [ARMatteGenerator.Resolution.full](resolution/full.md): An option that specifies the full camera image resolution.
- [ARMatteGenerator.Resolution.half](resolution/half.md): An option that specifies half of the camera image resolution.

### Initializers

- [init(rawValue:)](resolution/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ARMatteResolution (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

A resolution for a matte texture.

## Declaration

```objectivec
enum ARMatteResolution : NSInteger;
```

<a id="overview"></a>

## Overview

You generate a matte texture every frame, specifying whether its resolution is the full size or half of the camera image.

## Topics

### Choosing a Resolution Option

- [ARMatteResolutionFull](resolution/full.md): An option that specifies the full camera image resolution.
- [ARMatteResolutionHalf](resolution/half.md): An option that specifies half of the camera image resolution.
