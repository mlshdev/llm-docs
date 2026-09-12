> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerradius-swift.struct](https://developer.apple.com/documentation/uikit/uicornerradius-swift.struct)

# UICornerRadius

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A type that represents the radius the system uses to round a corner.

## Declaration

```swift
struct UICornerRadius
```

## Topics

### Defining a radius

- [containerConcentric(minimum:)](uicornerradius-swift.struct/containerconcentric%28minimum_%29.md): A dynamic corner radius calculated using the geometry of the view and its container limited to a minimum radius.
- [fixed(\_:)](uicornerradius-swift.struct/fixed%28__%29.md): Creates a radius that represents a fixed corner radius in points.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByFloatLiteral](https://developer.apple.com/documentation/swift/expressiblebyfloatliteral)
- [ExpressibleByIntegerLiteral](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring a view’s corners

- [cornerConfiguration](uiview/cornerconfiguration-7l0ja.md): A configuration that defines the corners of the view.
- [UICornerConfiguration](uicornerconfiguration-swift.struct.md): A configuration that defines how corner radii are mapped to the corners of a rectangle.
- [effectiveRadius(corner:)](uiview/effectiveradius%28corner_%29.md): Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.
