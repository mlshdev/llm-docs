> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abpersoncreatesearchelement(_:_:_:_:_:)](https://developer.apple.com/documentation/addressbook/abpersoncreatesearchelement(_:_:_:_:_:))

# ABPersonCreateSearchElement(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a search element object that specifies a query for records of this type.

## Declaration

```swift
func ABPersonCreateSearchElement(_ property: CFString!, _ label: CFString!, _ key: CFString!, _ value: CFTypeRef!, _ comparison: ABSearchComparison) -> Unmanaged<ABSearchElementRef>!
```

## Parameters

- `property`: The name of the property to search on. It cannot be `NULL`. For a full list of the properties, see `Person Properties` and Common Properties in ABRecord.
- `label`: The label name for a multi-value list. If `property` does not have multiple values, pass `NULL`. If `property` does have multiple values, pass `NULL` to search all the values.
- `key`: The key name for a dictionary. If `property` is not a dictionary, pass `NULL`. If `property` is a dictionary, pass `NULL` to search all keys.
- `value`: The value you are searching for. It cannot be `NULL`
- `comparison`: Specifies the type of comparison to perform, such as [kABEqual](kabequal.md) or [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md). For a full list, see [ABSearchComparison](absearchcomparison.md).

<a id="return-value"></a>

## Return Value

A search element object that specifies a query according to the above parameters. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

Use the ABAddressBook [ABCopyArrayOfMatchingRecords(\_:\_:)](abcopyarrayofmatchingrecords%28____%29.md) function to actually perform the query. Also, see `ABSearchElement C` for more functions that create compound queries.

## See Also

### People

- [ABCopyArrayOfAllPeople(\_:)](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe(\_:)](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData(\_:)](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups(\_:)](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation(\_:)](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate()](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateWithVCardRepresentation(\_:)](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData(\_:\_:\_:)](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe(\_:\_:)](absetme%28____%29.md): Sets the record that represents the logged-in user.

# ABPersonCreateSearchElement (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns a search element object that specifies a query for records of this type.

## Declaration

```objectivec
extern ABSearchElementRefABPersonCreateSearchElement(CFStringRef property, CFStringRef label, CFStringRef key, CFTypeRef value, ABSearchComparison comparison);
```

## Parameters

- `property`: The name of the property to search on. It cannot be `NULL`. For a full list of the properties, see `Person Properties` and Common Properties in ABRecord.
- `label`: The label name for a multi-value list. If `property` does not have multiple values, pass `NULL`. If `property` does have multiple values, pass `NULL` to search all the values.
- `key`: The key name for a dictionary. If `property` is not a dictionary, pass `NULL`. If `property` is a dictionary, pass `NULL` to search all keys.
- `value`: The value you are searching for. It cannot be `NULL`
- `comparison`: Specifies the type of comparison to perform, such as [kABEqual](kabequal.md) or [kABPrefixMatchCaseInsensitive](kabprefixmatchcaseinsensitive.md). For a full list, see [ABSearchComparison](absearchcomparison.md).

<a id="return-value"></a>

## Return Value

A search element object that specifies a query according to the above parameters. You are responsible for releasing this object.

<a id="Discussion"></a>

## Discussion

Use the ABAddressBook [ABCopyArrayOfMatchingRecords](abcopyarrayofmatchingrecords%28____%29.md) function to actually perform the query. Also, see `ABSearchElement C` for more functions that create compound queries.

## See Also

### People

- [ABCopyArrayOfAllPeople](abcopyarrayofallpeople%28__%29.md): Returns an array of all the people in the Address Book database.
- [ABGetMe](abgetme%28__%29.md): Returns the ABPerson object for the logged-in user.
- [ABPersonCopyImageData](abpersoncopyimagedata%28__%29.md): Deprecated. Returns data that contains a picture of a person.
- [ABPersonCopyParentGroups](abpersoncopyparentgroups%28__%29.md): Returns an array of groups that a person belongs to.
- [ABPersonCopyVCardRepresentation](abpersoncopyvcardrepresentation%28__%29.md): Returns the vCard representation of the person as a data object in vCard format.
- [ABPersonCreate](abpersoncreate%28%29.md): Deprecated. Returns a newly created person object.
- [ABPersonCreateWithVCardRepresentation](abpersoncreatewithvcardrepresentation%28__%29.md): Returns a new ABPerson object initialized with the given data in vCard format.
- [ABPersonSetImageData](abpersonsetimagedata%28______%29.md): Deprecated. Sets the image for this person to the given data.
- [ABSetMe](absetme%28____%29.md): Sets the record that represents the logged-in user.
