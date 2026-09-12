> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/ardirectionallightestimate](https://developer.apple.com/documentation/arkit/ardirectionallightestimate)

# ARDirectionalLightEstimate (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.

## Declaration

```swift
class ARDirectionalLightEstimate
```

<a id="overview"></a>

## Overview

When you run a face tracking AR session (see [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md)) with the [isLightEstimationEnabled](arconfiguration/islightestimationenabled.md) property set to [true](https://developer.apple.com/documentation/swift/true), ARKit uses the detected face as a light probe to estimate the directional lighting environment in the scene. The [lightEstimate](arframe/lightestimate.md) property of each frame vended by the session contains an [ARDirectionalLightEstimate](ardirectionallightestimate.md) instance containing this information.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (The [ARSCNView](arscnview.md) class automatically uses this information to configure SceneKit lighting.)

## Topics

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](ardirectionallightestimate/sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightDirection](ardirectionallightestimate/primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.
- [primaryLightIntensity](ardirectionallightestimate/primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.

## Relationships

### Inherits From

- [ARLightEstimate](arlightestimate.md)

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
- [ARLightEstimate](arlightestimate.md): Estimated scene lighting information associated with a captured video frame in an AR session.

# ARDirectionalLightEstimate (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.

## Declaration

```objectivec
@interface ARDirectionalLightEstimate : ARLightEstimate
```

<a id="overview"></a>

## Overview

When you run a face tracking AR session (see [ARFaceTrackingConfiguration](arfacetrackingconfiguration.md)) with the [lightEstimationEnabled](arconfiguration/islightestimationenabled.md) property set to [true](https://developer.apple.com/documentation/swift/true), ARKit uses the detected face as a light probe to estimate the directional lighting environment in the scene. The [lightEstimate](arframe/lightestimate.md) property of each frame vended by the session contains an [ARDirectionalLightEstimate](ardirectionallightestimate.md) instance containing this information.

If you render your own overlay graphics for the AR scene, you can use this information in shading algorithms to help make those graphics match the real-world lighting conditions of the scene captured by the camera. (The [ARSCNView](arscnview.md) class automatically uses this information to configure SceneKit lighting.)

## Topics

### Examining Light Parameters

- [sphericalHarmonicsCoefficients](ardirectionallightestimate/sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions.
- [primaryLightDirection](ardirectionallightestimate/primarylightdirection.md): A vector indicating the orientation of the strongest directional light source in the scene.
- [primaryLightIntensity](ardirectionallightestimate/primarylightintensity.md): The estimated intensity, in lumens, of the strongest directional light source in the scene.

## Relationships

### Inherits From

- [ARLightEstimate](arlightestimate.md)

## See Also

### Lighting Effects

- [Adding realistic reflections to an AR experience](adding-realistic-reflections-to-an-ar-experience.md): Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md): An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.
- [ARLightEstimate](arlightestimate.md): Estimated scene lighting information associated with a captured video frame in an AR session.
