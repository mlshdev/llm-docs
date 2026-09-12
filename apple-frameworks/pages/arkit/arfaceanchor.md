> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor](https://developer.apple.com/documentation/arkit/arfaceanchor)

# ARFaceAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An anchor for a unique face that is visible in the front-facing camera.

## Declaration

```swift
class ARFaceAnchor
```

## Mentioned In

- [Understanding World Tracking](understanding-world-tracking.md)

<a id="overview"></a>

## Overview

The session automatically adds to its list of anchors an ARFaceAnchor object when it detects a unique face in the front camera feed.

When you track faces using [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md), ARKit can track multiple faces simultaneously.

Alternatively, you can enable face tracking with a world tracking configuration by setting .

<a id="Tracking-Face-Position-and-Orientation"></a>

### Tracking Face Position and Orientation

The inherited [transform](aranchor/transform.md) property describes the face’s current position and orientation in world coordinates; that is, in a coordinate space relative to that specified by the [worldAlignment](arconfiguration/worldalignment-swift.property.md) property of the session configuration. Use this transform matrix to position virtual content you want to “attach” to the face in your AR scene.

This transform matrix creates a face coordinates system for positioning other elements relative to the face. Units of face coordinate space are in meters, with the origin centered behind the face as indicated in the figure below.

![Figure indicating the x/y/z coordinate system origin for face anchors, centered behind the face.](https://developer.apple.com/images/com.apple.arkit/media-3001545@2x.png)

The coordinate system is right-handed—the positive x direction points to the viewer’s right (that is, the face’s own left), the positive y direction points up (relative to the face itself, not to the world), and the positive z direction points outward from the face (toward the viewer).

<a id="Using-Face-Topology"></a>

### Using Face Topology

The [geometry](arfaceanchor/geometry.md) property provides an [ARFaceGeometry](arfacegeometry.md) object representing detailed topology for the face, which conforms a generic face model to match the dimensions, shape, and current expression of the detected face.

You can use this model as the basis for overlaying content that follows the shape of the user’s face—for example, to apply virtual makeup or tattoos. You can also use this model to create *occlusion geometry*—a 3D model that doesn’t render any visible content (allowing the camera image to show through), but that obstructs the camera’s view of other virtual content in the scene.

<a id="Tracking-Facial-Expressions"></a>

### Tracking Facial Expressions

The [blendShapes](arfaceanchor/blendshapes.md) property provides a high-level model of the current facial expression, described via a series of many named coefficients that represent the movement of specific facial features relative to their neutral configurations. You can use blend shape coefficients to animate 2D or 3D content, such as a character or avatar, in ways that follow the user’s facial expressions.

## Topics

### Using Face Geometry

- [geometry](arfaceanchor/geometry.md): A coarse triangle mesh representing the topology of the detected face.

### Using Blend Shapes

- [blendShapes](arfaceanchor/blendshapes.md): A dictionary of named coefficients representing the detected facial expression in terms of the movement of specific facial features.
- [ARFaceAnchor.BlendShapeLocation](arfaceanchor/blendshapelocation.md): Identifiers for specific facial features, for use with coefficients describing the relative movements of those features.

### Tracking Eye Movement

- [leftEyeTransform](arfaceanchor/lefteyetransform.md): A transform matrix indicating the position and orientation of the face’s left eye.
- [rightEyeTransform](arfaceanchor/righteyetransform.md): A transform matrix indicating the position and orientation of the face’s right eye.
- [lookAtPoint](arfaceanchor/lookatpoint.md): A position in face coordinate space estimating the direction of the face’s gaze.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [ARTrackable](artrackable.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Face Tracking

- [Tracking and visualizing faces](tracking-and-visualizing-faces.md): Detect faces in a front-camera AR experience, overlay virtual content, and animate facial expressions in real-time.
- [Combining user face-tracking and world tracking](combining-user-face-tracking-and-world-tracking.md): Track the user’s face in an app that displays an AR experience with the rear camera.

# ARFaceAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An anchor for a unique face that is visible in the front-facing camera.

## Declaration

```objectivec
@interface ARFaceAnchor : ARAnchor
```

## Mentioned In

- [Understanding World Tracking](understanding-world-tracking.md)

<a id="overview"></a>

## Overview

The session automatically adds to its list of anchors an ARFaceAnchor object when it detects a unique face in the front camera feed.

When you track faces using [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md), ARKit can track multiple faces simultaneously.

Alternatively, you can enable face tracking with a world tracking configuration by setting .

<a id="Tracking-Face-Position-and-Orientation"></a>

### Tracking Face Position and Orientation

The inherited [transform](aranchor/transform.md) property describes the face’s current position and orientation in world coordinates; that is, in a coordinate space relative to that specified by the [worldAlignment](arconfiguration/worldalignment-swift.property.md) property of the session configuration. Use this transform matrix to position virtual content you want to “attach” to the face in your AR scene.

This transform matrix creates a face coordinates system for positioning other elements relative to the face. Units of face coordinate space are in meters, with the origin centered behind the face as indicated in the figure below.

![Figure indicating the x/y/z coordinate system origin for face anchors, centered behind the face.](https://developer.apple.com/images/com.apple.arkit/media-3001545@2x.png)

The coordinate system is right-handed—the positive x direction points to the viewer’s right (that is, the face’s own left), the positive y direction points up (relative to the face itself, not to the world), and the positive z direction points outward from the face (toward the viewer).

<a id="Using-Face-Topology"></a>

### Using Face Topology

The [geometry](arfaceanchor/geometry.md) property provides an [ARFaceGeometry](arfacegeometry.md) object representing detailed topology for the face, which conforms a generic face model to match the dimensions, shape, and current expression of the detected face.

You can use this model as the basis for overlaying content that follows the shape of the user’s face—for example, to apply virtual makeup or tattoos. You can also use this model to create *occlusion geometry*—a 3D model that doesn’t render any visible content (allowing the camera image to show through), but that obstructs the camera’s view of other virtual content in the scene.

<a id="Tracking-Facial-Expressions"></a>

### Tracking Facial Expressions

The [blendShapes](arfaceanchor/blendshapes.md) property provides a high-level model of the current facial expression, described via a series of many named coefficients that represent the movement of specific facial features relative to their neutral configurations. You can use blend shape coefficients to animate 2D or 3D content, such as a character or avatar, in ways that follow the user’s facial expressions.

## Topics

### Using Face Geometry

- [geometry](arfaceanchor/geometry.md): A coarse triangle mesh representing the topology of the detected face.

### Using Blend Shapes

- [blendShapes](arfaceanchor/blendshapes.md): A dictionary of named coefficients representing the detected facial expression in terms of the movement of specific facial features.
- [ARBlendShapeLocation](arfaceanchor/blendshapelocation.md): Identifiers for specific facial features, for use with coefficients describing the relative movements of those features.

### Tracking Eye Movement

- [leftEyeTransform](arfaceanchor/lefteyetransform.md): A transform matrix indicating the position and orientation of the face’s left eye.
- [rightEyeTransform](arfaceanchor/righteyetransform.md): A transform matrix indicating the position and orientation of the face’s right eye.
- [lookAtPoint](arfaceanchor/lookatpoint.md): A position in face coordinate space estimating the direction of the face’s gaze.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARTrackable](artrackable.md)

## See Also

### Face Tracking

- [Tracking and visualizing faces](tracking-and-visualizing-faces.md): Detect faces in a front-camera AR experience, overlay virtual content, and animate facial expressions in real-time.
