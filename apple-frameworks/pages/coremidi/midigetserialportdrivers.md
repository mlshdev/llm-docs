> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetserialportdrivers](https://developer.apple.com/documentation/coremidi/midigetserialportdrivers)

# MIDIGetSerialPortDrivers

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.6)

Returns a list of installed MIDI drivers for serial port MIDI devices.

## Declaration

```objectivec
extern OSStatus MIDIGetSerialPortDrivers(CFArrayRef*outDriverNames);
```

## Parameters

- `outDriverNames`: On exit, a CFArrayRef containing a list of CFStringRef’s which are the names of the serial port MIDI drivers. The array should be released by the caller.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

Use this to determine which of the installed MIDI drivers are for devices which may attach to serial ports.

New for CoreMIDI 1.1.

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
