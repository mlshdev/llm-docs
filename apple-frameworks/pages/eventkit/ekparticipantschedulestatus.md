> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipantschedulestatus](https://developer.apple.com/documentation/eventkit/ekparticipantschedulestatus)

# EKParticipantScheduleStatus (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s scheduled status.

## Declaration

```swift
enum EKParticipantScheduleStatus
```

## Topics

### Constants

- [EKParticipantScheduleStatus.none](ekparticipantschedulestatus/none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatus.pending](ekparticipantschedulestatus/pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatus.sent](ekparticipantschedulestatus/sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatus.delivered](ekparticipantschedulestatus/delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatus.recipientNotRecognized](ekparticipantschedulestatus/recipientnotrecognized.md): The invitation wasn’t delivered because the source doesn’t recognize the recipient.
- [EKParticipantScheduleStatus.noPrivileges](ekparticipantschedulestatus/noprivileges.md): The invitation wasn’t delivered because of insufficient privileges.
- [EKParticipantScheduleStatus.deliveryFailed](ekparticipantschedulestatus/deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatus.cannotDeliver](ekparticipantschedulestatus/cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatus.recipientNotAllowed](ekparticipantschedulestatus/recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.

### Initializers

- [init(rawValue:)](ekparticipantschedulestatus/init%28rawvalue_%29.md)

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
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.

# EKParticipantScheduleStatus (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s scheduled status.

## Declaration

```objectivec
enum EKParticipantScheduleStatus : NSInteger;
```

## Topics

### Constants

- [EKParticipantScheduleStatusNone](ekparticipantschedulestatus/none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatusPending](ekparticipantschedulestatus/pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatusSent](ekparticipantschedulestatus/sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatusDelivered](ekparticipantschedulestatus/delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatusRecipientNotRecognized](ekparticipantschedulestatus/recipientnotrecognized.md): The invitation wasn’t delivered because the source doesn’t recognize the recipient.
- [EKParticipantScheduleStatusNoPrivileges](ekparticipantschedulestatus/noprivileges.md): The invitation wasn’t delivered because of insufficient privileges.
- [EKParticipantScheduleStatusDeliveryFailed](ekparticipantschedulestatus/deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatusCannotDeliver](ekparticipantschedulestatus/cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatusRecipientNotAllowed](ekparticipantschedulestatus/recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.

## See Also

### Defining Participants

- [EKParticipantRole](ekparticipantrole.md): The participant’s role for an event.
- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.
