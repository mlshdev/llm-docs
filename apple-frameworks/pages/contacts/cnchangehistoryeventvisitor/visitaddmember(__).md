> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor/visitaddmember(_:)](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor/visitaddmember(_:))

# visitAddMember(\_:) (Swift)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a contact to a group.

## Declaration

```swift
optional func visitAddMember(_ event: CNChangeHistoryAddMemberToGroupEvent)
```

## Parameters

- `event`: The event object that represents a user adding a contact to a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts in groups

- [visitRemoveMember(\_:)](visitremovemember%28__%29.md): Tells the delegate that the user removed a contact from a group.

# visitAddMemberToGroupEvent: (Objective-C)

**Framework:** Contacts  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

Tells the delegate that the user added a contact to a group.

## Declaration

```objectivec
- (void) visitAddMemberToGroupEvent:(CNChangeHistoryAddMemberToGroupEvent *) event;
```

## Parameters

- `event`: The event object that represents a user adding a contact to a group.

<a id="Discussion"></a>

## Discussion

Inspect the group and contact in the event that the system provides and update your app’s cached data accordingly.

## See Also

### Updating contacts in groups

- [visitRemoveMemberFromGroupEvent:](visitremovemember%28__%29.md): Tells the delegate that the user removed a contact from a group.
