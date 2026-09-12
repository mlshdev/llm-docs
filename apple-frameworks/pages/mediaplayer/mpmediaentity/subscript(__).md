> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaentity/subscript(_:)](https://developer.apple.com/documentation/mediaplayer/mpmediaentity/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Subscript  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the object specified by the key.

## Declaration

```swift
subscript(key: Any) -> Any? { get }
```

## Parameters

- `key`: The key associated with the retrieved object.

<a id="return-value"></a>

## Return Value

The object that is specified by the key.

<a id="Discussion"></a>

## Discussion

The method provides read-only support for Objective-C subscripting syntax with [MPMediaEntity](../mpmediaentity.md) property constants.

## See Also

### Working with media properties

- [canFilter(byProperty:)](canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValues(forProperties:using:)](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [value(forProperty:)](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the object specified by the key.

## Declaration

```objectivec
- (id) objectForKeyedSubscript:(id) key;
```

## Parameters

- `key`: The key associated with the retrieved object.

<a id="return-value"></a>

## Return Value

The object that is specified by the key.

<a id="Discussion"></a>

## Discussion

The method provides read-only support for Objective-C subscripting syntax with [MPMediaEntity](../mpmediaentity.md) property constants.

## See Also

### Working with media properties

- [canFilterByProperty:](canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValuesForProperties:usingBlock:](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [valueForProperty:](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.
