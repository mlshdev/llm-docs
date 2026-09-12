> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticdynamicparameter](https://developer.apple.com/documentation/corehaptics/chhapticdynamicparameter)

# CHHapticDynamicParameter (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A value that you send to a haptic pattern player to alter a property value during playback.

## Declaration

```swift
class CHHapticDynamicParameter
```

<a id="overview"></a>

## Overview

Dynamic parameters change their associated event parameters at specific times. When you send a dynamic parameter to a haptic pattern player, the value associated with the parameter changes abruptly at the specified time, across all events in the pattern. To precipitate a gradual change, use a [CHHapticParameterCurve](chhapticparametercurve.md) object.

For haptic intensity and audio volume, the final property value is equal to the original event parameter value multiplied by the dynamic parameter value. For all other parameters, the final property value is equal to the dynamic parameter value added to the original event parameter value. In both cases, the resulting value is limited to the range with minimum and maximum values corresponding to the specified event parameter.

## Topics

### Creating a Dynamic Parameter

- [init(parameterID:value:relativeTime:)](chhapticdynamicparameter/init%28parameterid_value_relativetime_%29.md): Creates a dynamic parameter from its ID, value, and start time.
- [CHHapticDynamicParameter.ID](chhapticdynamicparameter/id.md): The identifier that reveals the type of property associated with a dynamic parameter.

### Specifying a Dynamic Parameter’s Value

- [parameterID](chhapticdynamicparameter/parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [relativeTime](chhapticdynamicparameter/relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.
- [value](chhapticdynamicparameter/value.md): The value of the dynamic parameter.

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
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.

# CHHapticDynamicParameter (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A value that you send to a haptic pattern player to alter a property value during playback.

## Declaration

```objectivec
@interface CHHapticDynamicParameter : NSObject
```

<a id="overview"></a>

## Overview

Dynamic parameters change their associated event parameters at specific times. When you send a dynamic parameter to a haptic pattern player, the value associated with the parameter changes abruptly at the specified time, across all events in the pattern. To precipitate a gradual change, use a [CHHapticParameterCurve](chhapticparametercurve.md) object.

For haptic intensity and audio volume, the final property value is equal to the original event parameter value multiplied by the dynamic parameter value. For all other parameters, the final property value is equal to the dynamic parameter value added to the original event parameter value. In both cases, the resulting value is limited to the range with minimum and maximum values corresponding to the specified event parameter.

## Topics

### Creating a Dynamic Parameter

- [initWithParameterID:value:relativeTime:](chhapticdynamicparameter/init%28parameterid_value_relativetime_%29.md): Creates a dynamic parameter from its ID, value, and start time.
- [CHHapticDynamicParameterID](chhapticdynamicparameter/id.md): The identifier that reveals the type of property associated with a dynamic parameter.

### Specifying a Dynamic Parameter’s Value

- [parameterID](chhapticdynamicparameter/parameterid.md): The dynamic parameter ID defining the type of parameter being modified.
- [relativeTime](chhapticdynamicparameter/relativetime.md): The time at which this dynamic parameter is applied, relative to the start time of the pattern.
- [value](chhapticdynamicparameter/value.md): The value of the dynamic parameter.

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
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.
