> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlevelofdetail](https://developer.apple.com/documentation/scenekit/scnlevelofdetail)

# SCNLevelOfDetail (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.

## Declaration

```swift
class SCNLevelOfDetail
```

<a id="overview"></a>

## Overview

You use level-of-detail objects when you have a detailed geometry that appears at several apparent sizes in a scene. For example, the teapot model on the the left in the figure below has 256 polygons, the model at center has 1024 polygons, and the model on the right has 14,400 polygons. If all three models appear close to the camera, filling most of the rendered view, the difference in detail between them is clearly visible—but if they appear far away, taking up a small area of the view, the difference is much less obvious. Rendering higher-resolution geometries incurs a higher performance cost.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929784@2x.png)

When you associate one or more level-of-detail objects with a [SCNGeometry](scngeometry.md) object using its [levelsOfDetail](scngeometry/levelsofdetail.md) property, SceneKit automatically substitutes alternate geometries when appropriate. For example, the two lower-resolution teapot models seen above can be added as levels of detail for the high-resolution model.

For each level of detail, you specify either a world-space distance or a screen-space radius. The measure you specify determines the threshold where SceneKit automatically renders that level of detail’s alternate geometry instead of the original geometry. If you specify a distance, the alternate geometry appears when the node containing the geometry is moved that distance away from the camera. If you specify a radius, the alternate geometry appears when the pixel area covered by the rendered geometry is smaller than a circle of that radius.

The geometries associated with lower levels of detail need not share all attributes of the original geometry. For example, you can use different materials for levels of detail that only appear when far away from the camera, disabling expensive features such as per-pixel lighting, reflection mapping, or custom shader programs.

## Topics

### Creating a Level of Detail

- [init(geometry:screenSpaceRadius:)](scnlevelofdetail/init%28geometry_screenspaceradius_%29.md): Creates a level of detail with the specified geometry and threshold pixel radius.
- [init(geometry:worldSpaceDistance:)](scnlevelofdetail/init%28geometry_worldspacedistance_%29.md): Creates a level of detail with the specified geometry and threshold camera distance.

### Inspecting a Level of Detail

- [geometry](scnlevelofdetail/geometry.md): The geometry associated with this level of detail.
- [screenSpaceRadius](scnlevelofdetail/screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.
- [worldSpaceDistance](scnlevelofdetail/worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.

### Initializers

- [init(coder:)](scnlevelofdetail/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Optimizing Level of Detail

- [levelsOfDetail](scngeometry/levelsofdetail.md): An array of [SCNLevelOfDetail](scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.

# SCNLevelOfDetail (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An alternate resolution for a geometry that SceneKit automatically substitutes to improve rendering performance.

## Declaration

```objectivec
@interface SCNLevelOfDetail : NSObject
```

<a id="overview"></a>

## Overview

You use level-of-detail objects when you have a detailed geometry that appears at several apparent sizes in a scene. For example, the teapot model on the the left in the figure below has 256 polygons, the model at center has 1024 polygons, and the model on the right has 14,400 polygons. If all three models appear close to the camera, filling most of the rendered view, the difference in detail between them is clearly visible—but if they appear far away, taking up a small area of the view, the difference is much less obvious. Rendering higher-resolution geometries incurs a higher performance cost.

![](https://developer.apple.com/images/com.apple.scenekit/media-2929784@2x.png)

When you associate one or more level-of-detail objects with a [SCNGeometry](scngeometry.md) object using its [levelsOfDetail](scngeometry/levelsofdetail.md) property, SceneKit automatically substitutes alternate geometries when appropriate. For example, the two lower-resolution teapot models seen above can be added as levels of detail for the high-resolution model.

For each level of detail, you specify either a world-space distance or a screen-space radius. The measure you specify determines the threshold where SceneKit automatically renders that level of detail’s alternate geometry instead of the original geometry. If you specify a distance, the alternate geometry appears when the node containing the geometry is moved that distance away from the camera. If you specify a radius, the alternate geometry appears when the pixel area covered by the rendered geometry is smaller than a circle of that radius.

The geometries associated with lower levels of detail need not share all attributes of the original geometry. For example, you can use different materials for levels of detail that only appear when far away from the camera, disabling expensive features such as per-pixel lighting, reflection mapping, or custom shader programs.

## Topics

### Creating a Level of Detail

- [levelOfDetailWithGeometry:screenSpaceRadius:](scnlevelofdetail/init%28geometry_screenspaceradius_%29.md): Creates a level of detail with the specified geometry and threshold pixel radius.
- [levelOfDetailWithGeometry:worldSpaceDistance:](scnlevelofdetail/init%28geometry_worldspacedistance_%29.md): Creates a level of detail with the specified geometry and threshold camera distance.

### Inspecting a Level of Detail

- [geometry](scnlevelofdetail/geometry.md): The geometry associated with this level of detail.
- [screenSpaceRadius](scnlevelofdetail/screenspaceradius.md): The maximum radius (in pixels) of the geometry’s bounding sphere for this level of detail to appear.
- [worldSpaceDistance](scnlevelofdetail/worldspacedistance.md): The minimum distance from the current point of view for this level of detail to appear.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Optimizing Level of Detail

- [levelsOfDetail](scngeometry/levelsofdetail.md): An array of [SCNLevelOfDetail](scnlevelofdetail.md) objects for managing the geometry’s appearance when viewed from far away.
