> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arlightestimate](https://developer.apple.com/documentation/arkit/arlightestimate)

# ARLightEstimate (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Estimated scene lighting information associated with a captured video frame in an AR session.

## Declaration

```swift
class ARLightEstimate
```

<a id="overview"></a>

## Overview

If you enable the [isLightEstimationEnabled](arconfiguration/islightestimationenabled.md) setting, ARKit provides light estimates in the [lightEstimate](arframe/lightestimate.md) property of each [ARFrame](arframe.md) it delivers.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. The [ARSCNView](arscnview.md) class automatically uses this information to configure SceneKit lighting.

## Topics

### Examining Light Parameters

- [ambientIntensity](arlightestimate/ambientintensity.md): The estimated intensity, in lumens, of ambient light throughout the scene.
- [ambientColorTemperature](arlightestimate/ambientcolortemperature.md): The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARDirectionalLightEstimate](ardirectionallightestimate.md)

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

### Lighting Effects

- [Adding realistic reflections to an AR experience](adding-realistic-reflections-to-an-ar-experience.md): Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md): An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.
- [ARDirectionalLightEstimate](ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.

# ARLightEstimate (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Estimated scene lighting information associated with a captured video frame in an AR session.

## Declaration

```objectivec
@interface ARLightEstimate : NSObject
```

<a id="overview"></a>

## Overview

If you enable the [lightEstimationEnabled](arconfiguration/islightestimationenabled.md) setting, ARKit provides light estimates in the [lightEstimate](arframe/lightestimate.md) property of each [ARFrame](arframe.md) it delivers.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. The [ARSCNView](arscnview.md) class automatically uses this information to configure SceneKit lighting.

## Topics

### Examining Light Parameters

- [ambientIntensity](arlightestimate/ambientintensity.md): The estimated intensity, in lumens, of ambient light throughout the scene.
- [ambientColorTemperature](arlightestimate/ambientcolortemperature.md): The estimated color temperature, in degrees Kelvin, of ambient light throughout the scene.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARDirectionalLightEstimate](ardirectionallightestimate.md)

## See Also

### Lighting Effects

- [Adding realistic reflections to an AR experience](adding-realistic-reflections-to-an-ar-experience.md): Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md): An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.
- [ARDirectionalLightEstimate](ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.
