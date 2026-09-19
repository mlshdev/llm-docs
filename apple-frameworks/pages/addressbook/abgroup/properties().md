> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/addressbook/abgroup/properties()

# properties() (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns an array of the names of all the properties for this record type in the Address Book database.

## Declaration

```swift
class func properties() -> [Any]!
```

## See Also

### Managing properties

- [addPropertiesAndTypes(\_:)](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties(\_:)](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [type(ofProperty:)](type%28ofproperty_%29.md): Returns the type for a given property.

# properties (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns an array of the names of all the properties for this record type in the Address Book database.

## Declaration

```objectivec
+ (NSArray *) properties;
```

## See Also

### Managing properties

- [addPropertiesAndTypes:](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties:](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [typeOfProperty:](type%28ofproperty_%29.md): Returns the type for a given property.
