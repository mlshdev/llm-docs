> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abmultivalueremovevalueandlabelatindex(_:_:)](https://developer.apple.com/documentation/addressbook/abmultivalueremovevalueandlabelatindex(_:_:))

# ABMultiValueRemoveValueAndLabelAtIndex(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Removes a value from a multivalue property.

> use \[NSMutableArray removeObjectAtIndex:\]

## Declaration

```swift
func ABMultiValueRemoveValueAndLabelAtIndex(_ multiValue: ABMutableMultiValue!, _ index: CFIndex) -> Bool
```

## Parameters

- `multiValue`: The multivalue property from which to remove the value at `index`.
- `index`: The location, in `multiValue`, of the value being removed.

  Raises an exception when out of bounds.

<a id="return-value"></a>

## Return Value

`true` when successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This function takes an index. If you have an identifier, use the [ABMultiValueGetIndexForIdentifier(\_:\_:)](abmultivaluegetindexforidentifier%28____%29.md) function to get the corresponding index.

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

# ABMultiValueRemoveValueAndLabelAtIndex (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Removes a value from a multivalue property.

> use \[NSMutableArray removeObjectAtIndex:\]

## Declaration

```objectivec
extern bool ABMultiValueRemoveValueAndLabelAtIndex(ABMutableMultiValueRef multiValue, CFIndex index);
```

## Parameters

- `multiValue`: The multivalue property from which to remove the value at `index`.
- `index`: The location, in `multiValue`, of the value being removed.

  Raises an exception when out of bounds.

<a id="return-value"></a>

## Return Value

`true` when successful, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This function takes an index. If you have an identifier, use the [ABMultiValueGetIndexForIdentifier](abmultivaluegetindexforidentifier%28____%29.md) function to get the corresponding index.

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
