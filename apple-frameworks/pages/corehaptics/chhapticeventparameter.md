> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticeventparameter](https://developer.apple.com/documentation/corehaptics/chhapticeventparameter)

# CHHapticEventParameter (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A static parameter value that represents a single property of the haptic pattern.

## Declaration

```swift
class CHHapticEventParameter
```

<a id="overview"></a>

## Overview

Event parameters specify values for haptics associated with the event. For example, an intensity event parameter determines how intense the haptic feels when it fires. Event parameters are static; they don’t change over the course of the pattern. To change a parameter value after a haptic has started playing, use a [CHHapticDynamicParameter](chhapticdynamicparameter.md) to make an immediate change, or a [CHHapticParameterCurve](chhapticparametercurve.md) to transition smoothly.

![A rising blue line represents how a parameter curve changes the parameter’s value gradually over time, while an orange line shows how dynamic parameters change the parameter’s value immediately.](https://developer.apple.com/images/com.apple.corehaptics/media-3197279@2x.png)

When you send a dynamic parameter to the haptic pattern, its value changes immediately, at the specified time. When you send a parameter curve instead, the value changes gradually according to the type of curve you specified.

## Topics

### Creating an Event Parameter

- [init(parameterID:value:)](chhapticeventparameter/init%28parameterid_value_%29.md): Creates a haptic event parameter from its ID and value.
- [CHHapticEvent.ParameterID](chhapticevent/parameterid.md): An identifier for an event parameter.

### Specifying an Event Parameter’s Value

- [parameterID](chhapticeventparameter/parameterid.md): The haptic parameter ID indicating what type of parameter the current event represents.
- [value](chhapticeventparameter/value.md): The value of the parameter.

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
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.

# CHHapticEventParameter (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

A static parameter value that represents a single property of the haptic pattern.

## Declaration

```objectivec
@interface CHHapticEventParameter : NSObject
```

<a id="overview"></a>

## Overview

Event parameters specify values for haptics associated with the event. For example, an intensity event parameter determines how intense the haptic feels when it fires. Event parameters are static; they don’t change over the course of the pattern. To change a parameter value after a haptic has started playing, use a [CHHapticDynamicParameter](chhapticdynamicparameter.md) to make an immediate change, or a [CHHapticParameterCurve](chhapticparametercurve.md) to transition smoothly.

![A rising blue line represents how a parameter curve changes the parameter’s value gradually over time, while an orange line shows how dynamic parameters change the parameter’s value immediately.](https://developer.apple.com/images/com.apple.corehaptics/media-3197279@2x.png)

When you send a dynamic parameter to the haptic pattern, its value changes immediately, at the specified time. When you send a parameter curve instead, the value changes gradually according to the type of curve you specified.

## Topics

### Creating an Event Parameter

- [initWithParameterID:value:](chhapticeventparameter/init%28parameterid_value_%29.md): Creates a haptic event parameter from its ID and value.
- [CHHapticEventParameterID](chhapticevent/parameterid.md): An identifier for an event parameter.

### Specifying an Event Parameter’s Value

- [parameterID](chhapticeventparameter/parameterid.md): The haptic parameter ID indicating what type of parameter the current event represents.
- [value](chhapticeventparameter/value.md): The value of the parameter.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Programmatic haptics

- [Delivering Rich App Experiences with Haptics](delivering-rich-app-experiences-with-haptics.md): Enhance your app’s experience by incorporating haptic and sound feedback into key interactive moments.
- [Playing Collision-Based Haptic Patterns](playing-collision-based-haptic-patterns.md): Play a custom haptic pattern whose strength depends on an object’s collision speed.
- [Updating Continuous and Transient Haptic Parameters in Real Time](updating-continuous-and-transient-haptic-parameters-in-real-time.md): Generate continuous and transient haptic patterns in response to user touch.
- [CHHapticEvent](chhapticevent.md): An object that describes a single haptic or audio event.
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.
