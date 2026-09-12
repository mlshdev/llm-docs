> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/concentricrectangle/init(corners:isuniform:)](https://developer.apple.com/documentation/swiftui/concentricrectangle/init(corners:isuniform:))

# init(corners:isUniform:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with the same corner style set on four corners.

## Declaration

```swift
init(corners: Edge.Corner.Style, isUniform: Bool = false)
```

## Parameters

- `corners`: The corner style for all four corners.
- `isUniform`: A Boolean value that indicates whether to apply the corner style on each corner individually or uniformly.

<a id="discussion"></a>

## Discussion

When you provide `false` for `isUniform`, the system may calculate a different radius for each corner. This can happen when the rectangle is not centered within the container shape, or the container shape’s corners have different radii. When you provide `true` for `isUniform`, the system calculates the radius for each corner first. Then, it selects the largest radius and applies it to each corner to achieve the symmetric look.

## See Also

### Creating a rectangle with the same corner style

- [rect(corners:isUniform:)](../shape/rect%28corners_isuniform_%29.md): Creates a rectangle with the same corner style set on four corners.
