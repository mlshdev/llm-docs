> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnfacegeometry](https://developer.apple.com/documentation/arkit/arscnfacegeometry)

# ARSCNFaceGeometry (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A SceneKit representation of face topology for use with face information that an AR session provides.

## Declaration

```swift
class ARSCNFaceGeometry
```

<a id="overview"></a>

## Overview

This class is a subclass of [SCNGeometry](../scenekit/scngeometry.md) that wraps the mesh data provided by the [ARFaceGeometry](arfacegeometry.md) class. You can use [ARSCNFaceGeometry](arscnfacegeometry.md) to quickly and easily visualize face topology and facial expressions provided by ARKit in a SceneKit view.

> **Important**

>  [ARSCNFaceGeometry](arscnfacegeometry.md) is available only in SceneKit views or renderers that use Metal. This class is not supported for OpenGL-based SceneKit rendering.

Face mesh topology is constant for the lifetime of an [ARSCNFaceGeometry](arscnfacegeometry.md) object. That is, the geometry’s single [SCNGeometryElement](../scenekit/scngeometryelement.md) object always describes the same arrangement of vertices, and the [texcoord](../scenekit/scngeometrysource/semantic-swift.struct/texcoord.md) geometry source always maps the same vertices to the same texture coordinates.

When you modify the geometry with the [update(from:)](arscnfacegeometry/update%28from_%29.md) method, only the contents of the [vertex](../scenekit/scngeometrysource/semantic-swift.struct/vertex.md) geometry source change, indicating the difference in vertex positions as ARKit adapts the mesh to the shape and expression of the user’s face.

## Topics

### Creating a Geometry

- [init(device:)](arscnfacegeometry/init%28device_%29.md): Creates a SceneKit face geometry for rendering with the specified Metal device object.
- [init(device:fillMesh:)](arscnfacegeometry/init%28device_fillmesh_%29.md): Creates a SceneKit face geometry, optionally filling in gaps in the mesh for the eyes and mouth.

### Updating the Geometry

- [update(from:)](arscnfacegeometry/update%28from_%29.md): Deforms the SceneKit geometry to match the specified face mesh.

### Initializers

- [init()](arscnfacegeometry/init%28%29.md)

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

### Face Data

- [Tracking and visualizing faces](tracking-and-visualizing-faces.md): Detect faces in a front-camera AR experience, overlay virtual content, and animate facial expressions in real-time.
- [Combining user face-tracking and world tracking](combining-user-face-tracking-and-world-tracking.md): Track the user’s face in an app that displays an AR experience with the rear camera.
- [ARFaceGeometry](arfacegeometry.md): A 3D mesh describing face topology for use in face-tracking AR sessions.

# ARSCNFaceGeometry (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A SceneKit representation of face topology for use with face information that an AR session provides.

## Declaration

```objectivec
@interface ARSCNFaceGeometry : SCNGeometry
```

<a id="overview"></a>

## Overview

This class is a subclass of [SCNGeometry](../scenekit/scngeometry.md) that wraps the mesh data provided by the [ARFaceGeometry](arfacegeometry.md) class. You can use [ARSCNFaceGeometry](arscnfacegeometry.md) to quickly and easily visualize face topology and facial expressions provided by ARKit in a SceneKit view.

> **Important**

>  [ARSCNFaceGeometry](arscnfacegeometry.md) is available only in SceneKit views or renderers that use Metal. This class is not supported for OpenGL-based SceneKit rendering.

Face mesh topology is constant for the lifetime of an [ARSCNFaceGeometry](arscnfacegeometry.md) object. That is, the geometry’s single [SCNGeometryElement](../scenekit/scngeometryelement.md) object always describes the same arrangement of vertices, and the [SCNGeometrySourceSemanticTexcoord](../scenekit/scngeometrysource/semantic-swift.struct/texcoord.md) geometry source always maps the same vertices to the same texture coordinates.

When you modify the geometry with the [updateFromFaceGeometry:](arscnfacegeometry/update%28from_%29.md) method, only the contents of the [SCNGeometrySourceSemanticVertex](../scenekit/scngeometrysource/semantic-swift.struct/vertex.md) geometry source change, indicating the difference in vertex positions as ARKit adapts the mesh to the shape and expression of the user’s face.

## Topics

### Creating a Geometry

- [faceGeometryWithDevice:](arscnfacegeometry/init%28device_%29.md): Creates a SceneKit face geometry for rendering with the specified Metal device object.
- [faceGeometryWithDevice:fillMesh:](arscnfacegeometry/init%28device_fillmesh_%29.md): Creates a SceneKit face geometry, optionally filling in gaps in the mesh for the eyes and mouth.

### Updating the Geometry

- [updateFromFaceGeometry:](arscnfacegeometry/update%28from_%29.md): Deforms the SceneKit geometry to match the specified face mesh.

## Relationships

### Inherits From

- [SCNGeometry](../scenekit/scngeometry.md)

## See Also

### Face Data

- [Tracking and visualizing faces](tracking-and-visualizing-faces.md): Detect faces in a front-camera AR experience, overlay virtual content, and animate facial expressions in real-time.
- [ARFaceGeometry](arfacegeometry.md): A 3D mesh describing face topology for use in face-tracking AR sessions.
