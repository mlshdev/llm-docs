> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/edge/corner/style](https://developer.apple.com/documentation/swiftui/edge/corner/style)

# Edge.Corner.Style

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A style that describes the corner of a rectangular shape.

## Declaration

```swift
struct Style
```

<a id="overview"></a>

## Overview

A corner can be square, rounded with a fixed-radius curve, or rounded with a curve that’s concentric to the container shape. For more information on how to create a shape with configurable corner styles, see [ConcentricRectangle](../../concentricrectangle.md).

> **See Also**

> [ConcentricRectangle](../../concentricrectangle.md), [RoundedRectangularShape](../../roundedrectangularshape.md)

## Topics

### Type Properties

- [concentric](style/concentric.md): A rounded corner style where the corner’s radius shares a center point with the container shape’s corner radius.

### Type Methods

- [concentric(minimum:)](style/concentric%28minimum_%29.md): A rounded corner style where the corner’s radius shares a center point with the container shape’s corner radius, with an optional minimum radius.
- [fixed(\_:)](style/fixed%28__%29.md): A rounded corner style where the corner’s radius is the value you provide.

### Default Implementations

- [ExpressibleByFloatLiteral Implementations](style/expressiblebyfloatliteral-implementations.md)
- [ExpressibleByIntegerLiteral Implementations](style/expressiblebyintegerliteral-implementations.md)

## Relationships

### Conforms To

- [Animatable](../../animatable.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
