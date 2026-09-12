> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactfetchrequest](https://developer.apple.com/documentation/contacts/cncontactfetchrequest)

# CNContactFetchRequest (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the options to use when fetching contacts.

## Declaration

```swift
class CNContactFetchRequest
```

<a id="overview"></a>

## Overview

You need at least one contact property key to fetch a contact’s properties. Use this class with the [enumerateContacts(with:usingBlock:)](cncontactstore/enumeratecontacts%28with_usingblock_%29.md) method to execute the contact fetch request.

## Topics

### Creating a Fetch Request

- [init(keysToFetch:)](cncontactfetchrequest/init%28keystofetch_%29.md): Creates a fetch request for the specified keys.
- [CNKeyDescriptor](cnkeydescriptor.md): This protocol is reserved for Contacts framework usage.

### Specifying the Search Predicate

- [predicate](cncontactfetchrequest/predicate.md): The predicate to match contacts against.

### Configuring the Fetch Options

- [mutableObjects](cncontactfetchrequest/mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [unifyResults](cncontactfetchrequest/unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [sortOrder](cncontactfetchrequest/sortorder.md): The sort order for contacts.
- [CNContactSortOrder](cncontactsortorder.md): Indicates the sorting order for contacts.

### Specifying the Keys to Fetch

- [keysToFetch](cncontactfetchrequest/keystofetch.md): The properties to fetch in the returned contacts.

### Initializers

- [init(coder:)](cncontactfetchrequest/init%28coder_%29.md)

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

### Fetch and save requests

- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNFetchResult](cnfetchresult.md): An object that represents the result of a change-history fetch request.
- [CNSaveRequest](cnsaverequest.md): An object that collects the changes you want to save to the user’s contacts database.

# CNContactFetchRequest (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

An object that defines the options to use when fetching contacts.

## Declaration

```objectivec
@interface CNContactFetchRequest : CNFetchRequest
```

<a id="overview"></a>

## Overview

You need at least one contact property key to fetch a contact’s properties. Use this class with the [enumerateContactsWithFetchRequest:error:usingBlock:](cncontactstore/enumeratecontacts%28with_usingblock_%29.md) method to execute the contact fetch request.

## Topics

### Creating a Fetch Request

- [initWithKeysToFetch:](cncontactfetchrequest/init%28keystofetch_%29.md): Creates a fetch request for the specified keys.
- [CNKeyDescriptor](cnkeydescriptor.md): This protocol is reserved for Contacts framework usage.

### Specifying the Search Predicate

- [predicate](cncontactfetchrequest/predicate.md): The predicate to match contacts against.

### Configuring the Fetch Options

- [mutableObjects](cncontactfetchrequest/mutableobjects.md): A Boolean value that indicates whether to return mutable contacts.
- [unifyResults](cncontactfetchrequest/unifyresults.md): A Boolean value that indicates whether to return linked contacts as unified contacts.
- [sortOrder](cncontactfetchrequest/sortorder.md): The sort order for contacts.
- [CNContactSortOrder](cncontactsortorder.md): Indicates the sorting order for contacts.

### Specifying the Keys to Fetch

- [keysToFetch](cncontactfetchrequest/keystofetch.md): The properties to fetch in the returned contacts.

## Relationships

### Inherits From

- [CNFetchRequest](cnfetchrequest.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Fetch and save requests

- [CNFetchRequest](cnfetchrequest.md): The base class for contact fetch requests.
- [CNFetchResult](cnfetchresult.md): An object that represents the result of a change-history fetch request.
- [CNSaveRequest](cnsaverequest.md): An object that collects the changes you want to save to the user’s contacts database.
