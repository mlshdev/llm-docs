> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/shape/rect(uniformleadingcorners:uniformtrailingcorners:)](https://developer.apple.com/documentation/swiftui/shape/rect(uniformleadingcorners:uniformtrailingcorners:))

# rect(uniformLeadingCorners:uniformTrailingCorners:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style uniformly set on the two leading corners, and another style uniformly set on the two trailing corners.

## Declaration

```swift
@export(implementation) static func rect(uniformLeadingCorners: Edge.Corner.Style, uniformTrailingCorners: Edge.Corner.Style) -> Self
```

## Parameters

- `uniformLeadingCorners`: The corner style to apply uniformly to the two leading corners.
- `uniformTrailingCorners`: The corner style to apply uniformly to the two trailing corners.

<a id="discussion"></a>

## Discussion

For the two leading corners and two trailing corners, the system calculates the radius for each corner first. Then, it selects the largest leading radius and applies it to each leading corner, and it selects the largest trailing radius and applies it to each trailing corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform leading and trailing corners

- [init(uniformLeadingCorners:uniformTrailingCorners:)](../concentricrectangle/init%28uniformleadingcorners_uniformtrailingcorners_%29.md): Creates a rectangle with a corner style set on the leading two corners uniformly, and another style set on the trailing two corners uniformly.
