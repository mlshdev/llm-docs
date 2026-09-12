> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaupresetevent](https://developer.apple.com/documentation/avfaudio/avaupresetevent)

# AVAUPresetEvent (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a preset load and change on the music track’s destination audio unit.

## Declaration

```swift
class AVAUPresetEvent
```

## Topics

### Creating a Preset Event

- [init(scope:element:dictionary:)](avaupresetevent/init%28scope_element_dictionary_%29.md): Creates an event with the scope, element, and dictionary for the preset.

### Configuring a Preset Event

- [scope](avaupresetevent/scope.md): The audio unit scope.
- [element](avaupresetevent/element.md): The element index in the scope.
- [presetDictionary](avaupresetevent/presetdictionary.md): The dictionary that contains the preset.

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
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.

# AVAUPresetEvent (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a preset load and change on the music track’s destination audio unit.

## Declaration

```objectivec
@interface AVAUPresetEvent : AVMusicEvent
```

## Topics

### Creating a Preset Event

- [initWithScope:element:dictionary:](avaupresetevent/init%28scope_element_dictionary_%29.md): Creates an event with the scope, element, and dictionary for the preset.

### Configuring a Preset Event

- [scope](avaupresetevent/scope.md): The audio unit scope.
- [element](avaupresetevent/element.md): The element index in the scope.
- [presetDictionary](avaupresetevent/presetdictionary.md): The dictionary that contains the preset.

## Relationships

### Inherits From

- [AVMusicEvent](avmusicevent.md)

## See Also

### Handling Music Events

- [AVMusicEvent](avmusicevent.md): A base class for the events you associate with a music track.
- [AVMusicUserEvent](avmusicuserevent.md): An object that represents a custom user message.
- [AVParameterEvent](avparameterevent.md): An object that represents a parameter event on a music track’s destination.
- [AVExtendedTempoEvent](avextendedtempoevent.md): An object that represents a tempo change to a specific beats-per-minute value.
- [AVExtendedNoteOnEvent](avextendednoteonevent.md): An object that represents a custom extension of a MIDI note on event.
