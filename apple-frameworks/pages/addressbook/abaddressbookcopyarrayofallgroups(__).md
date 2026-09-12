> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddressbookcopyarrayofallgroups(_:)](https://developer.apple.com/documentation/addressbook/abaddressbookcopyarrayofallgroups(_:))

# ABAddressBookCopyArrayOfAllGroups(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns an array with all the groups in an address book.

> use \[CNContactStore groupsMatchingPredicate:nil error:\]

## Declaration

```swift
func ABAddressBookCopyArrayOfAllGroups(_ addressBook: ABAddressBook!) -> Unmanaged<CFArray>!
```

## Parameters

- `addressBook`: The address book from which to return the groups.

<a id="return-value"></a>

## Return Value

An array containing the groups in `addressBook`.

## See Also

### Deprecated

- [ABAddressBookAddRecord(\_:\_:\_:)](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource(\_:\_:)](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople(\_:)](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource(\_:\_:)](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering(\_:\_:\_:)](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources(\_:)](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource(\_:)](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel(\_:)](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName(\_:\_:)](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate()](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookCreateWithOptions(\_:\_:)](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus()](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount(\_:)](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID(\_:\_:)](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount(\_:)](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.

# ABAddressBookCopyArrayOfAllGroups (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns an array with all the groups in an address book.

> use \[CNContactStore groupsMatchingPredicate:nil error:\]

## Declaration

```objectivec
extern CFArrayRefABAddressBookCopyArrayOfAllGroups(ABAddressBookRef addressBook);
```

## Parameters

- `addressBook`: The address book from which to return the groups.

<a id="return-value"></a>

## Return Value

An array containing the groups in `addressBook`.

## See Also

### Deprecated

- [ABAddressBookAddRecord](abaddressbookaddrecord%28______%29.md): Deprecated. Adds a record to an address book.
- [ABAddressBookCopyArrayOfAllGroupsInSource](abaddressbookcopyarrayofallgroupsinsource%28____%29.md): Deprecated. Returns an array of all groups from a particular source.
- [ABAddressBookCopyArrayOfAllPeople](abaddressbookcopyarrayofallpeople%28__%29.md): Deprecated. Returns all the person records in an address book.
- [ABAddressBookCopyArrayOfAllPeopleInSource](abaddressbookcopyarrayofallpeopleinsource%28____%29.md): Deprecated. Returns an array of all person records from a particular source.
- [ABAddressBookCopyArrayOfAllPeopleInSourceWithSortOrdering](abaddressbookcopyarrayofallpeopleinsourcewithsortordering%28______%29.md): Deprecated. Returns an array of all person records in the address book, sorted with the specified order.
- [ABAddressBookCopyArrayOfAllSources](abaddressbookcopyarrayofallsources%28__%29.md): Deprecated. Returns an array of all sources in the address book.
- [ABAddressBookCopyDefaultSource](abaddressbookcopydefaultsource%28__%29.md): Deprecated. Returns the default source.
- [ABAddressBookCopyLocalizedLabel](abaddressbookcopylocalizedlabel%28__%29.md): Deprecated. Returns a localized version of a record-property label.
- [ABAddressBookCopyPeopleWithName](abaddressbookcopypeoplewithname%28____%29.md): Deprecated. Performs a prefix search on the composite names of people in an address book and returns an array of persons that match the search criteria.
- [ABAddressBookCreate](abaddressbookcreate%28%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookCreateWithOptions](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
- [ABAddressBookGetPersonCount](abaddressbookgetpersoncount%28__%29.md): Deprecated. Returns the number of person records in an address book.
