> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecordcopypasswordpolicy](https://developer.apple.com/documentation/opendirectory/odrecordcopypasswordpolicy)

# ODRecordCopyPasswordPolicy

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+ (deprecated in 10.9)

Returns the password policies of a record.

## Declaration

```objectivec
extern CFDictionaryRefODRecordCopyPasswordPolicy(CFAllocatorRef allocator, ODRecordRef record, CFErrorRef*error);
```

## Parameters

- `allocator`: The memory allocator to use. If `NULL`, the default allocator is used.
- `record`: The record.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The password policies for the record, or `NULL` if no policies have been set.

## See Also

### Working with Records

- [ODRecordAddMember](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
- [ODRecordCopyDetails](odrecordcopydetails%28______%29.md): Returns the values of a record’s attributes.
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
