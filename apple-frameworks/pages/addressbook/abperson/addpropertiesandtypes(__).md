> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/addpropertiesandtypes(_:)](https://developer.apple.com/documentation/addressbook/abperson/addpropertiesandtypes(_:))

# addPropertiesAndTypes(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Adds the given properties to all the records of this type in the Address Book database.

## Declaration

```swift
class func addPropertiesAndTypes(_ properties: [AnyHashable : Any]!) -> Int
```

## Parameters

- `properties`: A dictionary of properties to add, and their types.

<a id="return-value"></a>

## Return Value

The number of properties successfully added, or `-1` if an error occurs.

<a id="Discussion"></a>

## Discussion

In each dictionary entry, the key is a string with the property’s name, and the value is a constant with the property’s type. The property’s name must be unique. You may want to use Java-style package names for your properties, for example, `org.dogclub.dogname` or `com.mycompany.customerID`. The property type must be one of the constants described in [Property Types](../property_types.md).

## See Also

### Managing Properties

- [removeProperties(\_:)](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties()](properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [type(ofProperty:)](type%28ofproperty_%29.md): Returns the type of a given property.

# addPropertiesAndTypes: (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Adds the given properties to all the records of this type in the Address Book database.

## Declaration

```objectivec
+ (NSInteger) addPropertiesAndTypes:(NSDictionary *) properties;
```

## Parameters

- `properties`: A dictionary of properties to add, and their types.

<a id="return-value"></a>

## Return Value

The number of properties successfully added, or `-1` if an error occurs.

<a id="Discussion"></a>

## Discussion

In each dictionary entry, the key is a string with the property’s name, and the value is a constant with the property’s type. The property’s name must be unique. You may want to use Java-style package names for your properties, for example, `org.dogclub.dogname` or `com.mycompany.customerID`. The property type must be one of the constants described in [Property Types](../property_types.md).

## See Also

### Managing Properties

- [removeProperties:](removeproperties%28__%29.md): Removes the given properties from all the records of this type in the Address Book database.
- [properties](properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [typeOfProperty:](type%28ofproperty_%29.md): Returns the type of a given property.
