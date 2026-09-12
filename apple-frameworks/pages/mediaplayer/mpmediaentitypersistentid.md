> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaentitypersistentid](https://developer.apple.com/documentation/mediaplayer/mpmediaentitypersistentid)

# MPMediaEntityPersistentID (Swift)

**Framework:** Media Player  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the type for storing a persistent identifier to a particular entity.

## Declaration

```swift
typealias MPMediaEntityPersistentID = UInt64
```

<a id="Discussion"></a>

## Discussion

The value persists across application launches and across syncs that don’t change the sync status of the media item. The value isn’t guaranteed to persist across a sync/unsync/sync cycle.

## See Also

### Working with media properties

- [canFilter(byProperty:)](mpmediaentity/canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValues(forProperties:using:)](mpmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](mpmediaentity/persistentid.md): The persistent identifier for a media entity.
- [subscript(\_:)](mpmediaentity/subscript%28__%29.md): Returns the object specified by the key.
- [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md): Retrieves the value for a specified media property key.

# MPMediaEntityPersistentID (Objective-C)

**Framework:** Media Player  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Defines the type for storing a persistent identifier to a particular entity.

## Declaration

```objectivec
typedef uint64_t MPMediaEntityPersistentID;
```

<a id="Discussion"></a>

## Discussion

The value persists across application launches and across syncs that don’t change the sync status of the media item. The value isn’t guaranteed to persist across a sync/unsync/sync cycle.

## See Also

### Working with media properties

- [canFilterByProperty:](mpmediaentity/canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValuesForProperties:usingBlock:](mpmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](mpmediaentity/persistentid.md): The persistent identifier for a media entity.
- [objectForKeyedSubscript:](mpmediaentity/subscript%28__%29.md): Returns the object specified by the key.
- [valueForProperty:](mpmediaentity/value%28forproperty_%29.md): Retrieves the value for a specified media property key.
