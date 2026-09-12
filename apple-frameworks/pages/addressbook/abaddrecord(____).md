> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddrecord(_:_:)](https://developer.apple.com/documentation/addressbook/abaddrecord(_:_:))

# ABAddRecord(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a record of the specified type to the Address Book database.

## Declaration

```swift
func ABAddRecord(_ addressBook: ABAddressBookRef!, _ record: ABRecordRef!) -> Bool
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `record`: The record to add to the Address Book database. If this parameter is `NULL`, the function raises an exception.

<a id="return-value"></a>

## Return Value

`true` if the record was added successfully, `false` otherwise.

## See Also

### Records

- [ABCopyRecordForUniqueId(\_:\_:)](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId(\_:\_:)](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary(\_:\_:)](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType(\_:)](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId(\_:)](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue(\_:\_:)](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy(\_:)](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly(\_:)](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue(\_:\_:\_:)](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

# ABAddRecord (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds a record of the specified type to the Address Book database.

## Declaration

```objectivec
extern bool ABAddRecord(ABAddressBookRef addressBook, ABRecordRef record);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `record`: The record to add to the Address Book database. If this parameter is `NULL`, the function raises an exception.

<a id="return-value"></a>

## Return Value

`true` if the record was added successfully, `false` otherwise.

## See Also

### Records

- [ABCopyRecordForUniqueId](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.
