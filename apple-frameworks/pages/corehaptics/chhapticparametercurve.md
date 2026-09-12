> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticparametercurve](https://developer.apple.com/documentation/corehaptics/chhapticparametercurve)

# CHHapticParameterCurve (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A curve that you send to a haptic pattern player to alter a property value gradually during playback.

## Declaration

```swift
class CHHapticParameterCurve
```

## Mentioned In

- [Representing haptic patterns in AHAP files](representing-haptic-patterns-in-ahap-files.md)

<a id="overview"></a>

## Overview

Parameter curves serve the same purpose as dynamic parameters in that they alter a property value during playback. Unlike dynamic parameters, which change a property value instantaneously, parameter curves interpolate linearly between parameter values to ensure a smooth transition.

![A rising blue line represents how a parameter curve changes the parameter’s value gradually over time, while an orange line shows how dynamic parameters change the parameter’s value immediately.](https://developer.apple.com/images/com.apple.corehaptics/media-3197275@2x.png)

For example, a parameter curven’tr haptic intensity modulates the intensity over time, ensuring a smooth transition between the current intensity and the upcoming one. Parameter curves apply to all events in a pattern; it isn’t possible to apply one to only a single event.

## Topics

### Creating a Curve

- [init(parameterID:controlPoints:relativeTime:)](chhapticparametercurve/init%28parameterid_controlpoints_relativetime_%29.md): Creates a parameter curve from its parameter ID, control points, and start time.
- [CHHapticParameterCurve.ControlPoint](chhapticparametercurve/controlpoint.md): A single control point in a parameter curve.

### Describing the Curve

- [controlPoints](chhapticparametercurve/controlpoints.md): An array containing the curve’s control points.
- [parameterID](chhapticparametercurve/parameterid.md): The parameter ID defining the type of parameter that the curve represents.
- [relativeTime](chhapticparametercurve/relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.

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

## See Also

### Programmatic haptics

- [Delivering Rich App Experiences with Haptics](delivering-rich-app-experiences-with-haptics.md): Enhance your app’s experience by incorporating haptic and sound feedback into key interactive moments.
- [Playing Collision-Based Haptic Patterns](playing-collision-based-haptic-patterns.md): Play a custom haptic pattern whose strength depends on an object’s collision speed.
- [Updating Continuous and Transient Haptic Parameters in Real Time](updating-continuous-and-transient-haptic-parameters-in-real-time.md): Generate continuous and transient haptic patterns in response to user touch.
- [CHHapticEvent](chhapticevent.md): An object that describes a single haptic or audio event.
- [CHHapticEventParameter](chhapticeventparameter.md): A static parameter value that represents a single property of the haptic pattern.
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.

# CHHapticParameterCurve (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS · tvOS 14.0+ · visionOS 1.0+

A curve that you send to a haptic pattern player to alter a property value gradually during playback.

## Declaration

```objectivec
@interface CHHapticParameterCurve : NSObject
```

## Mentioned In

- [Representing haptic patterns in AHAP files](representing-haptic-patterns-in-ahap-files.md)

<a id="overview"></a>

## Overview

Parameter curves serve the same purpose as dynamic parameters in that they alter a property value during playback. Unlike dynamic parameters, which change a property value instantaneously, parameter curves interpolate linearly between parameter values to ensure a smooth transition.

![A rising blue line represents how a parameter curve changes the parameter’s value gradually over time, while an orange line shows how dynamic parameters change the parameter’s value immediately.](https://developer.apple.com/images/com.apple.corehaptics/media-3197275@2x.png)

For example, a parameter curven’tr haptic intensity modulates the intensity over time, ensuring a smooth transition between the current intensity and the upcoming one. Parameter curves apply to all events in a pattern; it isn’t possible to apply one to only a single event.

## Topics

### Creating a Curve

- [initWithParameterID:controlPoints:relativeTime:](chhapticparametercurve/init%28parameterid_controlpoints_relativetime_%29.md): Creates a parameter curve from its parameter ID, control points, and start time.
- [CHHapticParameterCurveControlPoint](chhapticparametercurve/controlpoint.md): A single control point in a parameter curve.

### Describing the Curve

- [controlPoints](chhapticparametercurve/controlpoints.md): An array containing the curve’s control points.
- [parameterID](chhapticparametercurve/parameterid.md): The parameter ID defining the type of parameter that the curve represents.
- [relativeTime](chhapticparametercurve/relativetime.md): The time at which this parameter curve is applied, relative to the start time of the pattern.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Programmatic haptics

- [Delivering Rich App Experiences with Haptics](delivering-rich-app-experiences-with-haptics.md): Enhance your app’s experience by incorporating haptic and sound feedback into key interactive moments.
- [Playing Collision-Based Haptic Patterns](playing-collision-based-haptic-patterns.md): Play a custom haptic pattern whose strength depends on an object’s collision speed.
- [Updating Continuous and Transient Haptic Parameters in Real Time](updating-continuous-and-transient-haptic-parameters-in-real-time.md): Generate continuous and transient haptic patterns in response to user touch.
- [CHHapticEvent](chhapticevent.md): An object that describes a single haptic or audio event.
- [CHHapticEventParameter](chhapticeventparameter.md): A static parameter value that represents a single property of the haptic pattern.
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.
