> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnsaverequest](https://developer.apple.com/documentation/contacts/cnsaverequest)

# CNSaveRequest (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that collects the changes you want to save to the user’s contacts database.

## Declaration

```swift
class CNSaveRequest
```

<a id="overview"></a>

## Overview

Create a new `CNSaveRequest` object for each save operation you want to make. You can batch multiple changes into one save request (note that these changes only apply to objects). In the case of overlapping changes in multiple or concurrent save requests, the last change wins.

If you try to add an object (that is, a contact or a group) that already exists in the contact store, you receive the [CNError.Code.insertedRecordAlreadyExists](cnerror/code/insertedrecordalreadyexists.md) error and the [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md) array is updated to contain the object you tried to add. If you try to update or delete an object that is not present in the contact store, the save request does not perform the update or deletion, the [CNError.Code.recordDoesNotExist](cnerror/code/recorddoesnotexist.md) error occurs, and the [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md) array is updated to contain the object you tried to update or delete. Do not access objects in the save request while that request is executing.

## Topics

### Saving contact changes

- [add(\_:toContainerWithIdentifier:)](cnsaverequest/add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [update(\_:)](cnsaverequest/update%28__%29-3gaig.md): Updates an existing contact in the contact store.
- [delete(\_:)](cnsaverequest/delete%28__%29-8m1tc.md): Deletes a contact from the contact store.

### Saving group changes

- [add(\_:toContainerWithIdentifier:)](cnsaverequest/add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [update(\_:)](cnsaverequest/update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [delete(\_:)](cnsaverequest/delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember(\_:to:)](cnsaverequest/addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember(\_:from:)](cnsaverequest/removemember%28__from_%29.md): Removes a contact as a member of a group.

### Adding and removing subgroups

- [addSubgroup(\_:to:)](cnsaverequest/addsubgroup%28__to_%29.md): Add the specified group to a parent group.
- [removeSubgroup(\_:from:)](cnsaverequest/removesubgroup%28__from_%29.md): Remove a subgroup from the specified parent group.

### Configuring the save request

- [shouldRefetchContacts](cnsaverequest/shouldrefetchcontacts.md): A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.
- [transactionAuthor](cnsaverequest/transactionauthor.md): A string that identifies the author of the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Fetch and save requests

- [CNContactFetchRequest](cncontactfetchrequest.md): An object that defines the options to use when fetching contacts.
- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNFetchResult](cnfetchresult.md): An object that represents the result of a change-history fetch request.

# CNSaveRequest (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that collects the changes you want to save to the user’s contacts database.

## Declaration

```objectivec
@interface CNSaveRequest : NSObject
```

<a id="overview"></a>

## Overview

Create a new `CNSaveRequest` object for each save operation you want to make. You can batch multiple changes into one save request (note that these changes only apply to objects). In the case of overlapping changes in multiple or concurrent save requests, the last change wins.

If you try to add an object (that is, a contact or a group) that already exists in the contact store, you receive the [CNErrorCodeInsertedRecordAlreadyExists](cnerror/code/insertedrecordalreadyexists.md) error and the [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md) array is updated to contain the object you tried to add. If you try to update or delete an object that is not present in the contact store, the save request does not perform the update or deletion, the [CNErrorCodeRecordDoesNotExist](cnerror/code/recorddoesnotexist.md) error occurs, and the [CNErrorUserInfoAffectedRecordsKey](cnerroruserinfoaffectedrecordskey.md) array is updated to contain the object you tried to update or delete. Do not access objects in the save request while that request is executing.

## Topics

### Saving contact changes

- [addContact:toContainerWithIdentifier:](cnsaverequest/add%28__tocontainerwithidentifier_%29-7eut4.md): Adds the specified contact to the contact store.
- [updateContact:](cnsaverequest/update%28__%29-3gaig.md): Updates an existing contact in the contact store.
- [deleteContact:](cnsaverequest/delete%28__%29-8m1tc.md): Deletes a contact from the contact store.

### Saving group changes

- [addGroup:toContainerWithIdentifier:](cnsaverequest/add%28__tocontainerwithidentifier_%29-4ikaa.md): Adds a group to the contact store.
- [updateGroup:](cnsaverequest/update%28__%29-8h6f6.md): Updates an existing group in the contact store.
- [deleteGroup:](cnsaverequest/delete%28__%29-29lsm.md): Deletes a group from the contact store.
- [addMember:toGroup:](cnsaverequest/addmember%28__to_%29.md): Adds a contact as a member of a group.
- [removeMember:fromGroup:](cnsaverequest/removemember%28__from_%29.md): Removes a contact as a member of a group.

### Adding and removing subgroups

- [addSubgroup:toGroup:](cnsaverequest/addsubgroup%28__to_%29.md): Add the specified group to a parent group.
- [removeSubgroup:fromGroup:](cnsaverequest/removesubgroup%28__from_%29.md): Remove a subgroup from the specified parent group.

### Configuring the save request

- [shouldRefetchContacts](cnsaverequest/shouldrefetchcontacts.md): A Boolean value that indicates whether to refetch the added and updated contacts after the save request executes.
- [transactionAuthor](cnsaverequest/transactionauthor.md): A string that identifies the author of the transaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Fetch and save requests

- [CNContactFetchRequest](cncontactfetchrequest.md): An object that defines the options to use when fetching contacts.
- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNFetchResult](cnfetchresult.md): An object that represents the result of a change-history fetch request.
