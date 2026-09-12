> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopyarrayofmatchingrecords(_:_:)](https://developer.apple.com/documentation/addressbook/abcopyarrayofmatchingrecords(_:_:))

# ABCopyArrayOfMatchingRecords(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array of records that match the given search element, or an empty array if no records match the search element.

## Declaration

```swift
func ABCopyArrayOfMatchingRecords(_ addressBook: ABAddressBookRef!, _ search: ABSearchElementRef!) -> Unmanaged<CFArray>!
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `search`: The search element that specifies the query. If `search` is `NULL`, this function raises an exception. Create an ABSearchElement object using the record specific functions: [ABGroupCreateSearchElement(\_:\_:\_:\_:\_:)](abgroupcreatesearchelement%28__________%29.md) or [ABPersonCreateSearchElement(\_:\_:\_:\_:\_:)](abpersoncreatesearchelement%28__________%29.md). See `ABSearchElement C` for more functions that create compound queries.

<a id="return-value"></a>

## Return Value

A new array containing ABRecord objects representing all the records that match `search`. If no records match `search`, this function returns an empty array. You are responsible for releasing this object.

## See Also

### Search Elements

- [ABSearchElementCreateWithConjunction(\_:\_:)](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.
- [ABSearchElementMatchesRecord(\_:\_:)](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.

# ABCopyArrayOfMatchingRecords (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array of records that match the given search element, or an empty array if no records match the search element.

## Declaration

```objectivec
extern CFArrayRefABCopyArrayOfMatchingRecords(ABAddressBookRef addressBook, ABSearchElementRef search);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `search`: The search element that specifies the query. If `search` is `NULL`, this function raises an exception. Create an ABSearchElement object using the record specific functions: [ABGroupCreateSearchElement](abgroupcreatesearchelement%28__________%29.md) or [ABPersonCreateSearchElement](abpersoncreatesearchelement%28__________%29.md). See `ABSearchElement C` for more functions that create compound queries.

<a id="return-value"></a>

## Return Value

A new array containing ABRecord objects representing all the records that match `search`. If no records match `search`, this function returns an empty array. You are responsible for releasing this object.

## See Also

### Search Elements

- [ABSearchElementCreateWithConjunction](absearchelementcreatewithconjunction%28____%29.md): Returns a compound search element created by combiningthe search elements in an array with the given conjunction.
- [ABSearchElementMatchesRecord](absearchelementmatchesrecord%28____%29.md): Tests whether or not a record matches a search element.
