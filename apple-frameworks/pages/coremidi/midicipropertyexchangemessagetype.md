> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremidi/midicipropertyexchangemessagetype](https://developer.apple.com/documentation/coremidi/midicipropertyexchangemessagetype)

# MIDICIPropertyExchangeMessageType (Swift)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
enum MIDICIPropertyExchangeMessageType
```

## Topics

### Enumeration Cases

- [MIDICIPropertyExchangeMessageType.inquiryGetPropertyData](midicipropertyexchangemessagetype/inquirygetpropertydata.md)
- [MIDICIPropertyExchangeMessageType.inquiryHasPropertyData_Reserved](midicipropertyexchangemessagetype/inquiryhaspropertydata_reserved.md)
- [MIDICIPropertyExchangeMessageType.inquiryPropertyExchangeCapabilities](midicipropertyexchangemessagetype/inquirypropertyexchangecapabilities.md)
- [MIDICIPropertyExchangeMessageType.inquiryReplyToHasPropertyData_Reserved](midicipropertyexchangemessagetype/inquiryreplytohaspropertydata_reserved.md)
- [MIDICIPropertyExchangeMessageType.inquirySetPropertyData](midicipropertyexchangemessagetype/inquirysetpropertydata.md)
- [MIDICIPropertyExchangeMessageType.notify](midicipropertyexchangemessagetype/notify.md)
- [MIDICIPropertyExchangeMessageType.replyToGetProperty](midicipropertyexchangemessagetype/replytogetproperty.md)
- [MIDICIPropertyExchangeMessageType.replyToPropertyExchangeCapabilities](midicipropertyexchangemessagetype/replytopropertyexchangecapabilities.md)
- [MIDICIPropertyExchangeMessageType.replyToSetPropertyData](midicipropertyexchangemessagetype/replytosetpropertydata.md)
- [MIDICIPropertyExchangeMessageType.replyToSubscription](midicipropertyexchangemessagetype/replytosubscription.md)
- [MIDICIPropertyExchangeMessageType.subscription](midicipropertyexchangemessagetype/subscription.md)

### Initializers

- [init(rawValue:)](midicipropertyexchangemessagetype/init%28rawvalue_%29.md)

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
- [MIDINetworkConnectionPolicy](midinetworkconnectionpolicy.md)
- [MIDINoteAttribute](midinoteattribute.md)
- [MIDIPerNoteManagementOptions](midipernotemanagementoptions.md)
- [MIDIProgramChangeOptions](midiprogramchangeoptions.md)
- [MIDIUMPCIObjectBackingType](midiumpciobjectbackingtype.md)
- [MIDIUMPFunctionBlockDirection](midiumpfunctionblockdirection.md)
- [MIDIUMPFunctionBlockMIDI1Info](midiumpfunctionblockmidi1info.md)
- [MIDIUMPFunctionBlockUIHint](midiumpfunctionblockuihint.md)

# MIDICIPropertyExchangeMessageType (Objective-C)

**Framework:** Core MIDI  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```objectivec
enum MIDICIPropertyExchangeMessageType : MIDIUInteger7;
```

## Topics

### Enumeration Cases

- [kMIDICIPropertyExchangeMessageTypeInquiryGetPropertyData](midicipropertyexchangemessagetype/inquirygetpropertydata.md)
- [kMIDICIPropertyExchangeMessageTypeInquiryHasPropertyData_Reserved](midicipropertyexchangemessagetype/inquiryhaspropertydata_reserved.md)
- [kMIDICIPropertyExchangeMessageTypeInquiryPropertyExchangeCapabilities](midicipropertyexchangemessagetype/inquirypropertyexchangecapabilities.md)
- [kMIDICIPropertyExchangeMessageTypeInquiryReplyToHasPropertyData_Reserved](midicipropertyexchangemessagetype/inquiryreplytohaspropertydata_reserved.md)
- [kMIDICIPropertyExchangeMessageTypeInquirySetPropertyData](midicipropertyexchangemessagetype/inquirysetpropertydata.md)
- [kMIDICIPropertyExchangeMessageTypeNotify](midicipropertyexchangemessagetype/notify.md)
- [kMIDICIPropertyExchangeMessageTypeReplyToGetProperty](midicipropertyexchangemessagetype/replytogetproperty.md)
- [kMIDICIPropertyExchangeMessageTypeReplyToPropertyExchangeCapabilities](midicipropertyexchangemessagetype/replytopropertyexchangecapabilities.md)
- [kMIDICIPropertyExchangeMessageTypeReplyToSetPropertyData](midicipropertyexchangemessagetype/replytosetpropertydata.md)
- [kMIDICIPropertyExchangeMessageTypeReplyToSubscription](midicipropertyexchangemessagetype/replytosubscription.md)
- [kMIDICIPropertyExchangeMessageTypeSubscription](midicipropertyexchangemessagetype/subscription.md)

## See Also

### Enumerations

- [kMIDIInvalidUniqueID](kmidiinvaliduniqueid.md): An invalid identifier.
- [MIDICICategoryOptions](midicicategoryoptions.md)
- [MIDICIDeviceType](midicidevicetype.md)
- [MIDICIManagementMessageType](midicimanagementmessagetype.md)
- [MIDICIProcessInquiryMessageType](midiciprocessinquirymessagetype.md)
- [MIDICIProfileMessageType](midiciprofilemessagetype.md)
- [MIDICIProfileType](midiciprofiletype.md)
- [MIDINetworkConnectionPolicy](midinetworkconnectionpolicy.md)
- [MIDINoteAttribute](midinoteattribute.md)
- [MIDIPerNoteManagementOptions](midipernotemanagementoptions.md)
- [MIDIProgramChangeOptions](midiprogramchangeoptions.md)
- [MIDIUMPCIObjectBackingType](midiumpciobjectbackingtype.md)
- [MIDIUMPFunctionBlockDirection](midiumpfunctionblockdirection.md)
- [MIDIUMPFunctionBlockMIDI1Info](midiumpfunctionblockmidi1info.md)
- [MIDIUMPFunctionBlockUIHint](midiumpfunctionblockuihint.md)
