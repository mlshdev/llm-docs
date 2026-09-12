> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryremovememberfromgroupevent](https://developer.apple.com/documentation/contacts/cnchangehistoryremovememberfromgroupevent)

# CNChangeHistoryRemoveMemberFromGroupEvent (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a user removing a contact from a group.

## Declaration

```swift
class CNChangeHistoryRemoveMemberFromGroupEvent
```

## Topics

### Getting event details

- [group](cnchangehistoryremovememberfromgroupevent/group.md): The group where the user removed a contact.
- [member](cnchangehistoryremovememberfromgroupevent/member.md): The contact that the user removed from the group.

## Relationships

### Inherits From

- [CNChangeHistoryEvent](cnchangehistoryevent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Change history data

- [CNChangeHistoryAddContactEvent](cnchangehistoryaddcontactevent.md): An object that represents a user adding a contact.
- [CNChangeHistoryAddGroupEvent](cnchangehistoryaddgroupevent.md): An object that represents a user adding a group.
- [CNChangeHistoryAddMemberToGroupEvent](cnchangehistoryaddmembertogroupevent.md): An object that represents a user adding a contact to a group.
- [CNChangeHistoryAddSubgroupToGroupEvent](cnchangehistoryaddsubgrouptogroupevent.md): An object that represents a user adding a subgroup to a group.
- [CNChangeHistoryDeleteContactEvent](cnchangehistorydeletecontactevent.md): An object that represents a user deleting a contact.
- [CNChangeHistoryDeleteGroupEvent](cnchangehistorydeletegroupevent.md): An object that represents a user deleting a group.
- [CNChangeHistoryDropEverythingEvent](cnchangehistorydropeverythingevent.md): An object that indicates the delegate should drop all contacts and groups before handling change events.
- [CNChangeHistoryEvent](cnchangehistoryevent.md): An object that represents the user adding, updating, or deleting a contact or group.
- [CNChangeHistoryFetchRequest](cnchangehistoryfetchrequest.md): An object that specifies the criteria for fetching change history.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.

# CNChangeHistoryRemoveMemberFromGroupEvent (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a user removing a contact from a group.

## Declaration

```objectivec
@interface CNChangeHistoryRemoveMemberFromGroupEvent : CNChangeHistoryEvent
```

## Topics

### Getting event details

- [group](cnchangehistoryremovememberfromgroupevent/group.md): The group where the user removed a contact.
- [member](cnchangehistoryremovememberfromgroupevent/member.md): The contact that the user removed from the group.

## Relationships

### Inherits From

- [CNChangeHistoryEvent](cnchangehistoryevent.md)

## See Also

### Change history data

- [CNChangeHistoryAddContactEvent](cnchangehistoryaddcontactevent.md): An object that represents a user adding a contact.
- [CNChangeHistoryAddGroupEvent](cnchangehistoryaddgroupevent.md): An object that represents a user adding a group.
- [CNChangeHistoryAddMemberToGroupEvent](cnchangehistoryaddmembertogroupevent.md): An object that represents a user adding a contact to a group.
- [CNChangeHistoryAddSubgroupToGroupEvent](cnchangehistoryaddsubgrouptogroupevent.md): An object that represents a user adding a subgroup to a group.
- [CNChangeHistoryDeleteContactEvent](cnchangehistorydeletecontactevent.md): An object that represents a user deleting a contact.
- [CNChangeHistoryDeleteGroupEvent](cnchangehistorydeletegroupevent.md): An object that represents a user deleting a group.
- [CNChangeHistoryDropEverythingEvent](cnchangehistorydropeverythingevent.md): An object that indicates the delegate should drop all contacts and groups before handling change events.
- [CNChangeHistoryEvent](cnchangehistoryevent.md): An object that represents the user adding, updating, or deleting a contact or group.
- [CNChangeHistoryFetchRequest](cnchangehistoryfetchrequest.md): An object that specifies the criteria for fetching change history.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.
