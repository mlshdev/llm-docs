> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecordsynchronize(_:_:)](https://developer.apple.com/documentation/opendirectory/odrecordsynchronize(_:_:))

# ODRecordSynchronize(\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Synchronizes a record with the directory to get current data and commit changes.

## Declaration

```swift
func ODRecordSynchronize(_ record: ODRecordRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `record`: The record.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if the record is successfully synchronized; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function refetches any attributes which have been fetched previously, but it does not fetch previously unfetched attributes.

## See Also

### Working with Records

- [ODRecordAddMember(\_:\_:\_:)](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue(\_:\_:\_:\_:)](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword(\_:\_:\_:\_:)](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember(\_:\_:\_:)](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
- [ODRecordCopyDetails(\_:\_:\_:)](odrecordcopydetails%28______%29.md): Returns the values of a record’s attributes.
- [ODRecordCopyValues(\_:\_:\_:)](odrecordcopyvalues%28______%29.md): Returns the value of a single attribute of a record.
- [ODRecordDelete(\_:\_:)](odrecorddelete%28____%29.md): Deletes a record from a node and invalidates the record.
- [ODRecordGetRecordName(\_:)](odrecordgetrecordname%28__%29.md): Returns the official name of a record.
- [ODRecordGetRecordType(\_:)](odrecordgetrecordtype%28__%29.md): Returns the type of a record.
- [ODRecordGetTypeID()](odrecordgettypeid%28%29.md): Returns the type ID for a record.
- [ODRecordRemoveMember(\_:\_:\_:)](odrecordremovemember%28______%29.md): Removes a record as a member from a specified group record.
- [ODRecordRemoveValue(\_:\_:\_:\_:)](odrecordremovevalue%28________%29.md): Removes a value from a record’s attribute.
- [ODRecordSetNodeCredentials(\_:\_:\_:\_:)](odrecordsetnodecredentials%28________%29.md): Sets node authentication credentials for a given record.
- [ODRecordSetNodeCredentialsExtended(\_:\_:\_:\_:\_:\_:\_:)](odrecordsetnodecredentialsextended%28______________%29.md): Sets node authentication credentials for a record using a specified authentication method.
- [ODRecordSetValue(\_:\_:\_:\_:)](odrecordsetvalue%28________%29.md): Sets one or more attribute values of a record.

# ODRecordSynchronize (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Synchronizes a record with the directory to get current data and commit changes.

## Declaration

```objectivec
extern bool ODRecordSynchronize(ODRecordRef record, CFErrorRef*error);
```

## Parameters

- `record`: The record.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if the record is successfully synchronized; otherwise, `false`.

<a id="Discussion"></a>

## Discussion

This function refetches any attributes which have been fetched previously, but it does not fetch previously unfetched attributes.

## See Also

### Working with Records

- [ODRecordAddMember](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
- [ODRecordCopyDetails](odrecordcopydetails%28______%29.md): Returns the values of a record’s attributes.
- [ODRecordCopyPasswordPolicy](odrecordcopypasswordpolicy.md): Deprecated. Returns the password policies of a record.
- [ODRecordCopyValues](odrecordcopyvalues%28______%29.md): Returns the value of a single attribute of a record.
- [ODRecordDelete](odrecorddelete%28____%29.md): Deletes a record from a node and invalidates the record.
- [ODRecordGetRecordName](odrecordgetrecordname%28__%29.md): Returns the official name of a record.
- [ODRecordGetRecordType](odrecordgetrecordtype%28__%29.md): Returns the type of a record.
- [ODRecordGetTypeID](odrecordgettypeid%28%29.md): Returns the type ID for a record.
- [ODRecordRemoveMember](odrecordremovemember%28______%29.md): Removes a record as a member from a specified group record.
- [ODRecordRemoveValue](odrecordremovevalue%28________%29.md): Removes a value from a record’s attribute.
- [ODRecordSetNodeCredentials](odrecordsetnodecredentials%28________%29.md): Sets node authentication credentials for a given record.
- [ODRecordSetNodeCredentialsExtended](odrecordsetnodecredentialsextended%28______________%29.md): Sets node authentication credentials for a record using a specified authentication method.
