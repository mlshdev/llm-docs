> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopyrecordtypefromuniqueid(_:_:)](https://developer.apple.com/documentation/addressbook/abcopyrecordtypefromuniqueid(_:_:))

# ABCopyRecordTypeFromUniqueId(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the type name of the record that matches a given unique ID.

## Declaration

```swift
func ABCopyRecordTypeFromUniqueId(_ addressBook: ABAddressBookRef!, _ uniqueId: CFString!) -> Unmanaged<CFString>!
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `uniqueId`: A unique ID for the record. If this is `NULL`, this function raises an exception.

<a id="return-value"></a>

## Return Value

A string with the name of the type for the record that matches the given unique ID. You are responsible for releasing this object.

## See Also

### Records

- [ABAddRecord(\_:\_:)](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId(\_:\_:)](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCreateFormattedAddressFromDictionary(\_:\_:)](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType(\_:)](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId(\_:)](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue(\_:\_:)](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy(\_:)](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly(\_:)](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue(\_:\_:\_:)](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

# ABCopyRecordTypeFromUniqueId (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS 10.3+

Returns the type name of the record that matches a given unique ID.

## Declaration

```objectivec
extern CFStringRefABCopyRecordTypeFromUniqueId(ABAddressBookRef addressBook, CFStringRef uniqueId);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `uniqueId`: A unique ID for the record. If this is `NULL`, this function raises an exception.

<a id="return-value"></a>

## Return Value

A string with the name of the type for the record that matches the given unique ID. You are responsible for releasing this object.

## See Also

### Records

- [ABAddRecord](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCreateFormattedAddressFromDictionary](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.
