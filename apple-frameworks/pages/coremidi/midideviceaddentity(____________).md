> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midideviceaddentity(_:_:_:_:_:_:)](https://developer.apple.com/documentation/coremidi/midideviceaddentity(_:_:_:_:_:_:))

# MIDIDeviceAddEntity(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Specifies one of the entities that make up a device.

## Declaration

```swift
func MIDIDeviceAddEntity(_ device: MIDIDeviceRef, _ name: CFString, _ embedded: Bool, _ numSourceEndpoints: Int, _ numDestinationEndpoints: Int, _ newEntity: UnsafeMutablePointer<MIDIEntityRef>) -> OSStatus
```

## Parameters

- `device`: The device to which an entity is to be added.
- `name`: The name of the new entity.
- `embedded`: True if this entity is inside the device, false if the entity simply consists of external connectors to which other devices can be attached.
- `numSourceEndpoints`: The number of source endpoints the entity has.
- `numDestinationEndpoints`: The number of destination endpoints the entity has.
- `newEntity`: On successful return, points to the newly-created entity.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

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
- [MIDI2FunctionBlockInfoNotificationMessage(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](midi2functionblockinfonotificationmessage%28__________________%29.md)
- [MIDI2FunctionBlockNameNotificationMessage(\_:\_:\_:\_:)](midi2functionblocknamenotificationmessage%28________%29.md)

# MIDIDeviceAddEntity (Objective-C)

**Framework:** Core MIDI  
**Kind:** Function  
**Availability:** iOS 4.2+ (deprecated in 27.0) · iPadOS 4.2+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Specifies one of the entities that make up a device.

## Declaration

```objectivec
extern OSStatus MIDIDeviceAddEntity(MIDIDeviceRef device, CFStringRef name, Boolean embedded, ItemCount numSourceEndpoints, ItemCount numDestinationEndpoints, MIDIEntityRef *newEntity);
```

## Parameters

- `device`: The device to which an entity is to be added.
- `name`: The name of the new entity.
- `embedded`: True if this entity is inside the device, false if the entity simply consists of external connectors to which other devices can be attached.
- `numSourceEndpoints`: The number of source endpoints the entity has.
- `numDestinationEndpoints`: The number of destination endpoints the entity has.
- `newEntity`: On successful return, points to the newly-created entity.

<a id="return-value"></a>

## Return Value

An OSStatus result code.

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
