> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecordchangepassword(_:_:_:_:)](https://developer.apple.com/documentation/opendirectory/odrecordchangepassword(_:_:_:_:))

# ODRecordChangePassword(\_:\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Changes the password of a record.

## Declaration

```swift
func ODRecordChangePassword(_ record: ODRecordRef!, _ oldPassword: CFString!, _ newPassword: CFString!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

## Parameters

- `record`: The record.
- `oldPassword`: The record’s old password. Pass `NULL` if the record has no old password.
- `newPassword`: The record’s new password.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if the password is successfully changed; `false` otherwise.

## See Also

### Working with Records

- [ODRecordAddMember(\_:\_:\_:)](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue(\_:\_:\_:\_:)](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
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
- [ODRecordSynchronize(\_:\_:)](odrecordsynchronize%28____%29.md): Synchronizes a record with the directory to get current data and commit changes.

# ODRecordChangePassword (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Changes the password of a record.

## Declaration

```objectivec
extern bool ODRecordChangePassword(ODRecordRef record, CFStringRef oldPassword, CFStringRef newPassword, CFErrorRef*error);
```

## Parameters

- `record`: The record.
- `oldPassword`: The record’s old password. Pass `NULL` if the record has no old password.
- `newPassword`: The record’s new password.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

`true` if the password is successfully changed; `false` otherwise.

## See Also

### Working with Records

- [ODRecordAddMember](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
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
- [ODRecordSetNodeCredentialsUsingKerberosCache](odrecordsetnodecredentialsusingkerberoscache.md): Deprecated. Sets credentials for interacting with a record’s node with the Kerberos cache.
