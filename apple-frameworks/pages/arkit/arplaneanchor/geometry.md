> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/geometry](https://developer.apple.com/documentation/arkit/arplaneanchor/geometry)

# geometry (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A coarse triangle mesh representing the general shape of the detected plane.

## Declaration

```swift
var geometry: ARPlaneGeometry { get }
```

<a id="Discussion"></a>

## Discussion

This mesh provides vertex, index, and texture coordinate buffers describing the estimated 2D footprint of the plane.

You can visualize the plane geometry by passing these buffers to your preferred rendering engine. To visualize a plane geometry using SceneKit, create an [ARSCNPlaneGeometry](../arscnplanegeometry.md) instance and use its [update(from:)](../arscnplanegeometry/update%28from_%29.md) method to update it to match the plane geometry.

## See Also

### Geometry

- [ARPlaneGeometry](../arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.
- [ARSCNPlaneGeometry](../arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

# geometry (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A coarse triangle mesh representing the general shape of the detected plane.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARPlaneGeometry * geometry;
```

<a id="Discussion"></a>

## Discussion

This mesh provides vertex, index, and texture coordinate buffers describing the estimated 2D footprint of the plane.

You can visualize the plane geometry by passing these buffers to your preferred rendering engine. To visualize a plane geometry using SceneKit, create an [ARSCNPlaneGeometry](../arscnplanegeometry.md) instance and use its [updateFromPlaneGeometry:](../arscnplanegeometry/update%28from_%29.md) method to update it to match the plane geometry.

## See Also

### Geometry

- [ARPlaneGeometry](../arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.
- [ARSCNPlaneGeometry](../arscnplanegeometry.md): A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.
