> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/iscurrentuser](https://developer.apple.com/documentation/eventkit/ekparticipant/iscurrentuser)

# isCurrentUser (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this participant represents the owner of this account.

## Declaration

```swift
var isCurrentUser: Bool { get }
```

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Accessing Participant Properties

- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [url](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

# currentUser (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether this participant represents the owner of this account.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCurrentUser) BOOL currentUser;
```

## See Also

### Related Documentation

- [Calendar and Reminders Programming Guide](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/EventKitProgGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009765)

### Accessing Participant Properties

- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [URL](url.md): The URL representing this participant.
- [contactPredicate](contactpredicate.md): A predicate to use with the Contacts framework to retrieve the corresponding contact instance.
