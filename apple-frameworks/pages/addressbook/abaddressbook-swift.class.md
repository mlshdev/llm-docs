> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbook-swift.class](https://developer.apple.com/documentation/addressbook/abaddressbook-swift.class)

# ABAddressBook (Swift)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

The main object you use to access the Address Book database.

## Declaration

```swift
class ABAddressBook
```

<a id="overview"></a>

## Overview

The `ABAddressBook` class provides a programming interface to the Address Book—a centralized database used by multiple applications to store contact and other personal information about people. The Address Book database also supports the notion of a “group” containing one or more persons. People may belong to multiple groups, and groups may also belong to other groups with some restrictions (for example, no circular references are allowed).

The `ABAddressBook` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABAddressBookRef` type is interchangeable in function or method calls with instances of the `ABAddressBook` class.

## Topics

### Creating and Initializing an Address Book

- [shared()](abaddressbook-swift.class/shared%28%29.md): Returns the unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

### Retrieving Groups and People

- [groups()](abaddressbook-swift.class/groups%28%29.md): Returns an array of all the groups in the Address Book database.
- [people()](abaddressbook-swift.class/people%28%29.md): Returns an array of all the people in the Address Book database.

### Setting and Retrieving the Logged-in User’s Record

- [me()](abaddressbook-swift.class/me%28%29.md): Returns the `ABPerson` record that represents the logged-in user.
- [setMe(\_:)](abaddressbook-swift.class/setme%28__%29.md): Sets the record that represents the logged-in user.

### Retrieving a Specific Record

- [record(forUniqueId:)](abaddressbook-swift.class/record%28foruniqueid_%29.md): Returns the person or group record that matches the given unique ID.

### Retrieving the Class of a Record

- [recordClass(fromUniqueId:)](abaddressbook-swift.class/recordclass%28fromuniqueid_%29.md): Returns the class name of the record that matches the given unique ID.

### Retrieving a Formatted Address

- [formattedAddress(from:)](abaddressbook-swift.class/formattedaddress%28from_%29.md): Returns an attributed string containing the formatted address.

### Retrieving Default Values

- [defaultCountryCode()](abaddressbook-swift.class/defaultcountrycode%28%29.md): Returns the default country code for records with unspecified country codes.
- [defaultNameOrdering()](abaddressbook-swift.class/defaultnameordering%28%29.md): Returns the default name ordering defined by the user in the Address Book application’s preferences.

### Adding and Removing Records

- [add(\_:error:)](abaddressbook-swift.class/add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [add(\_:)](abaddressbook-swift.class/add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [remove(\_:error:)](abaddressbook-swift.class/remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
- [remove(\_:)](abaddressbook-swift.class/remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.

### Searching

- [records(matching:)](abaddressbook-swift.class/records%28matching_%29.md): Returns an array of records that match the given search element, or returns an empty array if no records match the search element.

### Saving and Detecting Changes

- [hasUnsavedChanges()](abaddressbook-swift.class/hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [save()](abaddressbook-swift.class/save%28%29.md): Saves all the changes made since the last save.
- [saveAndReturnError()](abaddressbook-swift.class/saveandreturnerror%28%29.md): Saves all the changes made since the last save.

### Constants

- [Database change notification keys](database-change-notification-keys.md): Keys contained by the user-info dictionary of the notifications posted by the Address Book framework.
- [Errors](1529225-errors.md): Errors codes returned by the Address Book Framework.

### Notifications

These notifications are sent when something changes in the Address Book database. These are not sent until the [shared()](abaddressbook-swift.class/shared%28%29.md) class method has been invoked.

- [abDatabaseChanged](../foundation/nsnotification/name-swift.struct/abdatabasechanged.md): Posted when this process has changed the Address Book database.
- [abDatabaseChangedExternally](../foundation/nsnotification/name-swift.struct/abdatabasechangedexternally.md): Posted when a process other than the current one has changed the Address Book database.

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

# ABAddressBook (Objective-C)

**Framework:** Address Book  
**Kind:** Class  
**Availability:** macOS

The main object you use to access the Address Book database.

## Declaration

```objectivec
@interface ABAddressBook : NSObject
```

<a id="overview"></a>

## Overview

The `ABAddressBook` class provides a programming interface to the Address Book—a centralized database used by multiple applications to store contact and other personal information about people. The Address Book database also supports the notion of a “group” containing one or more persons. People may belong to multiple groups, and groups may also belong to other groups with some restrictions (for example, no circular references are allowed).

The `ABAddressBook` class is “toll-free bridged” with its procedural C opaque-type counterpart. This means that the `ABAddressBookRef` type is interchangeable in function or method calls with instances of the `ABAddressBook` class.

## Topics

### Creating and Initializing an Address Book

- [sharedAddressBook](abaddressbook-swift.class/shared%28%29.md): Returns the unique shared instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.
- [addressBook](abaddressbook-swift.class/addressbook.md): Returns a new instance of `ABAddressBook`, or `nil` if the Address Book database can’t be initialized.

### Retrieving Groups and People

- [groups](abaddressbook-swift.class/groups%28%29.md): Returns an array of all the groups in the Address Book database.
- [people](abaddressbook-swift.class/people%28%29.md): Returns an array of all the people in the Address Book database.

### Setting and Retrieving the Logged-in User’s Record

- [me](abaddressbook-swift.class/me%28%29.md): Returns the `ABPerson` record that represents the logged-in user.
- [setMe:](abaddressbook-swift.class/setme%28__%29.md): Sets the record that represents the logged-in user.

### Retrieving a Specific Record

- [recordForUniqueId:](abaddressbook-swift.class/record%28foruniqueid_%29.md): Returns the person or group record that matches the given unique ID.

### Retrieving the Class of a Record

- [recordClassFromUniqueId:](abaddressbook-swift.class/recordclass%28fromuniqueid_%29.md): Returns the class name of the record that matches the given unique ID.

### Retrieving a Formatted Address

- [formattedAddressFromDictionary:](abaddressbook-swift.class/formattedaddress%28from_%29.md): Returns an attributed string containing the formatted address.

### Retrieving Default Values

- [defaultCountryCode](abaddressbook-swift.class/defaultcountrycode%28%29.md): Returns the default country code for records with unspecified country codes.
- [defaultNameOrdering](abaddressbook-swift.class/defaultnameordering%28%29.md): Returns the default name ordering defined by the user in the Address Book application’s preferences.

### Adding and Removing Records

- [addRecord:error:](abaddressbook-swift.class/add%28__error_%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [addRecord:](abaddressbook-swift.class/add%28__%29.md): Adds an `ABPerson` or `ABGroup` record to the Address Book database.
- [removeRecord:error:](abaddressbook-swift.class/remove%28__error_%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.
- [removeRecord:](abaddressbook-swift.class/remove%28__%29.md): Removes an `ABPerson` or `ABGroup` record from the Address Book database.

### Searching

- [recordsMatchingSearchElement:](abaddressbook-swift.class/records%28matching_%29.md): Returns an array of records that match the given search element, or returns an empty array if no records match the search element.

### Saving and Detecting Changes

- [hasUnsavedChanges](abaddressbook-swift.class/hasunsavedchanges%28%29.md): Indicates whether an address book has changes that have not been saved to the Address Book database.
- [save](abaddressbook-swift.class/save%28%29.md): Saves all the changes made since the last save.
- [saveAndReturnError:](abaddressbook-swift.class/saveandreturnerror%28%29.md): Saves all the changes made since the last save.

### Constants

- [Database change notification keys](database-change-notification-keys.md): Keys contained by the user-info dictionary of the notifications posted by the Address Book framework.
- [Errors](1529225-errors.md): Errors codes returned by the Address Book Framework.

### Notifications

These notifications are sent when something changes in the Address Book database. These are not sent until the [sharedAddressBook](abaddressbook-swift.class/shared%28%29.md) class method has been invoked.

- [kABDatabaseChangedNotification](kabdatabasechangednotification.md): Posted when this process has changed the Address Book database.
- [kABDatabaseChangedExternallyNotification](kabdatabasechangedexternallynotification.md): Posted when a process other than the current one has changed the Address Book database.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
