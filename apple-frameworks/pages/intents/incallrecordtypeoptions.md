> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptions](https://developer.apple.com/documentation/intents/incallrecordtypeoptions)

# INCallRecordTypeOptions (Swift)

**Framework:** Intents  
**Kind:** Structure  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the types of calls to include during a search.

## Declaration

```swift
struct INCallRecordTypeOptions
```

## Topics

### Type Properties

- [outgoing](incallrecordtypeoptions/outgoing.md): A call initiated by the user.
- [missed](incallrecordtypeoptions/missed.md): A call received by the user that went unanswered.
- [received](incallrecordtypeoptions/received.md): A received call that the user answered.
- [latest](incallrecordtypeoptions/latest.md): The most recent call involving the user.
- [voicemail](incallrecordtypeoptions/voicemail.md): A voicemail left from a missed call.
- [ringing](incallrecordtypeoptions/ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [inProgress](incallrecordtypeoptions/inprogress.md): A received call that is currently in progress.
- [onHold](incallrecordtypeoptions/onhold.md): A received call that the user has put on hold.

### Initializers

- [init(rawValue:)](incallrecordtypeoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.

# INCallRecordTypeOptions (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

Constants describing the types of calls to include during a search.

## Declaration

```objectivec
enum INCallRecordTypeOptions : NSUInteger;
```

## Topics

### Type Properties

- [INCallRecordTypeOptionOutgoing](incallrecordtypeoptions/outgoing.md): A call initiated by the user.
- [INCallRecordTypeOptionMissed](incallrecordtypeoptions/missed.md): A call received by the user that went unanswered.
- [INCallRecordTypeOptionReceived](incallrecordtypeoptions/received.md): A received call that the user answered.
- [INCallRecordTypeOptionLatest](incallrecordtypeoptions/latest.md): The most recent call involving the user.
- [INCallRecordTypeOptionVoicemail](incallrecordtypeoptions/voicemail.md): A voicemail left from a missed call.
- [INCallRecordTypeOptionRinging](incallrecordtypeoptions/ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [INCallRecordTypeOptionInProgress](incallrecordtypeoptions/inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOptionOnHold](incallrecordtypeoptions/onhold.md): A received call that the user has put on hold.

## See Also

### Describing a Call

- [INCallRecord](incallrecord.md): The details about a call handled by your app.
- [INCallGroup](incallgroup.md): The details of a group call handled by your app.
- [INCallRecordFilter](incallrecordfilter.md): Filters a user specifies to redial a call.
- [INCallRecordType](incallrecordtype.md): Constants describing the type of the call.
- [INCallDestinationType](incalldestinationtype.md): Constants describing the destination of a call.
