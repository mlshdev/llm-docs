> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekparticipant/contactpredicate](https://developer.apple.com/documentation/eventkit/ekparticipant/contactpredicate)

# contactPredicate (Swift)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

## Declaration

```swift
var contactPredicate: NSPredicate { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to get a predicate that you can use with a [CNContactStore](../../contacts/cncontactstore.md) to fetch a [CNContact](../../contacts/cncontact.md) instance for this participant, if one exists.

## See Also

### Accessing Participant Properties

- [isCurrentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [url](url.md): The URL representing this participant.

# contactPredicate (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

A predicate to use with the Contacts framework to retrieve the corresponding contact instance.

## Declaration

```objectivec
@property (nonatomic, readonly) NSPredicate * contactPredicate;
```

<a id="Discussion"></a>

## Discussion

Use this property to get a predicate that you can use with a [CNContactStore](../../contacts/cncontactstore.md) to fetch a [CNContact](../../contacts/cncontact.md) instance for this participant, if one exists.

## See Also

### Accessing Participant Properties

- [currentUser](iscurrentuser.md): A Boolean value indicating whether this participant represents the owner of this account.
- [name](name.md): The participant’s name.
- [participantRole](participantrole.md): The participant’s role in the event.
- [participantStatus](participantstatus.md): The participant’s attendance status.
- [participantType](participanttype.md): The participant’s type.
- [URL](url.md): The URL representing this participant.
