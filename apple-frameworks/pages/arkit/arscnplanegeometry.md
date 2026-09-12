> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnplanegeometry](https://developer.apple.com/documentation/arkit/arscnplanegeometry)

# ARSCNPlaneGeometry (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

## Declaration

```swift
class ARSCNPlaneGeometry
```

<a id="overview"></a>

## Overview

[ARSCNPlaneGeometry](arscnplanegeometry.md) is a subclass of [SCNGeometry](../scenekit/scngeometry.md) that wraps the mesh data provided by the [ARPlaneGeometry](arplanegeometry.md) class. You can use [ARSCNPlaneGeometry](arscnplanegeometry.md) to visualize the plane shape estimates provided by ARKit in a SceneKit view.

> **Important**

>  [ARSCNPlaneGeometry](arscnplanegeometry.md) is available only in SceneKit views or renderers that use Metal. This class is not supported for OpenGL-based SceneKit rendering.

As your AR session continues to run, ARKit provides refined estimates of a detected plane’s 2D shape. Use the [update(from:)](arscnplanegeometry/update%28from_%29.md) method to incorporate those refinements into the plane’s SceneKit representation.

## Topics

### Creating a Geometry

- [init(device:)](arscnplanegeometry/init%28device_%29.md): Creates a SceneKit plane geometry for rendering with the specified Metal device object.

### Updating the Geometry

- [update(from:)](arscnplanegeometry/update%28from_%29.md): Reshapes the SceneKit geometry to match the specified plane mesh.

## Relationships

### Inherits From

- [SCNGeometry](../scenekit/scngeometry.md)

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
- [SCNAnimatable](../scenekit/scnanimatable.md)
- [SCNBoundingVolume](../scenekit/scnboundingvolume.md)
- [SCNShadable](../scenekit/scnshadable.md)

## See Also

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARPlaneGeometry](arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.

# ARSCNPlaneGeometry (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+

A SceneKit representation of the 2D shape of a plane, for use with plane detection results in an AR session.

## Declaration

```objectivec
@interface ARSCNPlaneGeometry : SCNGeometry
```

<a id="overview"></a>

## Overview

[ARSCNPlaneGeometry](arscnplanegeometry.md) is a subclass of [SCNGeometry](../scenekit/scngeometry.md) that wraps the mesh data provided by the [ARPlaneGeometry](arplanegeometry.md) class. You can use [ARSCNPlaneGeometry](arscnplanegeometry.md) to visualize the plane shape estimates provided by ARKit in a SceneKit view.

> **Important**

>  [ARSCNPlaneGeometry](arscnplanegeometry.md) is available only in SceneKit views or renderers that use Metal. This class is not supported for OpenGL-based SceneKit rendering.

As your AR session continues to run, ARKit provides refined estimates of a detected plane’s 2D shape. Use the [updateFromPlaneGeometry:](arscnplanegeometry/update%28from_%29.md) method to incorporate those refinements into the plane’s SceneKit representation.

## Topics

### Creating a Geometry

- [planeGeometryWithDevice:](arscnplanegeometry/init%28device_%29.md): Creates a SceneKit plane geometry for rendering with the specified Metal device object.

### Updating the Geometry

- [updateFromPlaneGeometry:](arscnplanegeometry/update%28from_%29.md): Reshapes the SceneKit geometry to match the specified plane mesh.

## Relationships

### Inherits From

- [SCNGeometry](../scenekit/scngeometry.md)

## See Also

### Geometry

- [geometry](arplaneanchor/geometry.md): A coarse triangle mesh representing the general shape of the detected plane.
- [ARPlaneGeometry](arplanegeometry.md): A 3D mesh describing the shape of a detected plane in world-tracking AR sessions.
