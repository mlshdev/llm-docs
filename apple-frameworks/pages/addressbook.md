> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook](https://developer.apple.com/documentation/addressbook)

# Address Book (Swift)

**Framework:** Address Book  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+ · macOS 10.2+

Access the centralized database for storing users’ contacts.

<a id="overview"></a>

## Overview

The Address Book is a centralized database containing contacts and their personal information. Users enter personal information about themselves and their friends only once, instead of entering it repeatedly whenever the information is used. Apps that support the AddressBook framework share this contact information with other apps, including Apple’s Mail and Messages.

> **Important**

>  Do not use the AddressBook framework in macOS 10.11 and later. Use the APIs defined in the [Contacts](contacts.md) framework instead.

## Topics

### Essentials

- [ABAddressBook](addressbook/abaddressbook-swift.class.md): The main object you use to access the Address Book database.

### Data Types

- [ABPerson](addressbook/abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](addressbook/abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](addressbook/abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](addressbook/abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](addressbook/abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](addressbook/abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

### Pickers

- [ABPeoplePickerView](addressbook/abpeoplepickerview.md): An object you use to customize the behavior of people-picker views in an app’s user interface.
- [ABPersonView](addressbook/abpersonview.md): An object that provides a view for displaying and editing contacts.

### Search Elements

- [ABSearchElement](addressbook/absearchelement.md): An object you use to specify a search query for records in the Address Book database.
- [ABSearchElementRef](addressbook/absearchelementref.md): A reference to an ABSearchElement object.

### Action Plug-In

- [ABActionDelegate](addressbook/abactiondelegate.md): Implement an Address Book action plug-in to support the display of rollover menus on top of custom items.

### C Interfaces

- [C Types](addressbook/c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook/addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [Address Book Constants](addressbook/address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook/addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook/addressbook-data-types.md): Get the data types you use to specify Address Book information.

### Deprecated symbols

- [Deprecated symbols](addressbook/deprecated-symbols.md): Review unsupported symbols and their replacements.

# Address Book (Objective-C)

**Framework:** Address Book  
**Kind:** Framework  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 14.0+ · macOS 10.2+

Access the centralized database for storing users’ contacts.

<a id="overview"></a>

## Overview

The Address Book is a centralized database containing contacts and their personal information. Users enter personal information about themselves and their friends only once, instead of entering it repeatedly whenever the information is used. Apps that support the AddressBook framework share this contact information with other apps, including Apple’s Mail and Messages.

> **Important**

>  Do not use the AddressBook framework in macOS 10.11 and later. Use the APIs defined in the [Contacts](contacts.md) framework instead.

## Topics

### Essentials

- [ABAddressBook](addressbook/abaddressbook-swift.class.md): The main object you use to access the Address Book database.

### Data Types

- [ABPerson](addressbook/abperson.md): An object that encapsulates all information about a person in the Address Book database.
- [ABGroup](addressbook/abgroup.md): An object that represents a group of records in the Address Book database.
- [ABMultiValue](addressbook/abmultivalue-swift.class.md): An immutable representation of a property that might have multiple values.
- [ABMutableMultiValue](addressbook/abmutablemultivalue-swift.class.md): A mutable representation of a property that might have multiple values.
- [ABImageClient](addressbook/abimageclient.md): Methods for responding to a request to load images associated with a contact.
- [ABRecord](addressbook/abrecord-swift.class.md): An abstract class that defines the common properties for all Address Book records.

### Pickers

- [ABPeoplePickerView](addressbook/abpeoplepickerview.md): An object you use to customize the behavior of people-picker views in an app’s user interface.
- [ABPersonView](addressbook/abpersonview.md): An object that provides a view for displaying and editing contacts.
- [ABPersonPicker](addressbook/abpersonpicker.md): A picker object that you display when you want the user to select contacts.

### Search Elements

- [ABSearchElement](addressbook/absearchelement.md): An object you use to specify a search query for records in the Address Book database.
- [ABSearchElementRef](addressbook/absearchelementref.md): A reference to an ABSearchElement object.

### Action Plug-In

- [ABActionDelegate](addressbook/abactiondelegate.md): Implement an Address Book action plug-in to support the display of rollover menus on top of custom items.

### C Interfaces

- [C Types](addressbook/c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook/addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [Address Book Constants](addressbook/address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook/addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
- [AddressBook Data Types](addressbook/addressbook-data-types.md): Get the data types you use to specify Address Book information.

### Deprecated symbols

- [Deprecated symbols](addressbook/deprecated-symbols.md): Review unsupported symbols and their replacements.

### Macros

- [AB_DEPRECATED](addressbook/ab_deprecated.md)
- [AB_EXTERN](addressbook/ab_extern.md)
