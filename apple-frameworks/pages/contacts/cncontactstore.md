> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cncontactstore](https://developer.apple.com/documentation/contacts/cncontactstore)

# CNContactStore (Swift)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The object that fetches and saves contacts, groups, and containers from the user’s Contacts database.

## Declaration

```swift
class CNContactStore
```

## Mentioned In

- [Accessing the contact store](accessing-the-contact-store.md)

<a id="overview"></a>

## Overview

The `CNContactStore` object represents the user’s contacts store database, and you use it to fetch information from that database and save changes back to it. There are a few recommended ways you can implement fetch and save requests in your app:

- Fetch only the properties that you need for contacts.
- When fetching all contacts and caching the results, first fetch all contacts identifiers, then fetch batches of detailed contacts by identifiers as required.
- To aggregate several contacts fetches, first collect a set of unique identifiers from the fetches. Then fetch batches of detailed contacts by those unique identifiers.
- If you cache the fetched contacts, groups, or containers, you need to refetch these objects (and release the old cached objects) when [CNContactStoreDidChange](../foundation/nsnotification/name-swift.struct/cncontactstoredidchange.md) is posted.

Because `CNContactStore` fetch methods perform I/O, it’s recommended that you avoid using the main thread to execute fetches.

## Topics

### Requesting access to the user’s contacts

- [requestAccess(for:completionHandler:)](cncontactstore/requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [authorizationStatus(for:)](cncontactstore/authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](cnentitytype.md): The entities the user can grant access to.

### Fetching contacts

- [enumerateContacts(with:usingBlock:)](cncontactstore/enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedMeContactWithKeys(toFetch:)](cncontactstore/unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContact(withIdentifier:keysToFetch:)](cncontactstore/unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContacts(matching:keysToFetch:)](cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.

### Fetching groups and containers

- [defaultContainerIdentifier()](cncontactstore/defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [groups(matching:)](cncontactstore/groups%28matching_%29.md): Fetches all groups matching the specified predicate.
- [containers(matching:)](cncontactstore/containers%28matching_%29.md): Fetches all containers matching the specified predicate.

### Fetching change history info

- [currentHistoryToken](cncontactstore/currenthistorytoken.md): The current history token.

### Saving changes

- [execute(\_:)](cncontactstore/execute%28__%29.md): Executes a save request and returns success or failure.

### Responding to contact store changes

- [CNContactStoreDidChange](../foundation/nsnotification/name-swift.struct/cncontactstoredidchange.md): Posted when changes occur to the contact store.

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

### Essentials

- [Accessing the contact store](accessing-the-contact-store.md): Request permission from the person to read and write their contact data.
- [Accessing a person’s contact data using Contacts and ContactsUI](accessing-a-person-s-contact-data-using-contacts-and-contactsui.md): Allow people to grant your app access to contact data by adding the Contact access button and Contact access picker to your app.
- [NSContactsUsageDescription](../bundleresources/information-property-list/nscontactsusagedescription.md): A message that tells people why the app is requesting access to their contacts.
- [com.apple.developer.contacts.notes](../bundleresources/entitlements/com.apple.developer.contacts.notes.md): A Boolean value that indicates whether the app may access the notes in contact entries.

# CNContactStore (Objective-C)

**Framework:** Contacts  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The object that fetches and saves contacts, groups, and containers from the user’s Contacts database.

## Declaration

```objectivec
@interface CNContactStore : NSObject
```

## Mentioned In

- [Accessing the contact store](accessing-the-contact-store.md)

<a id="overview"></a>

## Overview

The `CNContactStore` object represents the user’s contacts store database, and you use it to fetch information from that database and save changes back to it. There are a few recommended ways you can implement fetch and save requests in your app:

- Fetch only the properties that you need for contacts.
- When fetching all contacts and caching the results, first fetch all contacts identifiers, then fetch batches of detailed contacts by identifiers as required.
- To aggregate several contacts fetches, first collect a set of unique identifiers from the fetches. Then fetch batches of detailed contacts by those unique identifiers.
- If you cache the fetched contacts, groups, or containers, you need to refetch these objects (and release the old cached objects) when [CNContactStoreDidChange](../foundation/nsnotification/name-swift.struct/cncontactstoredidchange.md) is posted.

Because `CNContactStore` fetch methods perform I/O, it’s recommended that you avoid using the main thread to execute fetches.

## Topics

### Requesting access to the user’s contacts

- [requestAccessForEntityType:completionHandler:](cncontactstore/requestaccess%28for_completionhandler_%29.md): Requests access to the user’s contacts.
- [authorizationStatusForEntityType:](cncontactstore/authorizationstatus%28for_%29.md): Returns the current authorization status to access the contact data.
- [CNAuthorizationStatus](cnauthorizationstatus.md): An authorization status the user can grant for an app to access the specified entity type.
- [CNEntityType](cnentitytype.md): The entities the user can grant access to.

### Fetching contacts

- [enumerateContactsWithFetchRequest:error:usingBlock:](cncontactstore/enumeratecontacts%28with_usingblock_%29.md): Returns a Boolean value that indicates whether the enumeration of all contacts matching a contact fetch request executes successfully.
- [unifiedMeContactWithKeysToFetch:error:](cncontactstore/unifiedmecontactwithkeys%28tofetch_%29.md): Fetches the unified contact that’s the *me* card.
- [unifiedContactWithIdentifier:keysToFetch:error:](cncontactstore/unifiedcontact%28withidentifier_keystofetch_%29.md): Fetches a unified contact for the specified contact identifier.
- [unifiedContactsMatchingPredicate:keysToFetch:error:](cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md): Fetches all unified contacts matching the specified predicate.
- [enumeratorForContactFetchRequest:error:](cncontactstore/enumeratorforcontactfetchrequest_error_.md): Enumerates a contact fetch request.

### Fetching groups and containers

- [defaultContainerIdentifier](cncontactstore/defaultcontaineridentifier%28%29.md): Returns the identifier of the default container.
- [groupsMatchingPredicate:error:](cncontactstore/groups%28matching_%29.md): Fetches all groups matching the specified predicate.
- [containersMatchingPredicate:error:](cncontactstore/containers%28matching_%29.md): Fetches all containers matching the specified predicate.

### Fetching change history info

- [enumeratorForChangeHistoryFetchRequest:error:](cncontactstore/enumeratorforchangehistoryfetchrequest_error_.md): Enumerates a change history fetch request.
- [currentHistoryToken](cncontactstore/currenthistorytoken.md): The current history token.

### Saving changes

- [executeSaveRequest:error:](cncontactstore/execute%28__%29.md): Executes a save request and returns success or failure.

### Responding to contact store changes

- [CNContactStoreDidChangeNotification](cncontactstoredidchangenotification.md): Posted when changes occur to the contact store.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Accessing the contact store](accessing-the-contact-store.md): Request permission from the person to read and write their contact data.
- [Accessing a person’s contact data using Contacts and ContactsUI](accessing-a-person-s-contact-data-using-contacts-and-contactsui.md): Allow people to grant your app access to contact data by adding the Contact access button and Contact access picker to your app.
- [NSContactsUsageDescription](../bundleresources/information-property-list/nscontactsusagedescription.md): A message that tells people why the app is requesting access to their contacts.
- [com.apple.developer.contacts.notes](../bundleresources/entitlements/com.apple.developer.contacts.notes.md): A Boolean value that indicates whether the app may access the notes in contact entries.
