> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptions/ringing](https://developer.apple.com/documentation/intents/incallrecordtypeoptions/ringing)

# ringing (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An incoming call that is currently causing the user’s phone to ring.

## Declaration

```swift
static var ringing: INCallRecordTypeOptions { get }
```

## See Also

### Type Properties

- [outgoing](outgoing.md): A call initiated by the user.
- [missed](missed.md): A call received by the user that went unanswered.
- [received](received.md): A received call that the user answered.
- [latest](latest.md): The most recent call involving the user.
- [voicemail](voicemail.md): A voicemail left from a missed call.
- [inProgress](inprogress.md): A received call that is currently in progress.
- [onHold](onhold.md): A received call that the user has put on hold.

# INCallRecordTypeOptionRinging (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An incoming call that is currently causing the user’s phone to ring.

## Declaration

```objectivec
INCallRecordTypeOptionRinging
```

## See Also

### Type Properties

- [INCallRecordTypeOptionOutgoing](outgoing.md): A call initiated by the user.
- [INCallRecordTypeOptionMissed](missed.md): A call received by the user that went unanswered.
- [INCallRecordTypeOptionReceived](received.md): A received call that the user answered.
- [INCallRecordTypeOptionLatest](latest.md): The most recent call involving the user.
- [INCallRecordTypeOptionVoicemail](voicemail.md): A voicemail left from a missed call.
- [INCallRecordTypeOptionInProgress](inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOptionOnHold](onhold.md): A received call that the user has put on hold.
