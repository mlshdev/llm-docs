> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/path/init(roundedrect:cornerradii:style:)](https://developer.apple.com/documentation/swiftui/path/init(roundedrect:cornerradii:style:))

# init(roundedRect:cornerRadii:style:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a path as the given rounded rectangle, which may have uneven corner radii.

## Declaration

```swift
init(roundedRect rect: CGRect, cornerRadii: RectangleCornerRadii, style: RoundedCornerStyle = .continuous)
```

## Parameters

- `rect`: A rectangle, specified in user space coordinates.
- `cornerRadii`: The radius of each corner of the rectangle, specified in user space coordinates.
- `style`: The corner style. Defaults to the `continous` style if not specified.

<a id="discussion"></a>

## Discussion

This is a convenience function that creates a path of a rounded rectangle. Using this function is more efficient than creating a path and adding a rounded rectangle to it.

## See Also

### Creating a path

- [init()](init%28%29.md): Creates an empty path.
- [init(\_:)](init%28__%29.md): Creates an empty path, then executes a closure to add its initial elements.
- [init(ellipseIn:)](init%28ellipsein_%29.md): Creates a path as an ellipse within the given rectangle.
- [init(roundedRect:cornerRadius:style:)](init%28roundedrect_cornerradius_style_%29.md): Creates a path containing a rounded rectangle.
- [init(roundedRect:cornerSize:style:)](init%28roundedrect_cornersize_style_%29.md): Creates a path containing a rounded rectangle.
