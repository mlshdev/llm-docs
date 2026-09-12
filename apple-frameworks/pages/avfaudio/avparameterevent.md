> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avparameterevent](https://developer.apple.com/documentation/avfaudio/avparameterevent)

# AVParameterEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a parameter event on a music track’s destination.

## Declaration

```swift
class AVParameterEvent
```

<a id="overview"></a>

## Overview

When you configure an audio unit as the destination for an [AVMusicTrack](avmusictrack.md) that contains this event, you can schedule and automate parameter changes.

When the track is playing as part of a sequence, the destination audio unit receives set-parameter messages whose values change smoothly along a linear ramp between each event’s beat location.

If you add an event to an empty, non-automation track, the track becomes an automation track.

## Topics

### Creating a Parameter Event

- [init(parameterID:scope:element:value:)](avparameterevent/init%28parameterid_scope_element_value_%29.md): Creates an event with a parameter identifier, scope, element, and value for the parameter to set.

### Configuring a Parameter Event

- [parameterID](avparameterevent/parameterid.md): The identifier of the parameter.
- [scope](avparameterevent/scope.md): The audio unit scope for the parameter.
- [element](avparameterevent/element.md): The element index in the scope.
- [value](avparameterevent/value.md): The value of the parameter to set.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.

# AVParameterEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a parameter event on a music track’s destination.

## Declaration

```objectivec
@interface AVParameterEvent : AVMusicEvent
```

<a id="overview"></a>

## Overview

When you configure an audio unit as the destination for an [AVMusicTrack](avmusictrack.md) that contains this event, you can schedule and automate parameter changes.

When the track is playing as part of a sequence, the destination audio unit receives set-parameter messages whose values change smoothly along a linear ramp between each event’s beat location.

If you add an event to an empty, non-automation track, the track becomes an automation track.

## Topics

### Creating a Parameter Event

- [initWithParameterID:scope:element:value:](avparameterevent/init%28parameterid_scope_element_value_%29.md): Creates an event with a parameter identifier, scope, element, and value for the parameter to set.

### Configuring a Parameter Event

- [parameterID](avparameterevent/parameterid.md): The identifier of the parameter.
- [scope](avparameterevent/scope.md): The audio unit scope for the parameter.
- [element](avparameterevent/element.md): The element index in the scope.
- [value](avparameterevent/value.md): The value of the parameter to set.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVAUPresetEvent](avaupresetevent.md): An object that represents a preset load and change on the music track’s destination audio unit.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.
