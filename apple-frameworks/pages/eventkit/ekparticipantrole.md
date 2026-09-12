> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipantrole](https://developer.apple.com/documentation/eventkit/ekparticipantrole)

# EKParticipantRole (Swift)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s role for an event.

## Declaration

```swift
enum EKParticipantRole
```

## Topics

### Constants

- [EKParticipantRole.unknown](ekparticipantrole/unknown.md): The participant’s role is unknown.
- [EKParticipantRole.required](ekparticipantrole/required.md): The participant’s attendance is required.
- [EKParticipantRole.optional](ekparticipantrole/optional.md): The participant’s attendance is optional.
- [EKParticipantRole.chair](ekparticipantrole/chair.md): The participant is the chair of the event.
- [EKParticipantRole.nonParticipant](ekparticipantrole/nonparticipant.md): The participant does not have an active role in the event.

### Initializers

- [init(rawValue:)](ekparticipantrole/init%28rawvalue_%29.md)

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

- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.

# EKParticipantRole (Objective-C)

**Framework:** EventKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The participant’s role for an event.

## Declaration

```objectivec
enum EKParticipantRole : NSInteger;
```

## Topics

### Constants

- [EKParticipantRoleUnknown](ekparticipantrole/unknown.md): The participant’s role is unknown.
- [EKParticipantRoleRequired](ekparticipantrole/required.md): The participant’s attendance is required.
- [EKParticipantRoleOptional](ekparticipantrole/optional.md): The participant’s attendance is optional.
- [EKParticipantRoleChair](ekparticipantrole/chair.md): The participant is the chair of the event.
- [EKParticipantRoleNonParticipant](ekparticipantrole/nonparticipant.md): The participant does not have an active role in the event.

## See Also

### Defining Participants

- [EKParticipantType](ekparticipanttype.md): The type of participant.
- [EKParticipantStatus](ekparticipantstatus.md): The participant’s attendance status for an event.
- [EKParticipantScheduleStatus](ekparticipantschedulestatus.md): The participant’s scheduled status.
