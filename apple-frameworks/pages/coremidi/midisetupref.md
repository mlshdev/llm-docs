> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midisetupref](https://developer.apple.com/documentation/coremidi/midisetupref)

# MIDISetupRef (Swift)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents the global state of the MIDI system, that contains lists of the devices and serial port owners.

## Declaration

```swift
typealias MIDISetupRef = MIDIObjectRef
```

<a id="Discussion"></a>

## Discussion

Derives from MIDIObjectRef, does not have an owner object.

Generally, only MIDI drivers and specialized configuration editors will need to manipulate MIDISetup objects, not the average MIDI client application. As of CoreMIDI 1.1, the MIDIServer maintains a single global MIDISetupRef, stored persistently in a preference file.

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
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.

# MIDISetupRef (Objective-C)

**Framework:** Core MIDI  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type that represents the global state of the MIDI system, that contains lists of the devices and serial port owners.

## Declaration

```objectivec
typedef MIDIObjectRef MIDISetupRef;
```

<a id="Discussion"></a>

## Discussion

Derives from MIDIObjectRef, does not have an owner object.

Generally, only MIDI drivers and specialized configuration editors will need to manipulate MIDISetup objects, not the average MIDI client application. As of CoreMIDI 1.1, the MIDIServer maintains a single global MIDISetupRef, stored persistently in a preference file.

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
- [MIDICISessionDisconnectBlock](midicisessiondisconnectblock.md): Deprecated. A block the system calls when a MIDI-CI session disconnects.
