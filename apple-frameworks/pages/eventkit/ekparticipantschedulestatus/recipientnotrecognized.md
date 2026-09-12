> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipantschedulestatus/recipientnotrecognized](https://developer.apple.com/documentation/eventkit/ekparticipantschedulestatus/recipientnotrecognized)

# EKParticipantScheduleStatus.recipientNotRecognized (Swift)

**Framework:** EventKit  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The invitation wasn’t delivered because the source doesn’t recognize the recipient.

## Declaration

```swift
case recipientNotRecognized
```

## See Also

### Constants

- [EKParticipantScheduleStatus.none](none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatus.pending](pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatus.sent](sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatus.delivered](delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatus.noPrivileges](noprivileges.md): The invitation wasn’t delivered because of insufficient privileges.
- [EKParticipantScheduleStatus.deliveryFailed](deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatus.cannotDeliver](cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatus.recipientNotAllowed](recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.

# EKParticipantScheduleStatusRecipientNotRecognized (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The invitation wasn’t delivered because the source doesn’t recognize the recipient.

## Declaration

```objectivec
EKParticipantScheduleStatusRecipientNotRecognized
```

## See Also

### Constants

- [EKParticipantScheduleStatusNone](none.md): The invitation hasn’t been sent yet.
- [EKParticipantScheduleStatusPending](pending.md): The invitation is in the process of being sent.
- [EKParticipantScheduleStatusSent](sent.md): The invitation has been sent, but it’s unclear if it was successfully delivered.
- [EKParticipantScheduleStatusDelivered](delivered.md): The invitation has been sent and successfully delivered.
- [EKParticipantScheduleStatusNoPrivileges](noprivileges.md): The invitation wasn’t delivered because of insufficient privileges.
- [EKParticipantScheduleStatusDeliveryFailed](deliveryfailed.md): The invitation wasn’t delivered due to a temporary failure.
- [EKParticipantScheduleStatusCannotDeliver](cannotdeliver.md): The invitation wasn’t delivered because the system is unsure of how to deliver it.
- [EKParticipantScheduleStatusRecipientNotAllowed](recipientnotallowed.md): The invitation wasn’t delivered because scheduling with the participant isn’t allowed.
