> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecordcopyrecordtype(_:)](https://developer.apple.com/documentation/addressbook/abrecordcopyrecordtype(_:))

# ABRecordCopyRecordType(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the type of the given record.

## Declaration

```swift
func ABRecordCopyRecordType(_ record: ABRecordRef!) -> Unmanaged<CFString>!
```

## Parameters

- `record`: The record whose type you wish to obtain.

<a id="return-value"></a>

## Return Value

The type of `record`,one of the `kAB...RecordType` constants.You are responsible for releasing this object.

## See Also

### Records

- [ABAddRecord(\_:\_:)](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId(\_:\_:)](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId(\_:\_:)](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary(\_:\_:)](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyUniqueId(\_:)](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue(\_:\_:)](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy(\_:)](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly(\_:)](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue(\_:\_:\_:)](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

# ABRecordCopyRecordType (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the type of the given record.

## Declaration

```objectivec
extern CFStringRefABRecordCopyRecordType(ABRecordRef record);
```

## Parameters

- `record`: The record whose type you wish to obtain.

<a id="return-value"></a>

## Return Value

The type of `record`,one of the `kAB...RecordType` constants.You are responsible for releasing this object.

## See Also

### Records

- [ABAddRecord](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyUniqueId](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRecordSetValue](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.
