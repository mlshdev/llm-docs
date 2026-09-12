> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptions/voicemail](https://developer.apple.com/documentation/intents/incallrecordtypeoptions/voicemail)

# voicemail (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A voicemail left from a missed call.

## Declaration

```swift
static var voicemail: INCallRecordTypeOptions { get }
```

## See Also

### Type Properties

- [outgoing](outgoing.md): A call initiated by the user.
- [missed](missed.md): A call received by the user that went unanswered.
- [received](received.md): A received call that the user answered.
- [latest](latest.md): The most recent call involving the user.
- [ringing](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [inProgress](inprogress.md): A received call that is currently in progress.
- [onHold](onhold.md): A received call that the user has put on hold.

# INCallRecordTypeOptionVoicemail (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A voicemail left from a missed call.

## Declaration

```objectivec
INCallRecordTypeOptionVoicemail
```

## See Also

### Type Properties

- [INCallRecordTypeOptionOutgoing](outgoing.md): A call initiated by the user.
- [INCallRecordTypeOptionMissed](missed.md): A call received by the user that went unanswered.
- [INCallRecordTypeOptionReceived](received.md): A received call that the user answered.
- [INCallRecordTypeOptionLatest](latest.md): The most recent call involving the user.
- [INCallRecordTypeOptionRinging](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [INCallRecordTypeOptionInProgress](inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOptionOnHold](onhold.md): A received call that the user has put on hold.
