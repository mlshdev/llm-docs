> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopyarrayofpropertiesforrecordtype(_:_:)](https://developer.apple.com/documentation/addressbook/abcopyarrayofpropertiesforrecordtype(_:_:))

# ABCopyArrayOfPropertiesForRecordType(\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array containing the names of all the properties for the specified record type.

## Declaration

```swift
func ABCopyArrayOfPropertiesForRecordType(_ addressBook: ABAddressBookRef!, _ recordType: CFString!) -> Unmanaged<CFArray>!
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: Specifies the type of record: kABGroupRecordType or kABPersonRecordType.

<a id="return-value"></a>

## Return Value

An new array containing the names (CFString objects) of all the properties in `recordType`. You are responsible for releasing this object.

## See Also

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

# ABCopyArrayOfPropertiesForRecordType (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns an array containing the names of all the properties for the specified record type.

## Declaration

```objectivec
extern CFArrayRefABCopyArrayOfPropertiesForRecordType(ABAddressBookRef addressBook, CFStringRef recordType);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: Specifies the type of record: kABGroupRecordType or kABPersonRecordType.

<a id="return-value"></a>

## Return Value

An new array containing the names (CFString objects) of all the properties in `recordType`. You are responsible for releasing this object.

## See Also

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.
