> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgpathfillrule](https://developer.apple.com/documentation/coregraphics/cgpathfillrule)

# CGPathFillRule

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Rules for determining which regions are interior to a path, used by the [fillPath(using:)](cgcontext/fillpath%28using_%29.md) and [clip(using:)](cgcontext/clip%28using_%29.md) methods.

## Declaration

```swift
enum CGPathFillRule
```

<a id="overview"></a>

## Overview

When filling a path, regions that a fill rule defines as interior to the path are painted. When clipping with a path, regions interior to the path remain visible after clipping.

## Topics

### Enumeration Cases

- [CGPathFillRule.evenOdd](cgpathfillrule/evenodd.md): A rule that considers a region to be interior to a path based on the number of times it is enclosed by path elements.
- [CGPathFillRule.winding](cgpathfillrule/winding.md): A rule that considers a region to be interior to a path if the winding number for that region is nonzero.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Constants

- [CGTextEncoding](cgtextencoding.md): Deprecated. Text encodings for fonts.
