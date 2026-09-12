> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera](https://developer.apple.com/documentation/arkit/arcamera)

# ARCamera (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Information about the camera position and imaging characteristics for a given frame.

## Declaration

```swift
class ARCamera
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)
- [Understanding World Tracking](understanding-world-tracking.md)

<a id="overview"></a>

## Overview

You get camera information from the [camera](arframe/camera.md) property of each [ARFrame](arframe.md) ARKit delivers.

## Topics

### Handling Tracking Status

- [trackingState](arcamera/trackingstate-6i3pt.md): The general quality of position tracking available when the camera captured a frame.
- [ARCamera.TrackingState](arcamera/trackingstate-swift.enum.md): Values for position tracking quality, with possible causes when tracking quality is limited.

### Examining Camera Geometry

- [transform](arcamera/transform.md): The position and orientation of the camera in world coordinate space.
- [eulerAngles](arcamera/eulerangles.md): The orientation of the camera, expressed as roll, pitch, and yaw values.

### Examining Imaging Parameters

- [imageResolution](arcamera/imageresolution.md): The width and height, in pixels, of the captured camera image.
- [intrinsics](arcamera/intrinsics.md): A matrix that converts between the 2D camera plane and 3D world coordinate space.

### Applying Camera Geometry

- [projectionMatrix](arcamera/projectionmatrix.md): A transform matrix appropriate for rendering 3D content to match the image captured by the camera.
- [unprojectPoint(\_:ontoPlane:orientation:viewportSize:)](arcamera/unprojectpoint%28__ontoplane_orientation_viewportsize_%29.md): Deprecated. Returns the projection of a point from the 2D space of a view rendering the scene onto a plane in the 3D world space detected by ARKit.

### Applying Motion Blur

- [exposureDuration](arcamera/exposureduration.md): A value you use to effect motion blur when rendering your app’s virtual content.

### Applying Post-Processed Lighting

- [exposureOffset](arcamera/exposureoffset.md): A value you supply to your custom renderer to light your scene.

### Instance Methods

- [projectPoint(\_:viewRotationAngle:viewportSize:)](arcamera/projectpoint%28__viewrotationangle_viewportsize_%29.md): Project a 3D point in world coordinate system into 2D viewport space.
- [projectionMatrix(viewRotationAngle:viewportSize:zNear:zFar:)](arcamera/projectionmatrix%28viewrotationangle_viewportsize_znear_zfar_%29.md): Creates a projection matrix for the camera given rendering parameters.
- [unprojectPoint(\_:ontoPlane:viewRotationAngle:viewportSize:)](arcamera/unprojectpoint%28__ontoplane_viewrotationangle_viewportsize_%29.md): Unprojects a 2D point in image space onto a 3D plane in world space.
- [viewMatrix(viewRotationAngle:)](arcamera/viewmatrix%28viewrotationangle_%29.md): Returns the view matrix for the camera with a given view angle.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# ARCamera (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Information about the camera position and imaging characteristics for a given frame.

## Declaration

```objectivec
@interface ARCamera : NSObject
```

## Mentioned In

- [Managing Session Life Cycle and Tracking Quality](managing-session-life-cycle-and-tracking-quality.md)
- [Understanding World Tracking](understanding-world-tracking.md)

<a id="overview"></a>

## Overview

You get camera information from the [camera](arframe/camera.md) property of each [ARFrame](arframe.md) ARKit delivers.

## Topics

### Handling Tracking Status

- [trackingState](arcamera/trackingstate-9pgmq.md): The general quality of position tracking available when the camera captured a frame.
- [ARTrackingState](artrackingstate.md): Possible values for position-tracking quality.
- [trackingStateReason](arcamera/trackingstatereason.md): A possible diagnosis for limited position-tracking quality as of when the camera captured a frame.
- [ARTrackingStateReason](artrackingstatereason.md): Possible causes for limited position-tracking quality.

### Examining Camera Geometry

- [transform](arcamera/transform.md): The position and orientation of the camera in world coordinate space.
- [eulerAngles](arcamera/eulerangles.md): The orientation of the camera, expressed as roll, pitch, and yaw values.

### Examining Imaging Parameters

- [imageResolution](arcamera/imageresolution.md): The width and height, in pixels, of the captured camera image.
- [intrinsics](arcamera/intrinsics.md): A matrix that converts between the 2D camera plane and 3D world coordinate space.

### Applying Camera Geometry

- [projectionMatrix](arcamera/projectionmatrix.md): A transform matrix appropriate for rendering 3D content to match the image captured by the camera.
- [unprojectPoint:ontoPlaneWithTransform:orientation:viewportSize:](arcamera/unprojectpoint_ontoplanewithtransform_orientation_viewportsize_.md): Deprecated. Returns the projection of a point from the 2D space of a view rendering the scene onto a plane in the 3D world space detected by ARKit.

### Applying Motion Blur

- [exposureDuration](arcamera/exposureduration.md): A value you use to effect motion blur when rendering your app’s virtual content.

### Applying Post-Processed Lighting

- [exposureOffset](arcamera/exposureoffset.md): A value you supply to your custom renderer to light your scene.

### Instance Methods

- [projectPoint:viewRotationAngle:viewportSize:](arcamera/projectpoint%28__viewrotationangle_viewportsize_%29.md): Project a 3D point in world coordinate system into 2D viewport space.
- [projectPoint:orientation:viewportSize:](arcamera/projectpoint_orientation_viewportsize_.md): Deprecated. Project a 3D point in world coordinate system into 2D viewport space.
- [projectionMatrixForViewRotationAngle:viewportSize:zNear:zFar:](arcamera/projectionmatrix%28viewrotationangle_viewportsize_znear_zfar_%29.md): Creates a projection matrix for the camera given rendering parameters.
- [projectionMatrixForOrientation:viewportSize:zNear:zFar:](arcamera/projectionmatrixfororientation_viewportsize_znear_zfar_.md): Deprecated. Creates a projection matrix for the camera given rendering parameters.
- [unprojectPoint:ontoPlaneWithTransform:viewRotationAngle:viewportSize:](arcamera/unprojectpoint_ontoplanewithtransform_viewrotationangle_viewportsize_.md): Unproject a 2D point from the viewport onto a plane in 3D world coordinates.
- [viewMatrixForViewRotationAngle:](arcamera/viewmatrix%28viewrotationangle_%29.md): Returns the view matrix for the camera with a given view angle.
- [viewMatrixForOrientation:](arcamera/viewmatrixfororientation_.md): Deprecated. Returns the view matrix for the camera with a given interface orientation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
