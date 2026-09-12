> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-swift.struct/corners(topleftradius:toprightradius:bottomleftradius:bottomrightradius:)](https://developer.apple.com/documentation/uikit/uicornerconfiguration-swift.struct/corners(topleftradius:toprightradius:bottomleftradius:bottomrightradius:))

# corners(topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration with independent radii for each corner.

## Declaration

```swift
static func corners(topLeftRadius: UICornerRadius?, topRightRadius: UICornerRadius?, bottomLeftRadius: UICornerRadius?, bottomRightRadius: UICornerRadius?) -> UICornerConfiguration
```

## Parameters

- `topLeftRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-left corner.
- `topRightRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-right corner.
- `bottomLeftRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the bottom-left corner.
- `bottomRightRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the bottom-right corner.

## See Also

### Configuring independent corners

- [corners(radius:)](corners%28radius_%29.md): A configuration that applies the given radius independently to all corners.
