> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardepthdata](https://developer.apple.com/documentation/arkit/ardepthdata)

# ARDepthData (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An object that describes the distance to regions of the real world from the plane of the camera.

## Declaration

```swift
class ARDepthData
```

<a id="overview"></a>

## Overview

This object contains the following depth information that the LiDAR scanner captures at runtime:

- Every pixel in the [depthMap](ardepthdata/depthmap.md) maps to a region of the visible scene ([capturedImage](arframe/capturedimage.md)), where the pixel value defines that region’s distance from the plane of the camera in meters.
- The [confidenceMap](ardepthdata/confidencemap.md) property measures the accuracy of the corresponding depth data in [depthMap](ardepthdata/depthmap.md), and is useful in filtering out lower-accuracy depth values if an app’s algorithm required it.

[ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) exposes this depth information in the [sceneDepth](arframe/scenedepth.md) property which it updates every frame. To enable scene depth, add the [sceneDepth](arconfiguration/framesemantics-swift.struct/scenedepth.md) frame semantic to a world-tracking configuration’s [frameSemantics](arconfiguration/framesemantics-swift.property.md) and frames vended by the session contain [ARDepthData](ardepthdata.md) captured by the LiDAR scanner.

## Topics

### Depth Information

- [depthMap](ardepthdata/depthmap.md): The estimated distance from the device to its environment, in meters.
- [confidenceMap](ardepthdata/confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.
- [ARConfidenceLevel](arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video Frame Analysis

- [Displaying a point cloud using scene depth](displaying-a-point-cloud-using-scene-depth.md): Present a visualization of the physical environment by placing points based a scene’s depth data.
- [Creating a fog effect using scene depth](creating-a-fog-effect-using-scene-depth.md): Apply virtual fog to the physical environment.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [ARPointCloud](arpointcloud.md): A collection of points in the world coordinate space of the AR session.

# ARDepthData (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+

An object that describes the distance to regions of the real world from the plane of the camera.

## Declaration

```objectivec
@interface ARDepthData : NSObject
```

<a id="overview"></a>

## Overview

This object contains the following depth information that the LiDAR scanner captures at runtime:

- Every pixel in the [depthMap](ardepthdata/depthmap.md) maps to a region of the visible scene ([capturedImage](arframe/capturedimage.md)), where the pixel value defines that region’s distance from the plane of the camera in meters.
- The [confidenceMap](ardepthdata/confidencemap.md) property measures the accuracy of the corresponding depth data in [depthMap](ardepthdata/depthmap.md), and is useful in filtering out lower-accuracy depth values if an app’s algorithm required it.

[ARWorldTrackingConfiguration](arworldtrackingconfiguration.md) exposes this depth information in the [sceneDepth](arframe/scenedepth.md) property which it updates every frame. To enable scene depth, add the [ARFrameSemanticSceneDepth](arconfiguration/framesemantics-swift.struct/scenedepth.md) frame semantic to a world-tracking configuration’s [frameSemantics](arconfiguration/framesemantics-swift.property.md) and frames vended by the session contain [ARDepthData](ardepthdata.md) captured by the LiDAR scanner.

## Topics

### Depth Information

- [depthMap](ardepthdata/depthmap.md): The estimated distance from the device to its environment, in meters.
- [confidenceMap](ardepthdata/confidencemap.md): The framework’s confidence in the accuracy of the depth-map data.
- [ARConfidenceLevel](arconfidencelevel.md): Degrees to which the framework is confident about depth-data accuracy.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Video Frame Analysis

- [Displaying a point cloud using scene depth](displaying-a-point-cloud-using-scene-depth.md): Present a visualization of the physical environment by placing points based a scene’s depth data.
- [Creating a fog effect using scene depth](creating-a-fog-effect-using-scene-depth.md): Apply virtual fog to the physical environment.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [ARPointCloud](arpointcloud.md): A collection of points in the world coordinate space of the AR session.
