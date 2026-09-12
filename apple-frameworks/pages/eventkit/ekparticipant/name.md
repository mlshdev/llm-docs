> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/name](https://developer.apple.com/documentation/eventkit/ekparticipant/name)

# name (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s name.

## Declaration

```swift
var name: String? { get }
```

## See Also

### Accessing Participant Properties

- [isCurrentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [url](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

# name (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

The participant’s name.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * name;
```

## See Also

### Accessing Participant Properties

- [currentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [URL](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.
