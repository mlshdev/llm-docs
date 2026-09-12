> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaentity/enumeratevalues(forproperties:using:)](https://developer.apple.com/documentation/mediaplayer/mpmediaentity/enumeratevalues(forproperties:using:))

# enumerateValues(forProperties:using:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Executes a provided block with the fetched values for the given item properties.

## Declaration

```swift
func enumerateValues(forProperties properties: Set<String>, using block: @escaping (String, Any, UnsafeMutablePointer<ObjCBool>) -> Void)
```

## Parameters

- `properties`: A set of property keys that you want the values for.
- `block`: A block object that executes for each fetched property value.

<a id="Discussion"></a>

## Discussion

Use this method to get property values in a batch fashion. Anytime the app accesses more than one property, enumerating over a set of property keys is more efficient than fetching each individual property with [value(forProperty:)](value%28forproperty_%29.md).

To see which media property keys you can use with this method, refer to [Media entity property keys](../media-entity-property-keys.md), [General media item property keys](../general-media-item-property-keys.md), [Playlist property keys](../playlist-property-keys.md), and [User-defined property keys](../user-defined-property-keys.md).

## See Also

### Working with media properties

- [canFilter(byProperty:)](canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [subscript(\_:)](subscript%28__%29.md): Returns the object specified by the key.
- [value(forProperty:)](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.

# enumerateValuesForProperties:usingBlock: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · visionOS 1.0+

Executes a provided block with the fetched values for the given item properties.

## Declaration

```objectivec
- (void) enumerateValuesForProperties:(NSSet<NSString *> *) properties usingBlock:(void (^)(NSString *property, id value, BOOL *stop)) block;
```

## Parameters

- `properties`: A set of property keys that you want the values for.
- `block`: A block object that executes for each fetched property value.

<a id="Discussion"></a>

## Discussion

Use this method to get property values in a batch fashion. Anytime the app accesses more than one property, enumerating over a set of property keys is more efficient than fetching each individual property with [valueForProperty:](value%28forproperty_%29.md).

To see which media property keys you can use with this method, refer to [Media entity property keys](../media-entity-property-keys.md), [General media item property keys](../general-media-item-property-keys.md), [Playlist property keys](../playlist-property-keys.md), and [User-defined property keys](../user-defined-property-keys.md).

## See Also

### Working with media properties

- [canFilterByProperty:](canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [persistentID](persistentid.md): The persistent identifier for a media entity.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the object specified by the key.
- [valueForProperty:](value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](../mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.
