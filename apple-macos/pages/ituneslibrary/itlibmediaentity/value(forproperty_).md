> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibmediaentity/value(forproperty:)](https://developer.apple.com/documentation/ituneslibrary/itlibmediaentity/value(forproperty:))

# value(forProperty:) (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Gets the value for a specified media property key.

## Declaration

```swift
func value(forProperty property: String) -> Any?
```

## Parameters

- `property`: The media property to retrieve the value from. Takes Media Item Properties and Playlist Properties from [ITLibMediaItem](../itlibmediaitem.md).

<a id="return-value"></a>

## Return Value

The value of the specified media property key.

## See Also

### Getting Media Item Properties

- [enumerateValues(forProperties:using:)](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the item properties.
- [enumerateValuesExcept(forProperties:using:)](enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.

# valueForProperty: (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Gets the value for a specified media property key.

## Declaration

```objectivec
- (id) valueForProperty:(NSString *) property;
```

## Parameters

- `property`: The media property to retrieve the value from. Takes Media Item Properties and Playlist Properties from [ITLibMediaItem](../itlibmediaitem.md).

<a id="return-value"></a>

## Return Value

The value of the specified media property key.

## See Also

### Getting Media Item Properties

- [enumerateValuesForProperties:usingBlock:](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the item properties.
- [enumerateValuesExceptForProperties:usingBlock:](enumeratevaluesexcept%28forproperties_using_%29.md): Executes a provided block with the fetched values for all properties in the entity except for the provided set.
