> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/lineheight](https://developer.apple.com/documentation/foundation/attributedstring/lineheight)

# AttributedString.LineHeight

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The line height definition of a paragraph.

## Declaration

```swift
struct LineHeight
```

<a id="overview"></a>

## Overview

The line height defines the distance between the baselines of two subsequent lines of text.

## Topics

### Type Properties

- [loose](lineheight/loose.md): Constant line height based on a multiple of the point size that is perceived as loose.
- [normal](lineheight/normal.md): Constant line height based on a multiple of the point size that is perceived as normal.
- [tight](lineheight/tight.md): Constant line height based on a multiple of the point size that is perceived as tight.
- [variable](lineheight/variable.md): Variable line height based on font metrics.

### Type Methods

- [exact(points:)](lineheight/exact%28points_%29.md): Constant line height based on a fixed total.
- [leading(increase:)](lineheight/leading%28increase_%29.md): Constant line height based on point size and a fixed increase.
- [multiple(factor:)](lineheight/multiple%28factor_%29.md): Constant line height based on a multiple of the point size.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
