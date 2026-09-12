> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryevent](https://developer.apple.com/documentation/contacts/cnchangehistoryevent)

# CNChangeHistoryEvent (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents the user adding, updating, or deleting a contact or group.

## Declaration

```swift
class CNChangeHistoryEvent
```

## Topics

### Processing an event

- [accept(\_:)](cnchangehistoryevent/accept%28__%29.md): Forwards the event to the delegate you provide to process the change-history event.

### Initializers

- [init(coder:)](cnchangehistoryevent/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNChangeHistoryAddContactEvent](cnchangehistoryaddcontactevent.md)
- [CNChangeHistoryAddGroupEvent](cnchangehistoryaddgroupevent.md)
- [CNChangeHistoryAddMemberToGroupEvent](cnchangehistoryaddmembertogroupevent.md)
- [CNChangeHistoryAddSubgroupToGroupEvent](cnchangehistoryaddsubgrouptogroupevent.md)
- [CNChangeHistoryDeleteContactEvent](cnchangehistorydeletecontactevent.md)
- [CNChangeHistoryDeleteGroupEvent](cnchangehistorydeletegroupevent.md)
- [CNChangeHistoryDropEverythingEvent](cnchangehistorydropeverythingevent.md)
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md)
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md)
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md)
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md)

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
- [CNChangeHistoryFetchRequest](cnchangehistoryfetchrequest.md): An object that specifies the criteria for fetching change history.
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.

# CNChangeHistoryEvent (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that represents the user adding, updating, or deleting a contact or group.

## Declaration

```objectivec
@interface CNChangeHistoryEvent : NSObject
```

## Topics

### Processing an event

- [acceptEventVisitor:](cnchangehistoryevent/accept%28__%29.md): Forwards the event to the delegate you provide to process the change-history event.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [CNChangeHistoryAddContactEvent](cnchangehistoryaddcontactevent.md)
- [CNChangeHistoryAddGroupEvent](cnchangehistoryaddgroupevent.md)
- [CNChangeHistoryAddMemberToGroupEvent](cnchangehistoryaddmembertogroupevent.md)
- [CNChangeHistoryAddSubgroupToGroupEvent](cnchangehistoryaddsubgrouptogroupevent.md)
- [CNChangeHistoryDeleteContactEvent](cnchangehistorydeletecontactevent.md)
- [CNChangeHistoryDeleteGroupEvent](cnchangehistorydeletegroupevent.md)
- [CNChangeHistoryDropEverythingEvent](cnchangehistorydropeverythingevent.md)
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md)
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md)
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md)
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
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
- [CNChangeHistoryFetchRequest](cnchangehistoryfetchrequest.md): An object that specifies the criteria for fetching change history.
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.
