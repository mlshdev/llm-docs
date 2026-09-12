> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/participantstatus](https://developer.apple.com/documentation/eventkit/ekparticipant/participantstatus)

# participantStatus (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s attendance status.

## Declaration

```swift
var participantStatus: EKParticipantStatus { get }
```

## See Also

### Related Documentation

- [EKParticipantStatus](../ekparticipantstatus.md): The participant’s attendance status for an event.

### Accessing Participant Properties

- [isCurrentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantType](participanttype.md): The participant’s type.
- [url](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

# participantStatus (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s attendance status.

## Declaration

```objectivec
@property (nonatomic, readonly) EKParticipantStatus participantStatus;
```

## See Also

### Related Documentation

- [EKParticipantStatus](../ekparticipantstatus.md): The participant’s attendance status for an event.

### Accessing Participant Properties

- [currentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantType](participanttype.md): The participant’s type.
- [URL](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.
