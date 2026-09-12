> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uishape-swift.struct](https://developer.apple.com/documentation/uikit/uishape-swift.struct)

# UIShape

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

An abstract representation of a shape.

## Declaration

```swift
struct UIShape
```

<a id="overview"></a>

## Overview

A [UIShape](uishape-swift.struct.md) can represent different types of shapes, including:

- A simple shape like a rectangle or circle that resolves into a concrete shape according to context (like size and position)
- A Bézier path
- A dynamic shape that resolves using a custom closure

You typically use a [UIShape](uishape-swift.struct.md) with APIs like [UIHoverStyle](uihoverstyle.md) to represent the shape of an effect.

## Topics

### Creating a hover shape

- [rect](uishape-swift.struct/rect.md): Creates a rectangular shape.
- [capsule](uishape-swift.struct/capsule.md): Creates a capsule shape, a rounded rectangle with a corner radius equal to half the length of the rectangle’s smallest edge.
- [circle](uishape-swift.struct/circle.md): Creates a circular shape, with a radius equal to half the length of the frame rectangle’s smallest edge.
- [rect(cornerRadius:cornerCurve:maskedCorners:)](uishape-swift.struct/rect%28cornerradius_cornercurve_maskedcorners_%29.md): Creates a rectangular shape with rounded corners, using the provided corner radius, corner curve, and rectangle corners.
- [fixedRect(\_:cornerRadius:cornerCurve:maskedCorners:)](uishape-swift.struct/fixedrect%28__cornerradius_cornercurve_maskedcorners_%29.md): Creates a fixed rectangular shape that uses the provided rectangle as its shape, regardless of the frame that contains it.
- [UICornerCurve](uicornercurve.md): The corner curve to apply to a view.

### Creating a hover shape from a custom path

- [path(\_:)](uishape-swift.struct/path%28__%29.md): Creates a shape with a custom Bézier path.

### Creating a dynamic hover shape

- [init(\_:)](uishape-swift.struct/init%28__%29.md): Creates a dynamic shape that resolves using the provided resolver closure and resolution context.
- [UIShapeProvider](uishapeprovider-60loj.md): An interface for a type that provides a custom shape by resolving it dynamically based on a context.
- [UIShape.ResolutionContext](uishape-swift.struct/resolutioncontext.md): The context for resolving a dynamic shape.
- [UIShape.Resolved](uishape-swift.struct/resolved.md): A shape that has completely resolved based on a context.

### Creating a shape by applying insets

- [inset(by:)](uishape-swift.struct/inset%28by_%29-5jxgl.md): Creates a new modified shape by applying the provided insets to this shape.
- [inset(by:)](uishape-swift.struct/inset%28by_%29-7v5nk.md): Creates a new modified shape by applying the provided inset to this shape.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [UIShapeProvider](uishapeprovider-60loj.md)

## See Also

### Specifying a hover shape

- [shape](uihoverstyle/shape-21npk.md): The shape to use for the hover effect.
