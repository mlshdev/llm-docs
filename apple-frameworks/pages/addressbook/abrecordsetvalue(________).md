> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecordsetvalue(_:_:_:_:)](https://developer.apple.com/documentation/addressbook/abrecordsetvalue(_:_:_:_:))

# ABRecordSetValue(\_:\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Sets the value of a given property for a record.

> use CN mutable object's properties

## Declaration

```swift
func ABRecordSetValue(_ record: ABRecord!, _ property: ABPropertyID, _ value: CFTypeRef!, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

```swift
func ABRecordSetValue(_ record: ABRecordRef!, _ property: CFString!, _ value: CFTypeRef!) -> Bool
```

## Parameters

- `record`: The record you wish to modify.
- `property`: The property whose value you wish to set. May be a pre-defined or program-defined property. See `Common Properties` for a list of properties all records have, and specific ABRecord derived opaque types for any additional properties. If `NULL`, this function raises an exception.
- `value`: The new value for `property` in `record`. If `NULL` or not the correct type, this function raises an exception.

<a id="return-value"></a>

## Return Value

If `property` isa multi-value list property, this method checks to see if the valuesin the multi-value list are the same type. If the multi-value list containsmixed types, this method returns `false`.Returns `true` if successful, `false` otherwise.

## See Also

### Records

- [ABAddRecord(\_:\_:)](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId(\_:\_:)](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId(\_:\_:)](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary(\_:\_:)](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType(\_:)](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId(\_:)](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue(\_:\_:)](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy(\_:)](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly(\_:)](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue(\_:\_:\_:)](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

# ABRecordSetValue (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Sets the value of a given property for a record.

> use CN mutable object's properties

## Declaration

```objectivec
extern bool ABRecordSetValue(ABRecordRef record, ABPropertyID property, CFTypeRef value, CFErrorRef*error);
```

```objectivec
extern bool ABRecordSetValue(ABRecordRef record, CFStringRef property, CFTypeRef value);
```

## Parameters

- `record`: The record you wish to modify.
- `property`: The property whose value you wish to set. May be a pre-defined or program-defined property. See `Common Properties` for a list of properties all records have, and specific ABRecord derived opaque types for any additional properties. If `NULL`, this function raises an exception.
- `value`: The new value for `property` in `record`. If `NULL` or not the correct type, this function raises an exception.

<a id="return-value"></a>

## Return Value

If `property` isa multi-value list property, this method checks to see if the valuesin the multi-value list are the same type. If the multi-value list containsmixed types, this method returns `false`.Returns `true` if successful, `false` otherwise.

## See Also

### Records

- [ABAddRecord](abaddrecord%28____%29.md): Adds a record of the specified type to the Address Book database.
- [ABCopyRecordForUniqueId](abcopyrecordforuniqueid%28____%29.md): Returns the record that matches the given unique ID.
- [ABCopyRecordTypeFromUniqueId](abcopyrecordtypefromuniqueid%28____%29.md): Returns the type name of the record that matches a given unique ID.
- [ABCreateFormattedAddressFromDictionary](abcreateformattedaddressfromdictionary%28____%29.md): Returns a string containing the formatted address.
- [ABRecordCopyRecordType](abrecordcopyrecordtype%28__%29.md): Returns the type of the given record.
- [ABRecordCopyUniqueId](abrecordcopyuniqueid%28__%29.md): Returns the unique ID of the receiver.
- [ABRecordCopyValue](abrecordcopyvalue%28____%29.md): Deprecated. Returns the value of the given property.
- [ABRecordCreateCopy](abrecordcreatecopy%28__%29.md): Returns a copy of the given record.
- [ABRecordIsReadOnly](abrecordisreadonly%28__%29.md): Returns whether or not the record is read-only.
- [ABRecordRemoveValue](abrecordremovevalue%28______%29.md): Deprecated. Removes the value of the given property.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.
