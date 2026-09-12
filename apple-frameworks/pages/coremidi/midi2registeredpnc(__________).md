> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi2registeredpnc(_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midi2registeredpnc(_:_:_:_:_:))

# MIDI2RegisteredPNC(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func MIDI2RegisteredPNC(_ group: UInt8, _ channel: UInt8, _ noteNumber: UInt8, _ index: UInt8, _ value: UInt32) -> MIDIMessage_64
```

## See Also

### MIDI 2.0 Messages

- [MIDI2ChannelVoiceMessage(\_:\_:\_:\_:\_:)](midi2channelvoicemessage%28__________%29.md)
- [MIDI2NoteOn(\_:\_:\_:\_:\_:\_:)](midi2noteon%28____________%29.md)
- [MIDI2NoteOff(\_:\_:\_:\_:\_:\_:)](midi2noteoff%28____________%29.md)
- [MIDI2ControlChange(\_:\_:\_:\_:)](midi2controlchange%28________%29.md)
- [MIDI2ProgramChange(\_:\_:\_:\_:\_:\_:)](midi2programchange%28____________%29.md)
- [MIDI2PitchBend(\_:\_:\_:)](midi2pitchbend%28______%29.md)
- [MIDI2PerNotePitchBend(\_:\_:\_:\_:)](midi2pernotepitchbend%28________%29.md)
- [MIDI2ChannelPressure(\_:\_:\_:)](midi2channelpressure%28______%29.md)
- [MIDI2PolyPressure(\_:\_:\_:\_:)](midi2polypressure%28________%29.md)
- [MIDI2AssignableControl(\_:\_:\_:\_:\_:)](midi2assignablecontrol%28__________%29.md)
- [MIDI2RelRegisteredControl(\_:\_:\_:\_:\_:)](midi2relregisteredcontrol%28__________%29.md)
- [MIDI2AssignablePNC(\_:\_:\_:\_:\_:)](midi2assignablepnc%28__________%29.md)
- [MIDI2RelAssignableControl(\_:\_:\_:\_:\_:)](midi2relassignablecontrol%28__________%29.md)
- [MIDI2RegisteredControl(\_:\_:\_:\_:\_:)](midi2registeredcontrol%28__________%29.md)
- [MIDI2PerNoteManagment(\_:\_:\_:\_:\_:)](midi2pernotemanagment%28__________%29.md)

# MIDI2RegisteredPNC (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
static MIDIMessage_64 MIDI2RegisteredPNC(UInt8 group, UInt8 channel, UInt8 noteNumber, UInt8 index, UInt32 value);
```

## See Also

### MIDI 2.0 Messages

- [MIDI2ChannelVoiceMessage](midi2channelvoicemessage%28__________%29.md)
- [MIDI2NoteOn](midi2noteon%28____________%29.md)
- [MIDI2NoteOff](midi2noteoff%28____________%29.md)
- [MIDI2ControlChange](midi2controlchange%28________%29.md)
- [MIDI2ProgramChange](midi2programchange%28____________%29.md)
- [MIDI2PitchBend](midi2pitchbend%28______%29.md)
- [MIDI2PerNotePitchBend](midi2pernotepitchbend%28________%29.md)
- [MIDI2ChannelPressure](midi2channelpressure%28______%29.md)
- [MIDI2PolyPressure](midi2polypressure%28________%29.md)
- [MIDI2AssignableControl](midi2assignablecontrol%28__________%29.md)
- [MIDI2RelRegisteredControl](midi2relregisteredcontrol%28__________%29.md)
- [MIDI2AssignablePNC](midi2assignablepnc%28__________%29.md)
- [MIDI2RelAssignableControl](midi2relassignablecontrol%28__________%29.md)
- [MIDI2RegisteredControl](midi2registeredcontrol%28__________%29.md)
- [MIDI2PerNoteManagment](midi2pernotemanagment%28__________%29.md)
