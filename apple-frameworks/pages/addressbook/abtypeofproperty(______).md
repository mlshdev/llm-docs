> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abtypeofproperty(_:_:_:)](https://developer.apple.com/documentation/addressbook/abtypeofproperty(_:_:_:))

# ABTypeOfProperty(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the type of a given property for a given record.

## Declaration

```swift
func ABTypeOfProperty(_ addressBook: ABAddressBookRef!, _ recordType: CFString!, _ property: CFString!) -> ABPropertyType
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The record type that contains `property`: kABGroupRecordType or kABPersonRecordType.
- `property`: The property whose type you wish to obtain.

<a id="return-value"></a>

## Return Value

The type of `property` as defined in [ABPropertyType](abpropertytype.md). If `property` does not exist in `recordType`, this function returns [kABErrorInProperty](kaberrorinproperty.md).

## See Also

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.

# ABTypeOfProperty (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the type of a given property for a given record.

## Declaration

```objectivec
extern ABPropertyType ABTypeOfProperty(ABAddressBookRef addressBook, CFStringRef recordType, CFStringRef property);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The record type that contains `property`: kABGroupRecordType or kABPersonRecordType.
- `property`: The property whose type you wish to obtain.

<a id="return-value"></a>

## Return Value

The type of `property` as defined in [ABPropertyType](abpropertytype.md). If `property` does not exist in `recordType`, this function returns [kABErrorInProperty](kaberrorinproperty.md).

## See Also

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
