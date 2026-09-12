> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midi2functionblockinfonotificationmessage(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midi2functionblockinfonotificationmessage(_:_:_:_:_:_:_:_:_:))

# MIDI2FunctionBlockInfoNotificationMessage(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func MIDI2FunctionBlockInfoNotificationMessage(_ active: Bool, _ blockNumber: MIDIUInteger7, _ UIHint: MIDIUMPFunctionBlockUIHint, _ MIDI1: MIDIUMPFunctionBlockMIDI1Info, _ direction: MIDIUMPFunctionBlockDirection, _ firstGroup: UInt8, _ numberOfGroupsSpanned: UInt8, _ CIVersion: UInt8, _ maxSysex8Streams: UInt8) -> MIDIMessage_128
```

## See Also

### Functions

- [MIDI1UPChannelPressure(\_:\_:\_:)](midi1upchannelpressure%28______%29.md)
- [MIDI1UPPolyPressure(\_:\_:\_:\_:)](midi1uppolypressure%28________%29.md)
- [MIDI1UPProgramChange(\_:\_:\_:)](midi1upprogramchange%28______%29.md)
- [MIDI1UPSysEx(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](midi1upsysex%28__________________%29.md)
- [MIDI1UPSysExArray(\_:\_:\_:\_:)](midi1upsysexarray%28________%29.md)
- [MIDI2EndOfClipMessage()](midi2endofclipmessage%28%29.md)
- [MIDI2EndpointDeviceIdentityNotificationMessage(\_:\_:\_:\_:\_:\_:)](midi2endpointdeviceidentitynotificationmessage%28____________%29.md)
- [MIDI2EndpointDiscoveryMessage(\_:\_:\_:\_:\_:\_:\_:)](midi2endpointdiscoverymessage%28______________%29.md)
- [MIDI2EndpointInfoNotificationMessage(\_:\_:\_:\_:\_:\_:\_:\_:)](midi2endpointinfonotificationmessage%28________________%29.md)
- [MIDI2EndpointNameNotificationMessage(\_:\_:\_:)](midi2endpointnamenotificationmessage%28______%29.md)
- [MIDI2EndpointProductInstanceIDNotificationMessage(\_:\_:\_:)](midi2endpointproductinstanceidnotificationmessage%28______%29.md)
- [MIDI2FlexDataMessage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](midi2flexdatamessage%28__________________%29.md)
- [MIDI2FunctionBlockDiscoveryMessage(\_:\_:\_:)](midi2functionblockdiscoverymessage%28______%29.md)
- [MIDI2FunctionBlockNameNotificationMessage(\_:\_:\_:\_:)](midi2functionblocknamenotificationmessage%28________%29.md)
- [MIDI2StartOfClipMessage()](midi2startofclipmessage%28%29.md)

# MIDI2FunctionBlockInfoNotificationMessage (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
static MIDIMessage_128 MIDI2FunctionBlockInfoNotificationMessage(bool active, MIDIUInteger7 blockNumber, MIDIUMPFunctionBlockUIHint UIHint, MIDIUMPFunctionBlockMIDI1Info MIDI1, MIDIUMPFunctionBlockDirection direction, UInt8 firstGroup, UInt8 numberOfGroupsSpanned, UInt8 CIVersion, UInt8 maxSysex8Streams);
```

## See Also

### Functions

- [MIDI1UPChannelPressure](midi1upchannelpressure%28______%29.md)
- [MIDI1UPPolyPressure](midi1uppolypressure%28________%29.md)
- [MIDI1UPProgramChange](midi1upprogramchange%28______%29.md)
- [MIDI1UPSysEx](midi1upsysex%28__________________%29.md)
- [MIDI1UPSysExArray](midi1upsysexarray%28________%29.md)
- [MIDI2EndOfClipMessage](midi2endofclipmessage%28%29.md)
- [MIDI2EndpointDeviceIdentityNotificationMessage](midi2endpointdeviceidentitynotificationmessage%28____________%29.md)
- [MIDI2EndpointDiscoveryMessage](midi2endpointdiscoverymessage%28______________%29.md)
- [MIDI2EndpointInfoNotificationMessage](midi2endpointinfonotificationmessage%28________________%29.md)
- [MIDI2EndpointNameNotificationMessage](midi2endpointnamenotificationmessage%28______%29.md)
- [MIDI2EndpointProductInstanceIDNotificationMessage](midi2endpointproductinstanceidnotificationmessage%28______%29.md)
- [MIDI2FlexDataMessage](midi2flexdatamessage%28__________________%29.md)
- [MIDI2FunctionBlockDiscoveryMessage](midi2functionblockdiscoverymessage%28______%29.md)
- [MIDI2FunctionBlockNameNotificationMessage](midi2functionblocknamenotificationmessage%28________%29.md)
- [MIDI2StartOfClipMessage](midi2startofclipmessage%28%29.md)
