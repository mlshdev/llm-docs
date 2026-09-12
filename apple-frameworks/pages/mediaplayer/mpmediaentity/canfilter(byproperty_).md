> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaentity/canfilter(byproperty:)](https://developer.apple.com/documentation/mediaplayer/mpmediaentity/canfilter(byproperty:))

# canFilter(byProperty:) (Swift)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Indicates whether you can use the media property key that you specify to construct a media property predicate.

## Declaration

```swift
class func canFilter(byProperty property: String) -> Bool
```

## Parameters

- `property`: The key for the media property that you want to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the property you are testing can be used to construct a media property predicate of type [MPMediaPropertyPredicate](../mpmediapropertypredicate.md); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

To see which media property keys you can use with this method, refer to [Media entity property keys](../media-entity-property-keys.md), [General media item property keys](../general-media-item-property-keys.md), [Playlist property keys](../playlist-property-keys.md), and [User-defined property keys](../user-defined-property-keys.md).

## See Also

### Working with media properties

- [enumerateValues(forProperties:using:)](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [subscript(\_:)](subscript%28__%29.md): Returns the object specified by the key.
- [value(forProperty:)](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.

# canFilterByProperty: (Objective-C)

**Framework:** Media Player  
**Kind:** Type Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Indicates whether you can use the media property key that you specify to construct a media property predicate.

## Declaration

```objectivec
+ (BOOL) canFilterByProperty:(NSString *) property;
```

## Parameters

- `property`: The key for the media property that you want to examine.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the property you are testing can be used to construct a media property predicate of type [MPMediaPropertyPredicate](../mpmediapropertypredicate.md); otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

To see which media property keys you can use with this method, refer to [Media entity property keys](../media-entity-property-keys.md), [General media item property keys](../general-media-item-property-keys.md), [Playlist property keys](../playlist-property-keys.md), and [User-defined property keys](../user-defined-property-keys.md).

## See Also

### Working with media properties

- [enumerateValuesForProperties:usingBlock:](enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the object specified by the key.
- [valueForProperty:](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.
