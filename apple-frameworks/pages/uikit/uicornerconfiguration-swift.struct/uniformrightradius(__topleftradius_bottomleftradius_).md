> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-swift.struct/uniformrightradius(_:topleftradius:bottomleftradius:)](https://developer.apple.com/documentation/uikit/uicornerconfiguration-swift.struct/uniformrightradius(_:topleftradius:bottomleftradius:))

# uniformRightRadius(\_:topLeftRadius:bottomLeftRadius:)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that applies the right radius you provide to the right corners, with optional independent radii for the left corners.

## Declaration

```swift
static func uniformRightRadius(_ rightRadius: UICornerRadius, topLeftRadius: UICornerRadius? = nil, bottomLeftRadius: UICornerRadius? = nil) -> UICornerConfiguration
```

## Parameters

- `rightRadius`: A [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-right and bottom-right corners.
- `topLeftRadius`: An optional [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the top-left corner.
- `bottomLeftRadius`: An optional [UICornerRadius](../uicornerradius-swift.struct.md) that represents the radius to use for the bottom-left corner.

## See Also

### Configuring uniform corners

- [uniformCorners(radius:)](uniformcorners%28radius_%29.md): A configuration that applies the given radius uniformly to all corners.
- [uniformEdges(leftRadius:rightRadius:)](uniformedges%28leftradius_rightradius_%29.md): A configuration that applies the left radius you provide to the left corners, and the right radius you provide to the right corners.
- [uniformEdges(topRadius:bottomRadius:)](uniformedges%28topradius_bottomradius_%29.md): A configuration that applies the top radius to the top corners, and the bottom radius you provide to the bottom corners.
- [uniformBottomRadius(\_:topLeftRadius:topRightRadius:)](uniformbottomradius%28__topleftradius_toprightradius_%29.md): A configuration that applies the radius you provide to the bottom corners, with optional independent radii for the top corners.
- [uniformLeftRadius(\_:topRightRadius:bottomRightRadius:)](uniformleftradius%28__toprightradius_bottomrightradius_%29.md): A configuration that applies the left radius to the left corners, with optional independent radii for the right corners.
- [uniformTopRadius(\_:bottomLeftRadius:bottomRightRadius:)](uniformtopradius%28__bottomleftradius_bottomrightradius_%29.md): A configuration that applies the top radius you provide to the top corners, with optional independent radii for the bottom corners.
