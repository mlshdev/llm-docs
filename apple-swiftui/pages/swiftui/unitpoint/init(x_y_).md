> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/unitpoint/init(x:y:)](https://developer.apple.com/documentation/swiftui/unitpoint/init(x:y:))

# init(x:y:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a unit point with the specified horizontal and vertical offsets.

## Declaration

```swift
init(x: CGFloat, y: CGFloat)
```

## Parameters

- `x`: The normalized distance from the origin to the point in the horizontal direction.
- `y`: The normalized distance from the origin to the point in the vertical direction.

<a id="discussion"></a>

## Discussion

Values outside the range `[0, 1]` project to points outside of a view.

## See Also

### Creating a point

- [init()](init%28%29.md): Creates a unit point at the origin.
