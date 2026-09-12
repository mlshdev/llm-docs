> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/participanttype](https://developer.apple.com/documentation/eventkit/ekparticipant/participanttype)

# participantType (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s type.

## Declaration

```swift
var participantType: EKParticipantType { get }
```

## See Also

### Related Documentation

- [EKParticipantType](../ekparticipanttype.md): The type of participant.

### Accessing Participant Properties

- [isCurrentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [url](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

# participantType (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s type.

## Declaration

```objectivec
@property (nonatomic, readonly) EKParticipantType participantType;
```

## See Also

### Related Documentation

- [EKParticipantType](../ekparticipanttype.md): The type of participant.

### Accessing Participant Properties

- [currentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [URL](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.
