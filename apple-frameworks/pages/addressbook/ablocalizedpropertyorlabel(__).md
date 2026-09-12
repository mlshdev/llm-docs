> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/ablocalizedpropertyorlabel(_:)](https://developer.apple.com/documentation/addressbook/ablocalizedpropertyorlabel(_:))

# ABLocalizedPropertyOrLabel(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the localized version of a built in property, label, or key.

## Declaration

```swift
func ABLocalizedPropertyOrLabel(_ propertyOrLabel: String!) -> String!
```

<a id="Discussion"></a>

## Discussion

The `propertyOrLabel` argument is the property, label, or key you wish to localize. Returns `propertyOrLabel` if a localized string can not be found

## See Also

### Properties

- [ABAddPropertiesAndTypes(\_:\_:\_:)](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType(\_:\_:)](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel(\_:)](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABRemoveProperties(\_:\_:\_:)](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty(\_:\_:\_:)](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.

# ABLocalizedPropertyOrLabel (Objective-C)

**Framework:** Address Book  
**Kind:** Function  
**Availability:** macOS

Returns the localized version of a built in property, label, or key.

## Declaration

```objectivec
NSString *ABLocalizedPropertyOrLabel(NSString *propertyOrLabel);
```

<a id="Discussion"></a>

## Discussion

The `propertyOrLabel` argument is the property, label, or key you wish to localize. Returns `propertyOrLabel` if a localized string can not be found

## See Also

### Properties

- [ABAddPropertiesAndTypes](abaddpropertiesandtypes%28______%29.md): Adds the given properties to all the records of the specified type in the Address Book database, and returns the number of properties successfully added.
- [ABCopyArrayOfPropertiesForRecordType](abcopyarrayofpropertiesforrecordtype%28____%29.md): Returns an array containing the names of all the properties for the specified record type.
- [ABCopyLocalizedPropertyOrLabel](abcopylocalizedpropertyorlabel%28__%29.md): Returns the localized version of a built in property,label, or key.
- [ABRemoveProperties](abremoveproperties%28______%29.md): Removes the given properties from all the records of this type in the Address Book database, and returns the number of properties successfully removed.
- [ABTypeOfProperty](abtypeofproperty%28______%29.md): Returns the type of a given property for a given record.
