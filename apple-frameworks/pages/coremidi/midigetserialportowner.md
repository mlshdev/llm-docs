> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midigetserialportowner](https://developer.apple.com/documentation/coremidi/midigetserialportowner)

# MIDIGetSerialPortOwner

**Interface language:** Objective-C

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.6)

Returns the MIDI driver that owns a serial port.

## Declaration

```objectivec
extern OSStatus MIDIGetSerialPortOwner(CFStringRef portName, CFStringRef*outDriverName);
```

## Parameters

- `portName`: The name of a serial port.
- `outDriverName`: On exit, the name of the driver owning the port, or NULL if no driver owns it.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

<a id="Discussion"></a>

## Discussion

The current MIDISetup tracks ownership of serial ports to one of the MIDI drivers installed in the system.

Serial ports can be enumerated using IOServiceMatching( kIOSerialBSDServiceValue). The port’s unique name is the IOService’s kIOTTYDeviceKey property.

New for CoreMIDI 1.1.

A previous version of this documentation specified an incorrect key for obtaining the port’s unique name (IOTTYBaseName).

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
