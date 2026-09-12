> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbookcreatewithoptions(_:_:)](https://developer.apple.com/documentation/addressbook/abaddressbookcreatewithoptions(_:_:))

# ABAddressBookCreateWithOptions(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a new address book object with data from the Address Book database.

> use \[\[CNContactStore alloc\] init\]

## Declaration

```swift
func ABAddressBookCreateWithOptions(_ options: CFDictionary!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<ABAddressBook>!
```

## Parameters

- `options`: Reserved. Pass `NULL`.
- `error`: On error, contains error information. See [Address Book Errors](address-book-errors.md).

<a id="return-value"></a>

## Return Value

An address book object, `NULL`, or an empty database.

<a id="Discussion"></a>

## Discussion

Changes made to the returned address book are reflected in the Address Book database only after saving the address book with [ABAddressBookSave(\_:\_:)](abaddressbooksave%28____%29.md).

On iOS 6.0 and later, if the caller does not have access to the Address Book database:

- For apps linked against iOS 6.0 and later, this function returns `NULL`.
- For apps linked against previous version of iOS, this function returns an empty read-only database.

If your app syncs information with the database, it must not sync data when it does not have access to the database.

> **Important**

>  You must ensure that an instance of `ABAddressBookRef` is used by only one thread.

## See Also

### Deprecated

- [ABAddressBookAddRecord(\_:\_:\_:)](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroups(\_:)](abaddressbookcopyarrayofallgroups%28__%29.md): Deprecated. Returns an array with all the groups in an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource(\_:\_:)](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople(\_:)](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource(\_:\_:)](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering(\_:\_:\_:)](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources(\_:)](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource(\_:)](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel(\_:)](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName(\_:\_:)](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate()](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus()](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount(\_:)](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID(\_:\_:)](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount(\_:)](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.

# ABAddressBookCreateWithOptions (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a new address book object with data from the Address Book database.

> use \[\[CNContactStore alloc\] init\]

## Declaration

```objectivec
extern ABAddressBookRefABAddressBookCreateWithOptions(CFDictionaryRef options, CFErrorRef*error);
```

## Parameters

- `options`: Reserved. Pass `NULL`.
- `error`: On error, contains error information. See [Address Book Errors](address-book-errors.md).

<a id="return-value"></a>

## Return Value

An address book object, `NULL`, or an empty database.

<a id="Discussion"></a>

## Discussion

Changes made to the returned address book are reflected in the Address Book database only after saving the address book with [ABAddressBookSave](abaddressbooksave%28____%29.md).

On iOS 6.0 and later, if the caller does not have access to the Address Book database:

- For apps linked against iOS 6.0 and later, this function returns `NULL`.
- For apps linked against previous version of iOS, this function returns an empty read-only database.

If your app syncs information with the database, it must not sync data when it does not have access to the database.

> **Important**

>  You must ensure that an instance of `ABAddressBookRef` is used by only one thread.

## See Also

### Deprecated

- [ABAddressBookAddRecord](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroups](abaddressbookcopyarrayofallgroups%28__%29.md): Deprecated. Returns an array with all the groups in an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.
