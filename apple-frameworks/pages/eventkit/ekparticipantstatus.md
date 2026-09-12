> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipantstatus](https://developer.apple.com/documentation/eventkit/ekparticipantstatus)

# EKParticipantStatus (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s attendance status for an event.

## Declaration

```swift
enum EKParticipantStatus
```

## Topics

### Constants

- [EKParticipantStatus.unknown](ekparticipantstatus/unknown.md): The participant’s attendance status is unknown.
- [EKParticipantStatus.pending](ekparticipantstatus/pending.md): The participant has yet to respond to the event.
- [EKParticipantStatus.accepted](ekparticipantstatus/accepted.md): The participant has accepted the event.
- [EKParticipantStatus.declined](ekparticipantstatus/declined.md): The participant has declined the event.
- [EKParticipantStatus.tentative](ekparticipantstatus/tentative.md): The participant’s attendance status is tentative.
- [EKParticipantStatus.delegated](ekparticipantstatus/delegated.md): The participant has delegated attendance to another participant.
- [EKParticipantStatus.completed](ekparticipantstatus/completed.md): The participant’s event has completed.
- [EKParticipantStatus.inProcess](ekparticipantstatus/inprocess.md): The participant’s event is currently in process.

### Initializers

- [init(rawValue:)](ekparticipantstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining Participants

- [EKParticipantRole](ekparticipantrole.md): The participant’s role for an event.
- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.

# EKParticipantStatus (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s attendance status for an event.

## Declaration

```objectivec
enum EKParticipantStatus : NSInteger;
```

## Topics

### Constants

- [EKParticipantStatusUnknown](ekparticipantstatus/unknown.md): The participant’s attendance status is unknown.
- [EKParticipantStatusPending](ekparticipantstatus/pending.md): The participant has yet to respond to the event.
- [EKParticipantStatusAccepted](ekparticipantstatus/accepted.md): The participant has accepted the event.
- [EKParticipantStatusDeclined](ekparticipantstatus/declined.md): The participant has declined the event.
- [EKParticipantStatusTentative](ekparticipantstatus/tentative.md): The participant’s attendance status is tentative.
- [EKParticipantStatusDelegated](ekparticipantstatus/delegated.md): The participant has delegated attendance to another participant.
- [EKParticipantStatusCompleted](ekparticipantstatus/completed.md): The participant’s event has completed.
- [EKParticipantStatusInProcess](ekparticipantstatus/inprocess.md): The participant’s event is currently in process.

## See Also

### Defining Participants

- [EKParticipantRole](ekparticipantrole.md): The participant’s role for an event.
- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.
