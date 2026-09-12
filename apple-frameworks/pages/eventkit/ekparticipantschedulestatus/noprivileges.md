> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipantschedulestatus/noprivileges](https://developer.apple.com/documentation/eventkit/ekparticipantschedulestatus/noprivileges)

# EKParticipantScheduleStatus.noPrivileges (Swift)

**Framework:** EventKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The invitation wasn’t delivered because of insufficient privileges.

## Declaration

```swift
case noPrivileges
```

## See Also

### Constants

- [EKParticipantScheduleStatus.none](none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatus.pending](pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatus.sent](sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatus.delivered](delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatus.recipientNotRecognized](recipientnotrecognized.md): The invitation wasn’t delivered because the source doesn’t recognize the recipient.
- [EKParticipantScheduleStatus.deliveryFailed](deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatus.cannotDeliver](cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatus.recipientNotAllowed](recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.

# EKParticipantScheduleStatusNoPrivileges (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The invitation wasn’t delivered because of insufficient privileges.

## Declaration

```objectivec
EKParticipantScheduleStatusNoPrivileges
```

## See Also

### Constants

- [EKParticipantScheduleStatusNone](none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatusPending](pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatusSent](sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatusDelivered](delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatusRecipientNotRecognized](recipientnotrecognized.md): The invitation wasn’t delivered because the source doesn’t recognize the recipient.
- [EKParticipantScheduleStatusDeliveryFailed](deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatusCannotDeliver](cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatusRecipientNotAllowed](recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.
