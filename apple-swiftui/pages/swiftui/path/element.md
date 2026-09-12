> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/element](https://developer.apple.com/documentation/swiftui/path/element)

# Path.Element

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

An element of a path.

## Declaration

```swift
@frozen enum Element
```

## Topics

### Getting path elements

- [Path.Element.closeSubpath](element/closesubpath.md): A line from the start point of the current subpath (if any) to the current point, which terminates the subpath.
- [Path.Element.curve(to:control1:control2:)](element/curve%28to_control1_control2_%29.md): A cubic Bézier curve from the previous current point to the given end-point, using the two control points to define the curve.
- [Path.Element.line(to:)](element/line%28to_%29.md): A line from the previous current point to the given point, which becomes the new current point.
- [Path.Element.move(to:)](element/move%28to_%29.md): A path element that terminates the current subpath (without closing it) and defines a new current point.
- [Path.Element.quadCurve(to:control:)](element/quadcurve%28to_control_%29.md): A quadratic Bézier curve from the previous current point to the given end-point, using the single control point to define the curve.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Operating over path elements

- [forEach(\_:)](foreach%28__%29.md): Calls `body` with each element in the path.
