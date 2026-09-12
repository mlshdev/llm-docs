> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abexternalchangecallback](https://developer.apple.com/documentation/addressbook/abexternalchangecallback)

# ABExternalChangeCallback (Swift)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.

## Declaration

```swift
typealias ABExternalChangeCallback = (ABAddressBook?, CFDictionary?, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `addressBook`: An address book used to interact with the Address Book database.
- `info`: Always `NULL`.
- `context`: The object to pass to the callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAddressBookExternalChangeCallback`, you declare it like this:

<a id="Discussion"></a>

### Discussion

Use [ABAddressBookRegisterExternalChangeCallback(\_:\_:\_:)](abaddressbookregisterexternalchangecallback%28______%29.md) to register and [ABAddressBookUnregisterExternalChangeCallback(\_:\_:\_:)](abaddressbookunregisterexternalchangecallback%28______%29.md) to unregister the callback function.

You can register for a callback with different contexts or callback functions. The run loop on the thread that registered the callback invokes the callback.

The `addressBook` object does not take any action to flush or synchronize cached state with the Address Book database. If you want to ensure that `addressBook` doesn’t contain stale values, use [ABAddressBookRevert(\_:)](abaddressbookrevert%28__%29.md).

## See Also

### Deprecated

- [ABRecord](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABAddressBookRequestAccessCompletionHandler](abaddressbookrequestaccesscompletionhandler.md): Deprecated. Definition for a block callback invoked when an access request has completed.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.

# ABExternalChangeCallback (Objective-C)

**Framework:** Address Book  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Prototype for a function callback invoked on an address book when the Address Book database is modified by another address book instance.

## Declaration

```objectivec
typedef void (*)(const void *, const struct __CFDictionary *, void *) ABExternalChangeCallback;
```

## Parameters

- `addressBook`: An address book used to interact with the Address Book database.
- `info`: Always `NULL`.
- `context`: The object to pass to the callback function.

<a id="Discussion"></a>

## Discussion

If you name your callback function `MyAddressBookExternalChangeCallback`, you declare it like this:

<a id="Discussion"></a>

### Discussion

Use [ABAddressBookRegisterExternalChangeCallback](abaddressbookregisterexternalchangecallback%28______%29.md) to register and [ABAddressBookUnregisterExternalChangeCallback](abaddressbookunregisterexternalchangecallback%28______%29.md) to unregister the callback function.

You can register for a callback with different contexts or callback functions. The run loop on the thread that registered the callback invokes the callback.

The `addressBook` object does not take any action to flush or synchronize cached state with the Address Book database. If you want to ensure that `addressBook` doesn’t contain stale values, use [ABAddressBookRevert](abaddressbookrevert%28__%29.md).

## See Also

### Deprecated

- [ABRecordRef](abrecord-swift.typealias.md): Deprecated. A reference to an ABRecord object or any of its derivedopaque types.
- [ABAddressBookRequestAccessCompletionHandler](abaddressbookrequestaccesscompletionhandler.md): Deprecated. Definition for a block callback invoked when an access request has completed.
- [ABMultiValueIdentifier](abmultivalueidentifier.md): Deprecated. Identifies multivalue properties.
- [ABPersonCompositeNameFormat](abpersoncompositenameformat.md): Deprecated. Indicates a person-name display format.
- [ABPersonSortOrdering](abpersonsortordering.md): Deprecated. Indicates a person sort ordering.
- [ABPropertyID](abpropertyid.md): Deprecated. Integer that identifies a record property.
- [ABRecordID](abrecordid.md): Deprecated. Integer that identifies a record.
- [ABRecordType](abrecordtype.md): Deprecated. Integer that identifies a record type.
- [ABSourceType](absourcetype.md): Deprecated. Indicates a source type. See `Source Properties`.
