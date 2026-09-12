> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arpositionaltrackingconfiguration](https://developer.apple.com/documentation/arkit/arpositionaltrackingconfiguration)

# ARPositionalTrackingConfiguration (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A configuration that tracks only the device’s position in 3D space.

## Declaration

```swift
class ARPositionalTrackingConfiguration
```

<a id="overview"></a>

## Overview

Enables 6 degrees of freedom tracking of the iOS device by running the camera at lowest possible resolution and frame rate. Use this configuration when you don’t need to parse the camera feed, such as for example, virtual reality scenarios.

## Topics

### Creating a Configuration

- [init()](arpositionaltrackingconfiguration/init%28%29.md): Creates a new positional tracking configuration.
- [initialWorldMap](arpositionaltrackingconfiguration/initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

### Detecting Real-World Surfaces

- [planeDetection](arpositionaltrackingconfiguration/planedetection.md): A value that specifies if and how the session automatically attempts to detect flat surfaces in the camera-captured image.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Spatial Tracking

- [Understanding World Tracking](understanding-world-tracking.md): Discover features and best practices for building rear-camera AR experiences.
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md): A configuration that tracks the position of a device in relation to objects in the environment.
- [ARGeoTrackingConfiguration](argeotrackingconfiguration.md): A configuration that tracks locations with GPS, map data, and a device’s compass.
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md): A configuration that tracks only the device’s orientation using the rear-facing camera.

# ARPositionalTrackingConfiguration (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A configuration that tracks only the device’s position in 3D space.

## Declaration

```objectivec
@interface ARPositionalTrackingConfiguration : ARConfiguration
```

<a id="overview"></a>

## Overview

Enables 6 degrees of freedom tracking of the iOS device by running the camera at lowest possible resolution and frame rate. Use this configuration when you don’t need to parse the camera feed, such as for example, virtual reality scenarios.

## Topics

### Creating a Configuration

- [init](arpositionaltrackingconfiguration/init%28%29.md): Creates a new positional tracking configuration.
- [new](arpositionaltrackingconfiguration/new.md): Creates a new positional tracking configuration.
- [initialWorldMap](arpositionaltrackingconfiguration/initialworldmap.md): The state from a previous AR session to attempt to resume with this session configuration.

### Detecting Real-World Surfaces

- [planeDetection](arpositionaltrackingconfiguration/planedetection.md): A value that specifies if and how the session automatically attempts to detect flat surfaces in the camera-captured image.

## Relationships

### Inherits From

- [ARConfiguration](arconfiguration.md)

## See Also

### Spatial Tracking

- [Understanding World Tracking](understanding-world-tracking.md): Discover features and best practices for building rear-camera AR experiences.
- [ARWorldTrackingConfiguration](arworldtrackingconfiguration.md): A configuration that tracks the position of a device in relation to objects in the environment.
- [ARGeoTrackingConfiguration](argeotrackingconfiguration.md): A configuration that tracks locations with GPS, map data, and a device’s compass.
- [AROrientationTrackingConfiguration](arorientationtrackingconfiguration.md): A configuration that tracks only the device’s orientation using the rear-facing camera.
