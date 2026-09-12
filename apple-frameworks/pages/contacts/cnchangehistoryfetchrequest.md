> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnchangehistoryfetchrequest](https://developer.apple.com/documentation/contacts/cnchangehistoryfetchrequest)

# CNChangeHistoryFetchRequest (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that specifies the criteria for fetching change history.

## Declaration

```swift
class CNChangeHistoryFetchRequest
```

<a id="overview"></a>

## Overview

The system always returns changes to contacts. The system coalesces changes to remove redundant adds, updates, and deletes.

Create and configure a fetch request, then call [enumeratorForChangeHistoryFetchRequest:error:](cncontactstore/enumeratorforchangehistoryfetchrequest_error_.md) to process changes.

## Topics

### Configuring the fetch request

- [additionalContactKeyDescriptors](cnchangehistoryfetchrequest/additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](cnchangehistoryfetchrequest/excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](cnchangehistoryfetchrequest/includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](cnchangehistoryfetchrequest/mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](cnchangehistoryfetchrequest/shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](cnchangehistoryfetchrequest/startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

### Initializers

- [init(coder:)](cnchangehistoryfetchrequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [CNFetchRequest](cnfetchrequest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
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
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.

# CNChangeHistoryFetchRequest (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that specifies the criteria for fetching change history.

## Declaration

```objectivec
@interface CNChangeHistoryFetchRequest : CNFetchRequest
```

<a id="overview"></a>

## Overview

The system always returns changes to contacts. The system coalesces changes to remove redundant adds, updates, and deletes.

Create and configure a fetch request, then call [enumeratorForChangeHistoryFetchRequest:error:](cncontactstore/enumeratorforchangehistoryfetchrequest_error_.md) to process changes.

## Topics

### Configuring the fetch request

- [additionalContactKeyDescriptors](cnchangehistoryfetchrequest/additionalcontactkeydescriptors.md): An array of contact property keys or key descriptors from contact objects to fetch in the returned contacts.
- [excludedTransactionAuthors](cnchangehistoryfetchrequest/excludedtransactionauthors.md): An array of strings that identify transaction authors to exclude from the fetch results.
- [includeGroupChanges](cnchangehistoryfetchrequest/includegroupchanges.md): A Boolean value that indicates whether the fetch should also return group changes.
- [mutableObjects](cnchangehistoryfetchrequest/mutableobjects.md): A Boolean value that indicates whether the fetch should return mutable contacts and groups.
- [shouldUnifyResults](cnchangehistoryfetchrequest/shouldunifyresults.md): A Boolean value that indicates whether the fetch should return contact changes as unified contacts.
- [startingToken](cnchangehistoryfetchrequest/startingtoken.md): An opaque token that indicates a point in history in the user’s Contacts database.

## Relationships

### Inherits From

- [CNFetchRequest](cnfetchrequest.md)

### Conforms To

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
- [CNChangeHistoryRemoveMemberFromGroupEvent](cnchangehistoryremovememberfromgroupevent.md): An object that represents a user removing a contact from a group.
- [CNChangeHistoryRemoveSubgroupFromGroupEvent](cnchangehistoryremovesubgroupfromgroupevent.md): An object that represents a user removing a subgroup from a group.
- [CNChangeHistoryUpdateContactEvent](cnchangehistoryupdatecontactevent.md): An object that represents a user updating a contact.
- [CNChangeHistoryUpdateGroupEvent](cnchangehistoryupdategroupevent.md): An object that represents an updated group event.
- [CNChangeHistoryEventVisitor](cnchangehistoryeventvisitor.md): An interface for receiving notice of changes to contacts and groups.
