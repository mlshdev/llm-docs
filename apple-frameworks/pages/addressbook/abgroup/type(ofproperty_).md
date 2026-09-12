> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/type(ofproperty:)](https://developer.apple.com/documentation/addressbook/abgroup/type(ofproperty:))

# type(ofProperty:) (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns the type for a given property.

## Declaration

```swift
class func type(ofProperty property: String!) -> ABPropertyType
```

## Parameters

- `property`: The property whose type will be returned.

<a id="return-value"></a>

## Return Value

The property type of `property`.

<a id="Discussion"></a>

## Discussion

If the property does not exist, this method returns `kABErrorInProperty`.

## See Also

### Managing properties

- [addPropertiesAndTypes(\_:)](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties(\_:)](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties()](properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.

# typeOfProperty: (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns the type for a given property.

## Declaration

```objectivec
+ (ABPropertyType) typeOfProperty:(NSString *) property;
```

## Parameters

- `property`: The property whose type will be returned.

<a id="return-value"></a>

## Return Value

The property type of `property`.

<a id="Discussion"></a>

## Discussion

If the property does not exist, this method returns `kABErrorInProperty`.

## See Also

### Managing properties

- [addPropertiesAndTypes:](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [removeProperties:](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties](properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.
