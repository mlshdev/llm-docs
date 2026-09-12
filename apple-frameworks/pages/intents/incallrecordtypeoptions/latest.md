> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallrecordtypeoptions/latest](https://developer.apple.com/documentation/intents/incallrecordtypeoptions/latest)

# latest (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The most recent call involving the user.

## Declaration

```swift
static var latest: INCallRecordTypeOptions { get }
```

## See Also

### Type Properties

- [outgoing](outgoing.md): A call initiated by the user.
- [missed](missed.md): A call received by the user that went unanswered.
- [received](received.md): A received call that the user answered.
- [voicemail](voicemail.md): A voicemail left from a missed call.
- [ringing](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [inProgress](inprogress.md): A received call that is currently in progress.
- [onHold](onhold.md): A received call that the user has put on hold.

# INCallRecordTypeOptionLatest (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

The most recent call involving the user.

## Declaration

```objectivec
INCallRecordTypeOptionLatest
```

## See Also

### Type Properties

- [INCallRecordTypeOptionOutgoing](outgoing.md): A call initiated by the user.
- [INCallRecordTypeOptionMissed](missed.md): A call received by the user that went unanswered.
- [INCallRecordTypeOptionReceived](received.md): A received call that the user answered.
- [INCallRecordTypeOptionVoicemail](voicemail.md): A voicemail left from a missed call.
- [INCallRecordTypeOptionRinging](ringing.md): An incoming call that is currently causing the user’s phone to ring.
- [INCallRecordTypeOptionInProgress](inprogress.md): A received call that is currently in progress.
- [INCallRecordTypeOptionOnHold](onhold.md): A received call that the user has put on hold.
