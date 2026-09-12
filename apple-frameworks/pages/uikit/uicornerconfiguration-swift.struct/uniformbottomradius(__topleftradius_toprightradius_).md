> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-swift.struct/uniformbottomradius(_:topleftradius:toprightradius:)](https://developer.apple.com/documentation/uikit/uicornerconfiguration-swift.struct/uniformbottomradius(_:topleftradius:toprightradius:))

# uniformBottomRadius(\_:topLeftRadius:topRightRadius:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that applies the radius you provide to the bottom corners, with optional independent radii for the top corners.

## Declaration

```swift
static func uniformBottomRadius(_ bottomRadius: UICornerRadius, topLeftRadius: UICornerRadius? = nil, topRightRadius: UICornerRadius? = nil) -> UICornerConfiguration
```

## Parameters

- `bottomRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the bottom-left and bottom-right corners.
- `topLeftRadius`: An optional [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-left corner.
- `topRightRadius`: An optional [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-right corner.

## See Also

### Configuring uniform corners

- [uniformCorners(radius:)](uniformcorners%28radius_%29.md): A configuration that applies the given radius uniformly to all corners.
- [uniformEdges(leftRadius:rightRadius:)](uniformedges%28leftradius_rightradius_%29.md): A configuration that applies the left radius you provide to the left corners, and the right radius you provide to the right corners.
- [uniformEdges(topRadius:bottomRadius:)](uniformedges%28topradius_bottomradius_%29.md): A configuration that applies the top radius to the top corners, and the bottom radius you provide to the bottom corners.
- [uniformLeftRadius(\_:topRightRadius:bottomRightRadius:)](uniformleftradius%28__toprightradius_bottomrightradius_%29.md): A configuration that applies the left radius to the left corners, with optional independent radii for the right corners.
- [uniformRightRadius(\_:topLeftRadius:bottomLeftRadius:)](uniformrightradius%28__topleftradius_bottomleftradius_%29.md): A configuration that applies the right radius you provide to the right corners, with optional independent radii for the left corners.
- [uniformTopRadius(\_:bottomLeftRadius:bottomRightRadius:)](uniformtopradius%28__bottomleftradius_bottomrightradius_%29.md): A configuration that applies the top radius you provide to the top corners, with optional independent radii for the bottom corners.
