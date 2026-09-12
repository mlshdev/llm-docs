> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abcopylocalizedpropertyorlabel(_:)](https://developer.apple.com/documentation/addressbook/abcopylocalizedpropertyorlabel(_:))

# ABCopyLocalizedPropertyOrLabel(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the localized version of a built in property,label, or key.

## Declaration

```swift
func ABCopyLocalizedPropertyOrLabel(_ labelOrProperty: CFString!) -> Unmanaged<CFString>!
```

## Parameters

- `labelOrProperty`: The property, label, or key to be localized.

<a id="return-value"></a>

## Return Value

The localized versionof `propertyOrLabel`, or `propertyOrLabel` ifa localized string can not be found. You are responsible for releasingthis object.

## See Also

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABLocalizedPropertyOrLabel(\_:)](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

# ABCopyLocalizedPropertyOrLabel (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the localized version of a built in property,label, or key.

## Declaration

```objectivec
extern CFStringRefABCopyLocalizedPropertyOrLabel(CFStringRef labelOrProperty);
```

## Parameters

- `labelOrProperty`: The property, label, or key to be localized.

<a id="return-value"></a>

## Return Value

The localized versionof `propertyOrLabel`, or `propertyOrLabel` ifa localized string can not be found. You are responsible for releasingthis object.

## See Also

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABLocalizedPropertyOrLabel](ablocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property, label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.
