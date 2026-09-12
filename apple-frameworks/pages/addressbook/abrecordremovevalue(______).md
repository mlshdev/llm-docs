> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abrecordremovevalue(_:_:_:)](https://developer.apple.com/documentation/addressbook/abrecordremovevalue(_:_:_:))

# ABRecordRemoveValue(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Removes the value of the given property.

> use CN mutable object's properties, setting to @, @\[\], or nil

## Declaration

```swift
func ABRecordRemoveValue(_ record: ABRecord!, _ property: ABPropertyID, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>!) -> Bool
```

```swift
func ABRecordRemoveValue(_ record: ABRecordRef!, _ property: CFString!) -> Bool
```

## Parameters

- `record`: The record whose value you wish to remove.
- `property`: The property name in `record` whose value you wish to remove. May be a pre-defined or program-defined property. See `Common Properties` for a list of properties all records have, and specific ABRecord derived opaque types for any additional properties.

<a id="return-value"></a>

## Return Value

The value for `property` in `record`.The type of the returned value depends on the property type (see PropertyTypes for a list of possible property types). You are responsiblefor releasing this object.

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
- [ABRecordSetValue(\_:\_:\_:\_:)](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord(\_:\_:)](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.

# ABRecordRemoveValue (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 9.0) · iPadOS 2.0+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS

Removes the value of the given property.

> use CN mutable object's properties, setting to @, @\[\], or nil

## Declaration

```objectivec
extern bool ABRecordRemoveValue(ABRecordRef record, ABPropertyID property, CFErrorRef*error);
```

```objectivec
extern bool ABRecordRemoveValue(ABRecordRef record, CFStringRef property);
```

## Parameters

- `record`: The record whose value you wish to remove.
- `property`: The property name in `record` whose value you wish to remove. May be a pre-defined or program-defined property. See `Common Properties` for a list of properties all records have, and specific ABRecord derived opaque types for any additional properties.

<a id="return-value"></a>

## Return Value

The value for `property` in `record`.The type of the returned value depends on the property type (see PropertyTypes for a list of possible property types). You are responsiblefor releasing this object.

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
- [ABRecordSetValue](abrecordsetvalue%28________%29.md): Deprecated. Sets the value of a given property for a record.
- [ABRemoveRecord](abremoverecord%28____%29.md): Removes the specified record from the Address Book database.
