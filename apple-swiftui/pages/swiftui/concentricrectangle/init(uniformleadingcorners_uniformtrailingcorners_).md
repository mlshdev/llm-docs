> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/concentricrectangle/init(uniformleadingcorners:uniformtrailingcorners:)](https://developer.apple.com/documentation/swiftui/concentricrectangle/init(uniformleadingcorners:uniformtrailingcorners:))

# init(uniformLeadingCorners:uniformTrailingCorners:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a rectangle with a corner style set on the leading two corners uniformly, and another style set on the trailing two corners uniformly.

## Declaration

```swift
init(uniformLeadingCorners: Edge.Corner.Style = .concentric, uniformTrailingCorners: Edge.Corner.Style = .concentric)
```

## Parameters

- `uniformLeadingCorners`: The corner style to apply to the leading two corners uniformly.
- `uniformTrailingCorners`: The corner style to apply to the trailing two corners uniformly.

<a id="discussion"></a>

## Discussion

For the two leading corners and two trailing corners, the system calculates the radius for each corner first. Then, it selects the largest leading radius and applies it to each leading corner, and it selects the largest trailing radius and applies it to each trailing corner to achieve the symmetric look.

## See Also

### Creating a rectangle with uniform leading and trailing corners

- [rect(uniformLeadingCorners:uniformTrailingCorners:)](../shape/rect%28uniformleadingcorners_uniformtrailingcorners_%29.md): Creates a rectangle with a corner style uniformly set on the two leading corners, and another style uniformly set on the two trailing corners.
