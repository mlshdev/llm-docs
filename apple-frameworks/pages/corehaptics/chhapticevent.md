> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corehaptics/chhapticevent](https://developer.apple.com/documentation/corehaptics/chhapticevent)

# CHHapticEvent (Swift)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object that describes a single haptic or audio event.

## Declaration

```swift
class CHHapticEvent
```

<a id="overview"></a>

## Overview

Each event represents a single haptic or audio signal. The event [type](chhapticevent/type.md) determines whether it’s audio or haptic. Use a [CHHapticPatternPlayer](chhapticpatternplayer.md) object obtained through [CHHapticEngine](chhapticengine.md) factory methods to play events. Haptic events can be transient or continuous. Transient haptic patterns are brief impulses that occur at a specific point in time, such as the haptic feedback you feel from swiping through a picker or toggling a switch. Continuous haptic patterns, like the vibration from a ringtone, take the form of lengthier feedback over a period of time.

In the following graphic, transient haptic patterns on the left trigger at a specific time with a specific intensity. Continuous haptic patterns on the right sustain the haptic feedback over a specific duration of time, such as three seconds.

![A transient haptic pattern on the left, and a continuous haptic pattern on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3235483@2x.png)

Specify when an event begins by setting its [relativeTime](chhapticevent/relativetime.md) property. Specify the length of the event by setting its [duration](chhapticevent/duration.md) property. Set optional parameters to customize event properties. For example, you can specify the intensity of a haptic event by creating an event parameter with ID [hapticIntensity](chhapticevent/parameterid/hapticintensity.md).

## Topics

### Categorizing Haptic Events

- [type](chhapticevent/type.md): The type of the haptic event.
- [CHHapticEvent.EventType](chhapticevent/eventtype.md): The types of audio and haptic event waveforms.

### Creating Haptic Events

- [init(audioResourceID:parameters:relativeTime:)](chhapticevent/init%28audioresourceid_parameters_relativetime_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.
- [init(audioResourceID:parameters:relativeTime:duration:)](chhapticevent/init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [init(eventType:parameters:relativeTime:)](chhapticevent/init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.
- [init(eventType:parameters:relativeTime:duration:)](chhapticevent/init%28eventtype_parameters_relativetime_duration_%29.md): Initializes a haptic event of the specified type, parameters, start time, and duration.

### Configuring Haptic Events

- [eventParameters](chhapticevent/eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEvent.ParameterID](chhapticevent/parameterid.md): An identifier for an event parameter.
- [relativeTime](chhapticevent/relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](chhapticevent/duration.md): The duration of the haptic event.

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
- [CHHapticEventParameter](chhapticeventparameter.md): A static parameter value that represents a single property of the haptic pattern.
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.

# CHHapticEvent (Objective-C)

**Framework:** Core Haptics  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An object that describes a single haptic or audio event.

## Declaration

```objectivec
@interface CHHapticEvent : NSObject
```

<a id="overview"></a>

## Overview

Each event represents a single haptic or audio signal. The event [type](chhapticevent/type.md) determines whether it’s audio or haptic. Use a [CHHapticPatternPlayer](chhapticpatternplayer.md) object obtained through [CHHapticEngine](chhapticengine.md) factory methods to play events. Haptic events can be transient or continuous. Transient haptic patterns are brief impulses that occur at a specific point in time, such as the haptic feedback you feel from swiping through a picker or toggling a switch. Continuous haptic patterns, like the vibration from a ringtone, take the form of lengthier feedback over a period of time.

In the following graphic, transient haptic patterns on the left trigger at a specific time with a specific intensity. Continuous haptic patterns on the right sustain the haptic feedback over a specific duration of time, such as three seconds.

![A transient haptic pattern on the left, and a continuous haptic pattern on the right.](https://developer.apple.com/images/com.apple.corehaptics/media-3235483@2x.png)

Specify when an event begins by setting its [relativeTime](chhapticevent/relativetime.md) property. Specify the length of the event by setting its [duration](chhapticevent/duration.md) property. Set optional parameters to customize event properties. For example, you can specify the intensity of a haptic event by creating an event parameter with ID [CHHapticEventParameterIDHapticIntensity](chhapticevent/parameterid/hapticintensity.md).

## Topics

### Categorizing Haptic Events

- [type](chhapticevent/type.md): The type of the haptic event.
- [CHHapticEventType](chhapticevent/eventtype.md): The types of audio and haptic event waveforms.

### Creating Haptic Events

- [initWithAudioResourceID:parameters:relativeTime:](chhapticevent/init%28audioresourceid_parameters_relativetime_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters and start time.
- [initWithAudioResourceID:parameters:relativeTime:duration:](chhapticevent/init%28audioresourceid_parameters_relativetime_duration_%29.md): Initializes a haptic event from a previously loaded audio resource, specifying event parameters, start time, and duration.
- [initWithEventType:parameters:relativeTime:](chhapticevent/init%28eventtype_parameters_relativetime_%29.md): Initializes a haptic event of the specified type, parameters, and start time.
- [initWithEventType:parameters:relativeTime:duration:](chhapticevent/init%28eventtype_parameters_relativetime_duration_%29.md): Initializes a haptic event of the specified type, parameters, start time, and duration.

### Configuring Haptic Events

- [eventParameters](chhapticevent/eventparameters.md): An array of event parameters, possibly empty.
- [CHHapticEventParameterID](chhapticevent/parameterid.md): An identifier for an event parameter.
- [relativeTime](chhapticevent/relativetime.md): The start time of the event, relative to other events in the same pattern.
- [duration](chhapticevent/duration.md): The duration of the haptic event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Programmatic haptics

- [Delivering Rich App Experiences with Haptics](delivering-rich-app-experiences-with-haptics.md): Enhance your app’s experience by incorporating haptic and sound feedback into key interactive moments.
- [Playing Collision-Based Haptic Patterns](playing-collision-based-haptic-patterns.md): Play a custom haptic pattern whose strength depends on an object’s collision speed.
- [Updating Continuous and Transient Haptic Parameters in Real Time](updating-continuous-and-transient-haptic-parameters-in-real-time.md): Generate continuous and transient haptic patterns in response to user touch.
- [CHHapticEventParameter](chhapticeventparameter.md): A static parameter value that represents a single property of the haptic pattern.
- [CHHapticDynamicParameter](chhapticdynamicparameter.md): A value that you send to a haptic pattern player to alter a property value during playback.
- [CHHapticParameterCurve](chhapticparametercurve.md): A curve that you send to a haptic pattern player to alter a property value gradually during playback.
