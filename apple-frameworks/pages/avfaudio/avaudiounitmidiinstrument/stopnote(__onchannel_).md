> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitmidiinstrument/stopnote(_:onchannel:)](https://developer.apple.com/documentation/avfaudio/avaudiounitmidiinstrument/stopnote(_:onchannel:))

# stopNote(\_:onChannel:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI Note Off event to the instrument.

## Declaration

```swift
func stopNote(_ note: UInt8, onChannel channel: UInt8)
```

## Parameters

- `note`: The note number (key) to stop. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Starting and stopping play

- [startNote(\_:withVelocity:onChannel:)](startnote%28__withvelocity_onchannel_%29.md): Sends a MIDI Note On event to the instrument.

# stopNote:onChannel: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Sends a MIDI Note Off event to the instrument.

## Declaration

```objectivec
- (void) stopNote:(uint8_t) note onChannel:(uint8_t) channel;
```

## Parameters

- `note`: The note number (key) to stop. The valid range is `0` to `127`.
- `channel`: The channel number to send the event to. The valid range is `0` to `15`.

## See Also

### Starting and stopping play

- [startNote:withVelocity:onChannel:](startnote%28__withvelocity_onchannel_%29.md): Sends a MIDI Note On event to the instrument.
