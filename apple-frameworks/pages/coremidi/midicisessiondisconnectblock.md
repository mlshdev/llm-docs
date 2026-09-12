> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicisessiondisconnectblock](https://developer.apple.com/documentation/coremidi/midicisessiondisconnectblock)

# MIDICISessionDisconnectBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI session disconnects.

> No longer supported for CoreMIDI

## Declaration

```swift
typealias MIDICISessionDisconnectBlock = (MIDICISession, any Error) -> Void
```

## Parameters

- `session`: The disconnected session instance.
- `error`: An object that provides error information, if any.

<a id="Discussion"></a>

## Discussion

If the system calls this block, terminate the MIDI-CI session.

## See Also

### Data Types

- [MIDICIDeviceID](midicideviceid.md)
- [MIDICIDeviceManager.DictionaryKey](midicidevicemanager/dictionarykey.md)
- [MIDICIMUID](midicimuid.md)
- [MIDICIPropertyExchangeRequestID](midicipropertyexchangerequestid.md)
- [MIDIEventVisitor](midieventvisitor.md)
- [MIDIUInteger14](midiuinteger14.md)
- [MIDIUInteger2](midiuinteger2.md)
- [MIDIUInteger28](midiuinteger28.md)
- [MIDIUInteger4](midiuinteger4.md)
- [MIDIUInteger7](midiuinteger7.md)
- [MIDIUMPEndpointManager.DictionaryKey](midiumpendpointmanager/dictionarykey.md)
- [MIDIUMPFunctionBlockID](midiumpfunctionblockid.md)
- [MIDIUMPGroupNumber](midiumpgroupnumber.md)
- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDIChannelNumber](midichannelnumber.md)

# MIDICISessionDisconnectBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI session disconnects.

> No longer supported for CoreMIDI

## Declaration

```objectivec
typedef void (^)(MIDICISession *, NSError *) MIDICISessionDisconnectBlock;
```

## Parameters

- `session`: The disconnected session instance.
- `error`: An object that provides error information, if any.

<a id="Discussion"></a>

## Discussion

If the system calls this block, terminate the MIDI-CI session.

## See Also

### Data Types

- [MIDICIDeviceID](midicideviceid.md)
- [MIDICIDeviceManagerDictionaryKey](midicidevicemanager/dictionarykey.md)
- [MIDICIMUID](midicimuid.md)
- [MIDICIPropertyExchangeRequestID](midicipropertyexchangerequestid.md)
- [MIDIEventVisitor](midieventvisitor.md)
- [MIDIUInteger14](midiuinteger14.md)
- [MIDIUInteger2](midiuinteger2.md)
- [MIDIUInteger28](midiuinteger28.md)
- [MIDIUInteger4](midiuinteger4.md)
- [MIDIUInteger7](midiuinteger7.md)
- [MIDIUMPEndpointManagerDictionaryKey](midiumpendpointmanager/dictionarykey.md)
- [MIDIUMPFunctionBlockID](midiumpfunctionblockid.md)
- [MIDIUMPGroupNumber](midiumpgroupnumber.md)
- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDIChannelNumber](midichannelnumber.md)
