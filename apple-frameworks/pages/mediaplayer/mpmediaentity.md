> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaentity](https://developer.apple.com/documentation/mediaplayer/mpmediaentity)

# MPMediaEntity (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The abstract superclass for media items, media item collections, and media playlist instances.

## Declaration

```swift
class MPMediaEntity
```

<a id="overview"></a>

## Overview

This is the superclass for [MPMediaItem](mpmediaitem.md) and [MPMediaItemCollection](mpmediaitemcollection.md) instances, and in turn for [MPMediaPlaylist](mpmediaplaylist.md) instances.

## Topics

### Working with media properties

- [canFilter(byProperty:)](mpmediaentity/canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValues(forProperties:using:)](mpmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](mpmediaentity/persistentid.md): The persistent identifier for a media entity.
- [subscript(\_:)](mpmediaentity/subscript%28__%29.md): Returns the object specified by the key.
- [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.

### Media entity property keys

- [Media entity property keys](media-entity-property-keys.md): The property keys used to retrieve metadata for media entities.

### Initializers

- [init(coder:)](mpmediaentity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMediaItem](mpmediaitem.md)
- [MPMediaItemCollection](mpmediaitemcollection.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.

# MPMediaEntity (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 4.2+ · iPadOS 4.2+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The abstract superclass for media items, media item collections, and media playlist instances.

## Declaration

```objectivec
@interface MPMediaEntity : NSObject
```

<a id="overview"></a>

## Overview

This is the superclass for [MPMediaItem](mpmediaitem.md) and [MPMediaItemCollection](mpmediaitemcollection.md) instances, and in turn for [MPMediaPlaylist](mpmediaplaylist.md) instances.

## Topics

### Working with media properties

- [canFilterByProperty:](mpmediaentity/canfilter%28byproperty_%29.md): Indicates whether you can use the media property key that you specify to construct a media property predicate.
- [enumerateValuesForProperties:usingBlock:](mpmediaentity/enumeratevalues%28forproperties_using_%29.md): Executes a provided block with the fetched values for the given item properties.
- [persistentID](mpmediaentity/persistentid.md): The persistent identifier for a media entity.
- [objectForKeyedSubscript:](mpmediaentity/subscript%28__%29.md): Returns the object specified by the key.
- [valueForProperty:](mpmediaentity/value%28forproperty_%29.md): Retrieves the value for a specified media property key.
- [MPMediaEntityPersistentID](mpmediaentitypersistentid.md): Defines the type for storing a persistent identifier to a particular entity.

### Media entity property keys

- [Media entity property keys](media-entity-property-keys.md): The property keys used to retrieve metadata for media entities.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPMediaItem](mpmediaitem.md)
- [MPMediaItemCollection](mpmediaitemcollection.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
