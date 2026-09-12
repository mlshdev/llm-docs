> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvsenselsitingoffsets/offset](https://developer.apple.com/documentation/corevideo/cvsenselsitingoffsets/offset)

# CVSenselSitingOffsets.Offset

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Siting offset of a component, relative to pixel center.

## Declaration

```swift
struct Offset
```

<a id="overview"></a>

## Overview

A positive offset value indicates that the sensel/component lies to the right of or below the center of its pixel, while a negative value indicates that the sensel/component lies to the left of or above the center of its pixel. Horizontal and vertical offset magnitudes are respectively in terms of the spacing between horizontally and vertically-adjacent pixel centers.

## Topics

### Initializers

- [init(horizontal:vertical:)](offset/init%28horizontal_vertical_%29.md)

### Instance Properties

- [horizontal](offset/horizontal.md)
- [vertical](offset/vertical.md)

### Type Properties

- [zero](offset/zero.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
