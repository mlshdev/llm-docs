> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi1upchannelvoicemessage(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midi1upchannelvoicemessage(_:_:_:_:_:))

# MIDI1UPChannelVoiceMessage(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func MIDI1UPChannelVoiceMessage(_ group: UInt8, _ status: UInt8, _ channel: UInt8, _ data1: UInt8, _ data2: UInt8) -> MIDIMessage_32
```

## See Also

### MIDI 1.0 Messages

- [MIDI1UPNoteOn(\_:\_:\_:\_:)](midi1upnoteon%28________%29.md)
- [MIDI1UPNoteOff(\_:\_:\_:\_:)](midi1upnoteoff%28________%29.md)
- [MIDI1UPPitchBend(\_:\_:\_:\_:)](midi1uppitchbend%28________%29.md)
- [MIDI1UPControlChange(\_:\_:\_:\_:)](midi1upcontrolchange%28________%29.md)
- [MIDI1UPSystemCommon(\_:\_:\_:\_:)](midi1upsystemcommon%28________%29.md)
- [MIDIMessageTypeForUPWord(\_:)](midimessagetypeforupword%28__%29.md)

# MIDI1UPChannelVoiceMessage (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
static MIDIMessage_32 MIDI1UPChannelVoiceMessage(UInt8 group, UInt8 status, UInt8 channel, UInt8 data1, UInt8 data2);
```

## See Also

### MIDI 1.0 Messages

- [MIDI1UPNoteOn](midi1upnoteon%28________%29.md)
- [MIDI1UPNoteOff](midi1upnoteoff%28________%29.md)
- [MIDI1UPPitchBend](midi1uppitchbend%28________%29.md)
- [MIDI1UPControlChange](midi1upcontrolchange%28________%29.md)
- [MIDI1UPSystemCommon](midi1upsystemcommon%28________%29.md)
- [MIDIMessageTypeForUPWord](midimessagetypeforupword%28__%29.md)
