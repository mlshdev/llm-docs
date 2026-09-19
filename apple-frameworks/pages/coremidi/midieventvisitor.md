> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremidi/midieventvisitor

# MIDIEventVisitor (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
typealias MIDIEventVisitor = (UnsafeMutableRawPointer?, MIDITimeStamp, MIDIUniversalMessage) -> Void
```

## See Also

### Data Types

- [MIDICIDeviceID](midicideviceid.md)
- [MIDICIDeviceManager.DictionaryKey](midicidevicemanager/dictionarykey.md)
- [MIDICIMUID](midicimuid.md)
- [MIDICIPropertyExchangeRequestID](midicipropertyexchangerequestid.md)
- [MIDIUInteger14](midiuinteger14.md)
- [MIDIUInteger2](midiuinteger2.md)
- [MIDIUInteger28](midiuinteger28.md)
- [MIDIUInteger4](midiuinteger4.md)
- [MIDIUInteger7](midiuinteger7.md)
- [MIDIUMPEndpointManager.DictionaryKey](midiumpendpointmanager/dictionarykey.md)
- [MIDIUMPFunctionBlockID](midiumpfunctionblockid.md)
- [MIDIUMPGroupNumber](midiumpgroupnumber.md)
- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
- [MIDIChannelNumber](midichannelnumber.md)

# MIDIEventVisitor (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
typedef void (*)(void *, unsigned long long, struct MIDIUniversalMessage) MIDIEventVisitor;
```

## See Also

### Data Types

- [MIDICIDeviceID](midicideviceid.md)
- [MIDICIDeviceManagerDictionaryKey](midicidevicemanager/dictionarykey.md)
- [MIDICIMUID](midicimuid.md)
- [MIDICIPropertyExchangeRequestID](midicipropertyexchangerequestid.md)
- [MIDIUInteger14](midiuinteger14.md)
- [MIDIUInteger2](midiuinteger2.md)
- [MIDIUInteger28](midiuinteger28.md)
- [MIDIUInteger4](midiuinteger4.md)
- [MIDIUInteger7](midiuinteger7.md)
- [MIDIUMPEndpointManagerDictionaryKey](midiumpendpointmanager/dictionarykey.md)
- [MIDIUMPFunctionBlockID](midiumpfunctionblockid.md)
- [MIDIUMPGroupNumber](midiumpgroupnumber.md)
- [MIDICIDiscoveryResponseBlock](midicidiscoveryresponseblock.md): Deprecated. A block the system calls when a MIDI-CI node discovery request completes.
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
- [MIDIChannelNumber](midichannelnumber.md)
