> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visitremovemember(_:)](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visitremovemember(_:))

# visitRemoveMember(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user removed a contact from a group.

## Declaration

```swift
optional func visitRemoveMember(_ event: CNChangeHistoryRemoveMemberFromGroupEvent)
```

## Parameters

- `event`: The event object that represents a user removing a contact from a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts in groups

- [visitAddMember(\_:)](visitaddmember%28__%29.md): Tells the delegate that the user added a contact to a group.

# visitRemoveMemberFromGroupEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user removed a contact from a group.

## Declaration

```objectivec
- (void) visitRemoveMemberFromGroupEvent:(CNChangeHistoryRemoveMemberFromGroupEvent *) event;
```

## Parameters

- `event`: The event object that represents a user removing a contact from a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts in groups

- [visitAddMemberToGroupEvent:](visitaddmember%28__%29.md): Tells the delegate that the user added a contact to a group.
