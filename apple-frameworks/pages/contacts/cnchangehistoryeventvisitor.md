> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryeventvisitor](https://developer.apple.com/documentation/contacts/cnchangehistoryeventvisitor)

# CNChangeHistoryEventVisitor (Swift)

**Framework:** Contacts  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An interface for receiving notice of changes to contacts and groups.

## Declaration

```swift
protocol CNChangeHistoryEventVisitor : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement this protocol to receive events that describe when a user adds, updates, or deletes contacts or groups outside your app.

## Topics

### Updating contacts

- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-9w73y.md): Tells the delegate that the user added a contact.
- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-1pf2a.md): Tells the delegate that the user updated a contact.
- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-ci4z.md): Tells the delegate that the user deleted a contact.

### Updating groups

- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-ve62.md): Tells the delegate that the user added a group.
- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-23p9h.md): Tells the delegate that the user updated a group.
- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-82duo.md): Tells the delegate that the user deleted a group.

### Updating subgroups

- [visitAddSubgroup(\_:)](cnchangehistoryeventvisitor/visitaddsubgroup%28__%29.md): Tells the delegate that the user added a subgroup to a group.
- [visitRemoveSubgroup(\_:)](cnchangehistoryeventvisitor/visitremovesubgroup%28__%29.md): Tells the delegate that the user removed a subgroup from a group.

### Updating contacts in groups

- [visitAddMember(\_:)](cnchangehistoryeventvisitor/visitaddmember%28__%29.md): Tells the delegate that the user added a contact to a group.
- [visitRemoveMember(\_:)](cnchangehistoryeventvisitor/visitremovemember%28__%29.md): Tells the delegate that the user removed a contact from a group.

### Resetting synced data

- [visit(\_:)](cnchangehistoryeventvisitor/visit%28__%29-2yhz3.md): Tells the delegate to drop all contacts and groups before handling more events.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

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
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.

# CNChangeHistoryEventVisitor (Objective-C)

**Framework:** Contacts  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An interface for receiving notice of changes to contacts and groups.

## Declaration

```objectivec
@protocol CNChangeHistoryEventVisitor <NSObject>
```

<a id="overview"></a>

## Overview

Implement this protocol to receive events that describe when a user adds, updates, or deletes contacts or groups outside your app.

## Topics

### Updating contacts

- [visitAddContactEvent:](cnchangehistoryeventvisitor/visit%28__%29-9w73y.md): Tells the delegate that the user added a contact.
- [visitUpdateContactEvent:](cnchangehistoryeventvisitor/visit%28__%29-1pf2a.md): Tells the delegate that the user updated a contact.
- [visitDeleteContactEvent:](cnchangehistoryeventvisitor/visit%28__%29-ci4z.md): Tells the delegate that the user deleted a contact.

### Updating groups

- [visitAddGroupEvent:](cnchangehistoryeventvisitor/visit%28__%29-ve62.md): Tells the delegate that the user added a group.
- [visitUpdateGroupEvent:](cnchangehistoryeventvisitor/visit%28__%29-23p9h.md): Tells the delegate that the user updated a group.
- [visitDeleteGroupEvent:](cnchangehistoryeventvisitor/visit%28__%29-82duo.md): Tells the delegate that the user deleted a group.

### Updating subgroups

- [visitAddSubgroupToGroupEvent:](cnchangehistoryeventvisitor/visitaddsubgroup%28__%29.md): Tells the delegate that the user added a subgroup to a group.
- [visitRemoveSubgroupFromGroupEvent:](cnchangehistoryeventvisitor/visitremovesubgroup%28__%29.md): Tells the delegate that the user removed a subgroup from a group.

### Updating contacts in groups

- [visitAddMemberToGroupEvent:](cnchangehistoryeventvisitor/visitaddmember%28__%29.md): Tells the delegate that the user added a contact to a group.
- [visitRemoveMemberFromGroupEvent:](cnchangehistoryeventvisitor/visitremovemember%28__%29.md): Tells the delegate that the user removed a contact from a group.

### Resetting synced data

- [visitDropEverythingEvent:](cnchangehistoryeventvisitor/visit%28__%29-2yhz3.md): Tells the delegate to drop all contacts and groups before handling more events.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

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
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
