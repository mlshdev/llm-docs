> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtype](https://developer.apple.com/documentation/intents/incallrecordtype)

# INCallRecordType (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the type of the call.

## Declaration

```swift
enum INCallRecordType
```

## Topics

### Constants

- [INCallRecordType.unknown](incallrecordtype/unknown.md): An unknown type of call.
- [INCallRecordType.outgoing](incallrecordtype/outgoing.md): A call initiated by the current user.
- [INCallRecordType.missed](incallrecordtype/missed.md): A received call that the user did not answer.
- [INCallRecordType.received](incallrecordtype/received.md): A received call that the user answered.
- [INCallRecordType.latest](incallrecordtype/latest.md): The most recent call involving the user.
- [INCallRecordType.voicemail](incallrecordtype/voicemail.md): A voicemail left from a missed call.
- [INCallRecordType.inProgress](incallrecordtype/inprogress.md): A received call that is currently in progress.
- [INCallRecordType.onHold](incallrecordtype/onhold.md): A received call that the user has put on hold.
- [INCallRecordType.ringing](incallrecordtype/ringing.md): An incoming call that is currently causing the user’s phone to ring.

### Initializers

- [init(rawValue:)](incallrecordtype/init%28rawvalue_%29.md)

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
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.

# INCallRecordType (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the type of the call.

## Declaration

```objectivec
enum INCallRecordType : NSInteger;
```

## Topics

### Constants

- [INCallRecordTypeUnknown](incallrecordtype/unknown.md): An unknown type of call.
- [INCallRecordTypeOutgoing](incallrecordtype/outgoing.md): A call initiated by the current user.
- [INCallRecordTypeMissed](incallrecordtype/missed.md): A received call that the user did not answer.
- [INCallRecordTypeReceived](incallrecordtype/received.md): A received call that the user answered.
- [INCallRecordTypeLatest](incallrecordtype/latest.md): The most recent call involving the user.
- [INCallRecordTypeVoicemail](incallrecordtype/voicemail.md): A voicemail left from a missed call.
- [INCallRecordTypeInProgress](incallrecordtype/inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOnHold](incallrecordtype/onhold.md): A received call that the user has put on hold.
- [INCallRecordTypeRinging](incallrecordtype/ringing.md): An incoming call that is currently causing the user’s phone to ring.

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordTypeOptions](incallrecordtypeoptions.md): Constants describing the types of calls to include during a search.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.
