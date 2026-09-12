> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incalldestinationtype](https://developer.apple.com/documentation/intents/incalldestinationtype)

# INCallDestinationType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Constants describing the destination of a call.

## Declaration

```swift
enum INCallDestinationType
```

## Topics

### Constants

- [INCallDestinationType.unknown](incalldestinationtype/unknown.md): An unknown call destination.
- [INCallDestinationType.normal](incalldestinationtype/normal.md): A call routed to its expected destination.
- [INCallDestinationType.emergency](incalldestinationtype/emergency.md): A call routed to an emergency number.
- [INCallDestinationType.voicemail](incalldestinationtype/voicemail.md): A call routed to the user’s voicemail.
- [INCallDestinationType.redial](incalldestinationtype/redial.md): A call that was the result of redialing a previous call.
- [INCallDestinationType.callBack](incalldestinationtype/callback.md): A call that was the result of a call back.
- [normalDestination](incalldestinationtype/normaldestination.md): Deprecated. A call routed to its expected destination.
- [emergencyDestination](incalldestinationtype/emergencydestination.md): Deprecated. A call routed to an emergency number.
- [voicemailDestination](incalldestinationtype/voicemaildestination.md): Deprecated. A call routed to the user’s voicemail.
- [redialDestination](incalldestinationtype/redialdestination.md): Deprecated. A call that was the result of redialing a previous call.

### Initializers

- [init(rawValue:)](incalldestinationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.

# INCallDestinationType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

Constants describing the destination of a call.

## Declaration

```objectivec
enum INCallDestinationType : NSInteger;
```

## Topics

### Constants

- [INCallDestinationTypeUnknown](incalldestinationtype/unknown.md): An unknown call destination.
- [INCallDestinationTypeNormal](incalldestinationtype/normal.md): A call routed to its expected destination.
- [INCallDestinationTypeEmergency](incalldestinationtype/emergency.md): A call routed to an emergency number.
- [INCallDestinationTypeVoicemail](incalldestinationtype/voicemail.md): A call routed to the user’s voicemail.
- [INCallDestinationTypeRedial](incalldestinationtype/redial.md): A call that was the result of redialing a previous call.
- [INCallDestinationTypeCallBack](incalldestinationtype/callback.md): A call that was the result of a call back.
- [INCallDestinationTypeNormalDestination](incalldestinationtype/normaldestination.md): Deprecated. A call routed to its expected destination.
- [INCallDestinationTypeEmergencyDestination](incalldestinationtype/emergencydestination.md): Deprecated. A call routed to an emergency number.
- [INCallDestinationTypeVoicemailDestination](incalldestinationtype/voicemaildestination.md): Deprecated. A call routed to the user’s voicemail.
- [INCallDestinationTypeRedialDestination](incalldestinationtype/redialdestination.md): Deprecated. A call that was the result of redialing a previous call.

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
