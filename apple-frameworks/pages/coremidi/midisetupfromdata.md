> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisetupfromdata](https://developer.apple.com/documentation/coremidi/midisetupfromdata)

# MIDISetupFromData

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Creates a MIDISetup object from an XML stream.

## Declaration

```objectivec
extern OSStatus MIDISetupFromData(CFDataRef data, MIDISetupRef *outSetup);
```

## Parameters

- `data`: The XML text from which a MIDISetup object is to be built.
- `outSetup`: On successful return, points to a newly-created MIDISetup object. The caller is responsible for disposing it, or transferring ownership of the object back to the system, with MIDISetupInstall.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

As of CoreMIDI 1.1, it is usually not necessary to call this function, as CoreMIDI manages a single persistent MIDISetup itself.

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
- [MIDI2FunctionBlockInfoNotificationMessage](midi2functionblockinfonotificationmessage%28__________________%29.md)
- [MIDI2FunctionBlockNameNotificationMessage](midi2functionblocknamenotificationmessage%28________%29.md)
