> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/addressbook-data-types](https://developer.apple.com/documentation/addressbook/addressbook-data-types)

# AddressBook Data Types (Swift)

**Framework:** Address Book  
**Kind:** API Collection

Get the data types you use to specify Address Book information.

## Topics

### Callbacks

- [ABImageClientCallback](abimageclientcallback.md): Prototype of a callback function used to notify an application when an asynchronous image fetch is complete.

### Miscellaneous

- [ABPropertyType](abpropertytype.md): Deprecated. These are the possible types of ABRecord properties.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.

### Deprecated

- [ABRecord](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABAddressBookRequestAccessCompletionHandler](abaddressbookrequestaccesscompletionhandler.md): Deprecated. Definition for a block callback invoked when an access request has completed.
- [ABExternalChangeCallback](abexternalchangecallback.md): Deprecated. Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [Address Book Constants](address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.

# AddressBook Data Types (Objective-C)

**Framework:** Address Book  
**Kind:** API Collection

Get the data types you use to specify Address Book information.

## Topics

### Callbacks

- [ABImageClientCallback](abimageclientcallback.md): Prototype of a callback function used to notify an application when an asynchronous image fetch is complete.
- [ABActionCopyTitleCallback](abactioncopytitlecallback.md): The title of the menu item for the action.
- [ABActionEnabledCallback](abactionenabledcallback.md): Return `true` ifthe action menu item should be enabled, `false` otherwise.If the property returned by `ABActionGetPropertyCallback` isa multi-value property, `identifier` contains theunique identifier of the value selected.
- [ABActionGetPropertyCallback](abactiongetpropertycallback.md): Return the property the action applies to.
- [ABActionSelectedCallback](abactionselectedcallback.md): Execute the action. If the property returnedby [ABActionGetPropertyCallback](abactiongetpropertycallback.md) isa multi-value property, `identifier` containsthe unique identifier of the value selected; otherwise, identifieris `NULL`.

### Miscellaneous

- [ABPickerAttributes](abpickerattributes.md): A bitfield used to specify the selection behavior for the values of multi-value properties.
- [ABPropertyType](abpropertytype.md): Deprecated. These are the possible types of ABRecord properties.
- [ABSearchComparison](absearchcomparison.md): Constants used to specify the type of comparison beingmade.
- [ABSearchConjunction](absearchconjunction.md): Constants used to create compound search elements.

### Deprecated

- [ABRecordRef](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABAddressBookRequestAccessCompletionHandler](abaddressbookrequestaccesscompletionhandler.md): Deprecated. Definition for a block callback invoked when an access request has completed.
- [ABExternalChangeCallback](abexternalchangecallback.md): Deprecated. Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.

## See Also

### C Interfaces

- [C Types](c-types.md): Identify the C types that correspond to Address Book objects.
- [AddressBook Functions](addressbook-functions.md): Find the C functions and function-like macros you use to manipulate Address Book data.
- [Address Book Constants](address-book-constants.md): Get the constants you use to specify Address Book information.
- [AddressBook Enumerations](addressbook-enumerations.md): Get the enumerations you use to specify Address Book information.
