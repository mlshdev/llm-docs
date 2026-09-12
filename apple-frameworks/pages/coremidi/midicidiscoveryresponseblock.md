> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicidiscoveryresponseblock](https://developer.apple.com/documentation/coremidi/midicidiscoveryresponseblock)

# MIDICIDiscoveryResponseBlock (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI node discovery request completes.

> No longer supported for CoreMIDI

## Declaration

```swift
typealias MIDICIDiscoveryResponseBlock = ([MIDICIDiscoveredNode]) -> Void
```

## Parameters

- `discoveredNodes`: The array of discovered nodes.

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
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
- [MIDIChannelNumber](midichannelnumber.md)

# MIDICIDiscoveryResponseBlock (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ (deprecated in 18.0) · iPadOS 14.0+ (deprecated in 18.0) · Mac Catalyst 14.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

A block the system calls when a MIDI-CI node discovery request completes.

> No longer supported for CoreMIDI

## Declaration

```objectivec
typedef void (^)(NSArray<MIDICIDiscoveredNode *> *) MIDICIDiscoveryResponseBlock;
```

## Parameters

- `discoveredNodes`: The array of discovered nodes.

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
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
- [MIDIChannelNumber](midichannelnumber.md)
