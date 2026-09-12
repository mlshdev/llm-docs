> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arpointcloud](https://developer.apple.com/documentation/arkit/arpointcloud)

# ARPointCloud (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A collection of points in the world coordinate space of the AR session.

## Declaration

```swift
class ARPointCloud
```

<a id="overview"></a>

## Overview

Use the [ARFrame](arframe.md) [rawFeaturePoints](arframe/rawfeaturepoints.md) property to obtain a point cloud representing intermediate results of the scene analysis ARKit uses to perform world tracking.

## Topics

### Identifying Feature Points

- [points](arpointcloud/points-4vkif.md): The list of detected points.
- [identifiers](arpointcloud/identifiers-508tf.md): A list of unique identifiers corresponding to detected feature points.

### Initializers

- [init(coder:)](arpointcloud/init%28coder_%29.md)

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
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Video Frame Analysis

- [Displaying a point cloud using scene depth](displaying-a-point-cloud-using-scene-depth.md): Present a visualization of the physical environment by placing points based a scene’s depth data.
- [Creating a fog effect using scene depth](creating-a-fog-effect-using-scene-depth.md): Apply virtual fog to the physical environment.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [ARDepthData](ardepthdata.md): An object that describes the distance to regions of the real world from the plane of the camera.

# ARPointCloud (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

A collection of points in the world coordinate space of the AR session.

## Declaration

```objectivec
@interface ARPointCloud : NSObject
```

<a id="overview"></a>

## Overview

Use the [ARFrame](arframe.md) [rawFeaturePoints](arframe/rawfeaturepoints.md) property to obtain a point cloud representing intermediate results of the scene analysis ARKit uses to perform world tracking.

## Topics

### Identifying Feature Points

- [count](arpointcloud/count.md): The number of points in the point cloud.
- [points](arpointcloud/points-7mppp.md): The list of detected points.
- [identifiers](arpointcloud/identifiers-7p42c.md): A list of unique identifiers corresponding to detected feature points.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Video Frame Analysis

- [Displaying a point cloud using scene depth](displaying-a-point-cloud-using-scene-depth.md): Present a visualization of the physical environment by placing points based a scene’s depth data.
- [Creating a fog effect using scene depth](creating-a-fog-effect-using-scene-depth.md): Apply virtual fog to the physical environment.
- [ARFrame](arframe.md): A video image captured as part of a session with position-tracking information.
- [ARDepthData](ardepthdata.md): An object that describes the distance to regions of the real world from the plane of the camera.
