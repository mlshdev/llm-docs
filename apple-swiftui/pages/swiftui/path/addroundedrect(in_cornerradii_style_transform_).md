> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/addroundedrect(in:cornerradii:style:transform:)](https://developer.apple.com/documentation/swiftui/path/addroundedrect(in:cornerradii:style:transform:))

# addRoundedRect(in:cornerRadii:style:transform:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a rounded rectangle with uneven corners to the path.

## Declaration

```swift
mutating func addRoundedRect(in rect: CGRect, cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle = .continuous, transform: CGAffineTransform = .identity)
```

## Parameters

- `rect`: A rectangle, specified in user space coordinates.
- `cornerRadii`: The radius of each corner of the rectangle, specified in user space coordinates.
- `style`: The corner style. Defaults to the `continous` style if not specified.
- `transform`: An affine transform to apply to the rectangle before adding to the path. Defaults to the identity transform if not specified.

<a id="discussion"></a>

## Discussion

This is a convenience function that adds a rounded rectangle to a path, starting by moving to the center of the right edge and then adding lines and curves counter-clockwise to create a rounded rectangle, closing the subpath.
