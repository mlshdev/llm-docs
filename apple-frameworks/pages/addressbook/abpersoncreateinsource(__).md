> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersoncreateinsource(_:)](https://developer.apple.com/documentation/addressbook/abpersoncreateinsource(_:))

# ABPersonCreateInSource(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a new person record in a particular source.

> use \[\[CNMutableContact alloc\] init\] and \[CNSaveRequest addContact:toContainerWithIdentifier:\]

## Declaration

```swift
func ABPersonCreateInSource(_ source: ABRecord!) -> Unmanaged<ABRecord>!
```

## Parameters

- `source`: The source to create the person record in.

<a id="return-value"></a>

## Return Value

A new person record in the specified source.

<a id="Discussion"></a>

## Discussion

To add the newly created person record to the Address Book database, use [ABAddressBookAddRecord(\_:\_:\_:)](abaddressbookaddrecord%28______%29.md).

If `source` is `NULL`, the group is created in the default source.

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
- [ABAddressBookCreateWithOptions(\_:\_:)](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus()](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount(\_:)](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID(\_:\_:)](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.

# ABPersonCreateInSource (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a new person record in a particular source.

> use \[\[CNMutableContact alloc\] init\] and \[CNSaveRequest addContact:toContainerWithIdentifier:\]

## Declaration

```objectivec
extern ABRecordRefABPersonCreateInSource(ABRecordRef source);
```

## Parameters

- `source`: The source to create the person record in.

<a id="return-value"></a>

## Return Value

A new person record in the specified source.

<a id="Discussion"></a>

## Discussion

To add the newly created person record to the Address Book database, use [ABAddressBookAddRecord](abaddressbookaddrecord%28______%29.md).

If `source` is `NULL`, the group is created in the default source.

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
- [ABAddressBookCreateWithOptions](abaddressbookcreatewithoptions%28____%29.md): Deprecated. Creates a new address book object with data from the Address Book database.
- [ABAddressBookGetAuthorizationStatus](abaddressbookgetauthorizationstatus%28%29.md): Deprecated. Returns the authorization status of your app for accessing address book data.
- [ABAddressBookGetGroupCount](abaddressbookgetgroupcount%28__%29.md): Deprecated. Returns the number of groups in an address book.
- [ABAddressBookGetGroupWithRecordID](abaddressbookgetgroupwithrecordid%28____%29.md): Deprecated. Returns the group with a given record ID.
