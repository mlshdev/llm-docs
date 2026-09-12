> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midiutilitystatus](https://developer.apple.com/documentation/coremidi/midiutilitystatus)

# MIDIUtilityStatus (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
enum MIDIUtilityStatus
```

## Topics

### Enumeration Cases

- [MIDIUtilityStatus.NOOP](midiutilitystatus/noop.md)
- [MIDIUtilityStatus.deltaClockstampTicksPerQuarterNote](midiutilitystatus/deltaclockstampticksperquarternote.md)
- [MIDIUtilityStatus.jitterReductionClock](midiutilitystatus/jitterreductionclock.md)
- [MIDIUtilityStatus.jitterReductionTimestamp](midiutilitystatus/jitterreductiontimestamp.md)
- [MIDIUtilityStatus.ticksSinceLastEvent](midiutilitystatus/tickssincelastevent.md)

### Initializers

- [init(rawValue:)](midiutilitystatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
- [MIDICICategoryOptions](midicicategoryoptions.md)
- [MIDICIDeviceType](midicidevicetype.md)
- [MIDICIManagementMessageType](midicimanagementmessagetype.md)
- [MIDICIProcessInquiryMessageType](midiciprocessinquirymessagetype.md)
- [MIDICIProfileMessageType](midiciprofilemessagetype.md)
- [MIDICIProfileType](midiciprofiletype.md)
- [MIDICIPropertyExchangeMessageType](midicipropertyexchangemessagetype.md)
- [MIDINetworkConnectionPolicy](midinetworkconnectionpolicy.md)
- [MIDINoteAttribute](midinoteattribute.md)
- [MIDIPerNoteManagementOptions](midipernotemanagementoptions.md)
- [MIDIProgramChangeOptions](midiprogramchangeoptions.md)
- [MIDIUMPCIObjectBackingType](midiumpciobjectbackingtype.md)
- [MIDIUMPFunctionBlockDirection](midiumpfunctionblockdirection.md)
- [MIDIUMPFunctionBlockMIDI1Info](midiumpfunctionblockmidi1info.md)

# MIDIUtilityStatus (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
enum MIDIUtilityStatus : unsigned int;
```

## Topics

### Enumeration Cases

- [kMIDIUtilityStatusNOOP](midiutilitystatus/noop.md)
- [kMIDIUtilityStatusDeltaClockstampTicksPerQuarterNote](midiutilitystatus/deltaclockstampticksperquarternote.md)
- [kMIDIUtilityStatusJitterReductionClock](midiutilitystatus/jitterreductionclock.md)
- [kMIDIUtilityStatusJitterReductionTimestamp](midiutilitystatus/jitterreductiontimestamp.md)
- [kMIDIUtilityStatusTicksSinceLastEvent](midiutilitystatus/tickssincelastevent.md)

## See Also

### Enumerations

- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
- [MIDICICategoryOptions](midicicategoryoptions.md)
- [MIDICIDeviceType](midicidevicetype.md)
- [MIDICIManagementMessageType](midicimanagementmessagetype.md)
- [MIDICIProcessInquiryMessageType](midiciprocessinquirymessagetype.md)
- [MIDICIProfileMessageType](midiciprofilemessagetype.md)
- [MIDICIProfileType](midiciprofiletype.md)
- [MIDICIPropertyExchangeMessageType](midicipropertyexchangemessagetype.md)
- [MIDINetworkConnectionPolicy](midinetworkconnectionpolicy.md)
- [MIDINoteAttribute](midinoteattribute.md)
- [MIDIPerNoteManagementOptions](midipernotemanagementoptions.md)
- [MIDIProgramChangeOptions](midiprogramchangeoptions.md)
- [MIDIUMPCIObjectBackingType](midiumpciobjectbackingtype.md)
- [MIDIUMPFunctionBlockDirection](midiumpfunctionblockdirection.md)
- [MIDIUMPFunctionBlockMIDI1Info](midiumpfunctionblockmidi1info.md)
