> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abremoveproperties(_:_:_:)](https://developer.apple.com/documentation/addressbook/abremoveproperties(_:_:_:))

# ABRemoveProperties(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.

## Declaration

```swift
func ABRemoveProperties(_ addressBook: ABAddressBookRef!, _ recordType: CFString!, _ properties: CFArray!) -> CFIndex
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The name of record to remove the properties from: kABGroupRecordType or kABPersonRecordType.
- `properties`: An array of properties (CFString objects) to remove.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This function is not implemented.

## See Also

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

# ABRemoveProperties (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.

## Declaration

```objectivec
extern CFIndex ABRemoveProperties(ABAddressBookRef addressBook, CFStringRef recordType, CFArrayRef properties);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The name of record to remove the properties from: kABGroupRecordType or kABPersonRecordType.
- `properties`: An array of properties (CFString objects) to remove.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This function is not implemented.

## See Also

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.
