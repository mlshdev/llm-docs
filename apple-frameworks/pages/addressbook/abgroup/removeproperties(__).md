> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/abgroup/removeproperties(_:)](https://developer.apple.com/documentation/addressbook/abgroup/removeproperties(_:))

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

- `properties`: An array of the properties to be removed.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This method is not implemented.

## See Also

### Managing properties

- [addPropertiesAndTypes(\_:)](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [properties()](properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.
- [type(ofProperty:)](type%28ofproperty_%29.md): Returns the type for a given property.

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

- `properties`: An array of the properties to be removed.

<a id="return-value"></a>

## Return Value

The number of properties successfully removed.

<a id="Discussion"></a>

## Discussion

Only custom properties can be removed. This method is not implemented.

## See Also

### Managing properties

- [addPropertiesAndTypes:](addpropertiesandtypes%28__%29.md): Adds the given properties to all records of this type in the Address Book database.
- [properties](properties%28%29.md): Returns an array of the names of all the properties for this record type in the Address Book database.
- [typeOfProperty:](type%28ofproperty_%29.md): Returns the type for a given property.
