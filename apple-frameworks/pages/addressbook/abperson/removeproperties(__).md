> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abperson/removeproperties(_:)](https://developer.apple.com/documentation/addressbook/abperson/removeproperties(_:))

# removeProperties(\_:) (Swift)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Removes the given properties from all the records of this type in the Address Book database.

## Declaration

```swift
class func removeProperties(_ properties: [Any]!) -> Int
```

## Parameters

- `properties`: An array of properties to remove.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed, or `-1` if an error occurs.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This method is not implemented.

## See Also

### Managing Properties

- [addPropertiesAndTypes(\_:)](addpropertiesandtypes%28__%29.md): Adds the given properties to all the records of this type in the Address Book database.
- [properties()](properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [type(ofProperty:)](type%28ofproperty_%29.md): Returns the type of a given property.

# removeProperties: (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Removes the given properties from all the records of this type in the Address Book database.

## Declaration

```objectivec
+ (NSInteger) removeProperties:(NSArray *) properties;
```

## Parameters

- `properties`: An array of properties to remove.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed, or `-1` if an error occurs.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This method is not implemented.

## See Also

### Managing Properties

- [addPropertiesAndTypes:](addpropertiesandtypes%28__%29.md): Adds the given properties to all the records of this type in the Address Book database.
- [properties](properties%28%29.md): Returns an array of the names of all the properties for the record in the Address Book database.
- [typeOfProperty:](type%28ofproperty_%29.md): Returns the type of a given property.
