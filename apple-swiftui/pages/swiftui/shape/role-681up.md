> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/role-681up](https://developer.apple.com/documentation/swiftui/shape/role-681up)

# role

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An indication of how to style a shape.

## Declaration

```swift
static var role: ShapeRole { get }
```

<a id="discussion"></a>

## Discussion

SwiftUI looks at a shape’s role when deciding how to apply a [ShapeStyle](../shapestyle.md) at render time. The [Shape](../shape.md) protocol provides a default implementation with a value of [ShapeRole.fill](../shaperole/fill.md). If you create a composite shape, you can provide an override of this property to return another value, if appropriate.
