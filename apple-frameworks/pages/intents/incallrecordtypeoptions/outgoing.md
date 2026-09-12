> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptions/outgoing](https://developer.apple.com/documentation/intents/incallrecordtypeoptions/outgoing)

# outgoing (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

A call initiated by the user.

## Declaration

```swift
static var outgoing: INCallRecordTypeOptions { get }
```

## See Also

### Type Properties

- [missed](missed.md): A call received by the user that went unanswered.
- [received](received.md): A received call that the user answered.
- [latest](latest.md): The most recent call involving the user.
- [voicemail](voicemail.md): A voicemail left from a missed call.
- [ringing](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [inProgress](inprogress.md): A received call that is currently in progress.
- [onHold](onhold.md): A received call that the user has put on hold.

# INCallRecordTypeOptionOutgoing (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 3.2+

A call initiated by the user.

## Declaration

```objectivec
INCallRecordTypeOptionOutgoing
```

## See Also

### Type Properties

- [INCallRecordTypeOptionMissed](missed.md): A call received by the user that went unanswered.
- [INCallRecordTypeOptionReceived](received.md): A received call that the user answered.
- [INCallRecordTypeOptionLatest](latest.md): The most recent call involving the user.
- [INCallRecordTypeOptionVoicemail](voicemail.md): A voicemail left from a missed call.
- [INCallRecordTypeOptionRinging](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [INCallRecordTypeOptionInProgress](inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOptionOnHold](onhold.md): A received call that the user has put on hold.
