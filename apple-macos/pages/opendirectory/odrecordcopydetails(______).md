> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odrecordcopydetails(_:_:_:)](https://developer.apple.com/documentation/opendirectory/odrecordcopydetails(_:_:_:))

# ODRecordCopyDetails(\_:\_:\_:) (Swift)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the values of a record’s attributes.

## Declaration

```swift
func ODRecordCopyDetails(_ record: ODRecordRef!, _ attributes: CFArray!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Unmanaged<CFDictionary>!
```

## Parameters

- `record`: The record.
- `attributes`: An array of attributes to return values for. Elements are of type `CFStringRef` or `ODAttributeType`. If `NULL`, all currently fetched values are returned.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The attribute values of the record.

<a id="Discussion"></a>

## Discussion

The returned values are of type `CFString` or `CFData`, depending on the type of attribute. If `inAttributes` is not `NULL` and a requested attribute has not been fetched before, it is fetched in order to return its value.

## See Also

### Related Documentation

- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Records

- [ODRecordAddMember(\_:\_:\_:)](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue(\_:\_:\_:\_:)](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword(\_:\_:\_:\_:)](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember(\_:\_:\_:)](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
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

# ODRecordCopyDetails (Objective-C)

**Framework:** Open Directory  
**Kind:** Function  
**Availability:** Mac Catalyst · macOS 10.6+

Returns the values of a record’s attributes.

## Declaration

```objectivec
extern CFDictionaryRefODRecordCopyDetails(ODRecordRef record, CFArrayRef attributes, CFErrorRef*error);
```

## Parameters

- `record`: The record.
- `attributes`: An array of attributes to return values for. Elements are of type `CFStringRef` or `ODAttributeType`. If `NULL`, all currently fetched values are returned.
- `error`: An error reference for error details. Can be `NULL`.

<a id="return-value"></a>

## Return Value

The attribute values of the record.

<a id="Discussion"></a>

## Discussion

The returned values are of type `CFString` or `CFData`, depending on the type of attribute. If `inAttributes` is not `NULL` and a requested attribute has not been fetched before, it is fetched in order to return its value.

## See Also

### Related Documentation

- [General Attribute Types](general-attribute-types.md): Types of Open Directory attributes.

### Working with Records

- [ODRecordAddMember](odrecordaddmember%28______%29.md): Adds a record as a member of a group record.
- [ODRecordAddValue](odrecordaddvalue%28________%29.md): Adds a value to an attribute of a record.
- [ODRecordChangePassword](odrecordchangepassword%28________%29.md): Changes the password of a record.
- [ODRecordContainsMember](odrecordcontainsmember%28______%29.md): Returns whether a group record contains a given record.
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
