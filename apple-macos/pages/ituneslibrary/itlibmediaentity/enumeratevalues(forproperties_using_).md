> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaentity/enumeratevalues(forproperties:using:)](https://developer.apple.com/documentation/ituneslibrary/itlibmediaentity/enumeratevalues(forproperties:using:))

# enumerateValues(forProperties:using:) (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Executes a provided block with the fetched values for the item properties.

## Declaration

```swift
func enumerateValues(forProperties properties: Set<String>?, using block: @escaping (String, Any, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `properties`: A set of keys for the properties to enumerate, or `nil` to enumerate all properties. Takes Media Item Properties and Playlist Properties from [ITLibMediaItem](../itlibmediaitem.md).
- `block`: A block object that executes for each property in the properties set.

<a id="Discussion"></a>

## Discussion

Use this method to get property values in a batch fashion. In some cases, enumerating over a set of property keys can be more efficient than fetching each individual property with [value(forProperty:)](value%28forproperty_%29.md).

## See Also

### Getting Media Item Properties

- [enumerateValuesExcept(forProperties:using:)](enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.
- [value(forProperty:)](value%28forproperty_%29.md): Gets the value for a specified media property key.

# enumerateValuesForProperties:usingBlock: (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Executes a provided block with the fetched values for the item properties.

## Declaration

```objectivec
- (void) enumerateValuesForProperties:(NSSet<NSString *> *) properties usingBlock:(void (^)(NSString *property, id value, BOOL *stop)) block;
```

## Parameters

- `properties`: A set of keys for the properties to enumerate, or `nil` to enumerate all properties. Takes Media Item Properties and Playlist Properties from [ITLibMediaItem](../itlibmediaitem.md).
- `block`: A block object that executes for each property in the properties set.

<a id="Discussion"></a>

## Discussion

Use this method to get property values in a batch fashion. In some cases, enumerating over a set of property keys can be more efficient than fetching each individual property with [valueForProperty:](value%28forproperty_%29.md).

## See Also

### Getting Media Item Properties

- [enumerateValuesExceptForProperties:usingBlock:](enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.
- [valueForProperty:](value%28forproperty_%29.md): Gets the value for a specified media property key.
