> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/buttonbordershape/roundedrectangle(radius:)](https://developer.apple.com/documentation/swiftui/buttonbordershape/roundedrectangle(radius:))

# roundedRectangle(radius:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 8.0+

A rounded rectangle shape.

## Declaration

```swift
static func roundedRectangle(radius: CGFloat) -> ButtonBorderShape
```

## Parameters

- `radius`: The corner radius of the rectangle.

<a id="discussion"></a>

## Discussion

Use the [buttonBorderShape(\_:)](../view/buttonbordershape%28__%29.md) view modifier to apply the shape to bordered buttons within a view hierarchy.

> **Note**

> This has no effect on non-widget system buttons in macOS.

## See Also

### Getting border shapes

- [automatic](automatic.md): A shape that defers to the system to determine an appropriate shape for the given context and platform.
- [capsule](capsule.md): A capsule shape.
- [circle](circle.md): A circular shape.
- [roundedRectangle](roundedrectangle.md): A rounded rectangle shape.
