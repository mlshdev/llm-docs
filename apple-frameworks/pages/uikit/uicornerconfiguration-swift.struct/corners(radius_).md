> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-swift.struct/corners(radius:)](https://developer.apple.com/documentation/uikit/uicornerconfiguration-swift.struct/corners(radius:))

# corners(radius:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that applies the given radius independently to all corners.

## Declaration

```swift
static func corners(radius: UICornerRadius) -> UICornerConfiguration
```

## Parameters

- `radius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents a radius to apply to each corner.

<a id="discussion"></a>

## Discussion

Use a container concentric radius to allow each individual corner to resolve to different radii.

## See Also

### Configuring independent corners

- [corners(topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:)](corners%28topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration with independent radii for each corner.
