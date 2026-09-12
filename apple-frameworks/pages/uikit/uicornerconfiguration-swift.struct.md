> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicornerconfiguration-swift.struct](https://developer.apple.com/documentation/uikit/uicornerconfiguration-swift.struct)

# UICornerConfiguration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

A configuration that defines how corner radii are mapped to the corners of a rectangle.

## Declaration

```swift
struct UICornerConfiguration
```

<a id="overview"></a>

## Overview

Create a `UICornerConfiguration` that expresses how you want the corners of your view to appear. Your configuration can apply to corners independently or uniformly, and can form the following types of corners:

- A squared corner
- A rounded corner
- A rounded corner that’s concentric relative to the containing view
- Corners that are rounded to form a capsule

Select a method to create a configuration that describes which corners of your view you want to be uniform and which corners you want to be independent, then provide instances of [UICornerRadius](uicornerradius-swift.struct.md) as parameters to indicate which type you want each corner to be.

The system uses squared corners by default, so you don’t need to set a configuration to get squared corners.

<a id="Configure-a-rounded-corner"></a>

### Configure a rounded corner

To configure a rounded corner with a fixed radius, provide [fixed(\_:)](uicornerradius-swift.struct/fixed%28__%29.md) with a value greater than zero for the radius. Since `UICornerRadius` conforms to `ExpressibleByFloatLiteral` and `ExpressibleByIntegerLiteral`, you can also provide a float or integer value for the radius:

```swift
myView.cornerConfiguration = .corners(radius: 12.0)
```

<a id="Configure-a-concentric-rounded-corner"></a>

### Configure a concentric rounded corner

To configure a rounded corner that’s concentric relative to the containing view, use [containerConcentric(minimum:)](uicornerradius-swift.struct/containerconcentric%28minimum_%29.md):

```swift
myView.cornerConfiguration = .corners(radius: .containerConcentric())
```

Set the `minimum` parameter to indicate a minimum radius for the rounded corner.

<a id="Configure-a-corner-as-a-capsule"></a>

### Configure a corner as a capsule

To configure rounded corners that form a capsule, use [capsule(maximumRadius:)](uicornerconfiguration-swift.struct/capsule%28maximumradius_%29.md):

```swift
myView.cornerConfiguration = .capsule()
```

Set the `maximumRadius` parameter to allow your view to break the capsule paradigm and stretch vertically with an edge if the radius necessary to form a capsule exceeds what you provide.

## Topics

### Configuring independent corners

- [corners(radius:)](uicornerconfiguration-swift.struct/corners%28radius_%29.md): A configuration that applies the given radius independently to all corners.
- [corners(topLeftRadius:topRightRadius:bottomLeftRadius:bottomRightRadius:)](uicornerconfiguration-swift.struct/corners%28topleftradius_toprightradius_bottomleftradius_bottomrightradius_%29.md): A configuration with independent radii for each corner.

### Configuring corners as a capsule

- [capsule(maximumRadius:)](uicornerconfiguration-swift.struct/capsule%28maximumradius_%29.md): A configuration that rounds the corners into a capsule shape, scaling with the view’s size up to the maximum radius you provide.

### Configuring uniform corners

- [uniformCorners(radius:)](uicornerconfiguration-swift.struct/uniformcorners%28radius_%29.md): A configuration that applies the given radius uniformly to all corners.
- [uniformEdges(leftRadius:rightRadius:)](uicornerconfiguration-swift.struct/uniformedges%28leftradius_rightradius_%29.md): A configuration that applies the left radius you provide to the left corners, and the right radius you provide to the right corners.
- [uniformEdges(topRadius:bottomRadius:)](uicornerconfiguration-swift.struct/uniformedges%28topradius_bottomradius_%29.md): A configuration that applies the top radius to the top corners, and the bottom radius you provide to the bottom corners.
- [uniformBottomRadius(\_:topLeftRadius:topRightRadius:)](uicornerconfiguration-swift.struct/uniformbottomradius%28__topleftradius_toprightradius_%29.md): A configuration that applies the radius you provide to the bottom corners, with optional independent radii for the top corners.
- [uniformLeftRadius(\_:topRightRadius:bottomRightRadius:)](uicornerconfiguration-swift.struct/uniformleftradius%28__toprightradius_bottomrightradius_%29.md): A configuration that applies the left radius to the left corners, with optional independent radii for the right corners.
- [uniformRightRadius(\_:topLeftRadius:bottomLeftRadius:)](uicornerconfiguration-swift.struct/uniformrightradius%28__topleftradius_bottomleftradius_%29.md): A configuration that applies the right radius you provide to the right corners, with optional independent radii for the left corners.
- [uniformTopRadius(\_:bottomLeftRadius:bottomRightRadius:)](uicornerconfiguration-swift.struct/uniformtopradius%28__bottomleftradius_bottomrightradius_%29.md): A configuration that applies the top radius you provide to the top corners, with optional independent radii for the bottom corners.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Configuring a view’s corners

- [cornerConfiguration](uiview/cornerconfiguration-7l0ja.md): A configuration that defines the corners of the view.
- [UICornerRadius](uicornerradius-swift.struct.md): A type that represents the radius the system uses to round a corner.
- [effectiveRadius(corner:)](uiview/effectiveradius%28corner_%29.md): Returns the effective radius for the corner you provide, calculated using the view’s current corner configuration.
