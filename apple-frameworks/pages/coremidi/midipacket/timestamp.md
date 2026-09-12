> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midipacket/timestamp](https://developer.apple.com/documentation/coremidi/midipacket/timestamp)

# timeStamp (Swift)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI packet timestamp.

## Declaration

```swift
var timeStamp: MIDITimeStamp
```

<a id="Discussion"></a>

## Discussion

If receiving MIDI data, this property represents the time at which the events occurred. If sending MIDI data, it represents the time at which to play the events. A value of 0 means “now.”

The time stamp applies to the first byte or word in the packet.

## See Also

### Configuring a Packet

- [length](length.md): The number of valid MIDI data bytes in this packet.
- [data](data.md): A variable-length stream of MIDI messages.

# timeStamp (Objective-C)

**Framework:** Core MIDI  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The MIDI packet timestamp.

## Declaration

```objectivec
MIDITimeStamp timeStamp;
```

<a id="Discussion"></a>

## Discussion

If receiving MIDI data, this property represents the time at which the events occurred. If sending MIDI data, it represents the time at which to play the events. A value of 0 means “now.”

The time stamp applies to the first byte or word in the packet.

## See Also

### Configuring a Packet

- [length](length.md): The number of valid MIDI data bytes in this packet.
- [data](data.md): A variable-length stream of MIDI messages.
