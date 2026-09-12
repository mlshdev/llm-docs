> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abaddpropertiesandtypes(_:_:_:)](https://developer.apple.com/documentation/addressbook/abaddpropertiesandtypes(_:_:_:))

# ABAddPropertiesAndTypes(\_:\_:\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.

## Declaration

```swift
func ABAddPropertiesAndTypes(_ addressBook: ABAddressBookRef!, _ recordType: CFString!, _ propertiesAndTypes: CFDictionary!) -> CFIndex
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The record type you wish to add properties to: kABGroupRecordType or kABPersonRecordType.
- `propertiesAndTypes`: A CFDictionary object containing the properties to add. In each dictionary entry, the key is a string with the property’s name, and the value is a constant with the property’s type. The property’s name must be unique. You may want to use Java-style package names for your properties, for example, `"org.dogclub.dogname"` or `"com.mycompany.customerID"`. The property type must be one of the constants described in [ABPropertyType](abpropertytype.md).

<a id="return-value"></a>

## Return Value

The number of properties successfully added.

## See Also

### Properties

- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

# ABAddPropertiesAndTypes (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.

## Declaration

```objectivec
extern CFIndex ABAddPropertiesAndTypes(ABAddressBookRef addressBook, CFStringRef recordType, CFDictionaryRef propertiesAndTypes);
```

## Parameters

- `addressBook`: The address book for the logged-in user.
- `recordType`: The record type you wish to add properties to: kABGroupRecordType or kABPersonRecordType.
- `propertiesAndTypes`: A CFDictionary object containing the properties to add. In each dictionary entry, the key is a string with the property’s name, and the value is a constant with the property’s type. The property’s name must be unique. You may want to use Java-style package names for your properties, for example, `"org.dogclub.dogname"` or `"com.mycompany.customerID"`. The property type must be one of the constants described in [ABPropertyType](abpropertytype.md).

<a id="return-value"></a>

## Return Value

The number of properties successfully added.

## See Also

### Properties

- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.
