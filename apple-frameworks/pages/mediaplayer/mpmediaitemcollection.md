> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemcollection](https://developer.apple.com/documentation/mediaplayer/mpmediaitemcollection)

# MPMediaItemCollection (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A sorted set of media items from the media library.

## Declaration

```swift
class MPMediaItemCollection
```

<a id="overview"></a>

## Overview

Typically, you use this class by requesting an array of [collections](mpmediaquery/collections.md) from a media query by way of its collections property. [MPMediaQuery](mpmediaquery.md) describes media queries.

The grouping type for the media query determines the arrangement of the media items you obtain. You also use the media query [collections](mpmediaquery/collections.md) property to obtain synced playlists, as described in [MPMediaPlaylist](mpmediaplaylist.md).

A media item collection can have a wide range of metadata associated with it. You access this metadata using the [value(forProperty:)](mpmediaentity/value%28forproperty_%29.md) method along with the property keys described in this document. You can also access metadata in a batch fashion using the [enumerateValues(forProperties:using:)](mpmediaentity/enumeratevalues%28forproperties_using_%29.md) method. In some cases, this is more efficient. [MPMediaEntity](mpmediaentity.md) defines and describes both of these methods.

## Topics

### Creating a media item collection

- [init(items:)](mpmediaitemcollection/init%28items_%29.md): Initializes a media item collection with an array of media items.

### Using a media item collection

- [items](mpmediaitemcollection/items.md): The media items in a media item collection.
- [representativeItem](mpmediaitemcollection/representativeitem.md): A media item whose properties are representative of the other media items in a collection.
- [count](mpmediaitemcollection/count.md): The number of media items in a collection.
- [mediaTypes](mpmediaitemcollection/mediatypes.md): The types of the media items in a collection.

## Relationships

### Inherits From

- [MPMediaEntity](mpmediaentity.md)

### Inherited By

- [MPMediaPlaylist](mpmediaplaylist.md)

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
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaItemCollection (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A sorted set of media items from the media library.

## Declaration

```objectivec
@interface MPMediaItemCollection : MPMediaEntity
```

<a id="overview"></a>

## Overview

Typically, you use this class by requesting an array of [collections](mpmediaquery/collections.md) from a media query by way of its collections property. [MPMediaQuery](mpmediaquery.md) describes media queries.

The grouping type for the media query determines the arrangement of the media items you obtain. You also use the media query [collections](mpmediaquery/collections.md) property to obtain synced playlists, as described in [MPMediaPlaylist](mpmediaplaylist.md).

A media item collection can have a wide range of metadata associated with it. You access this metadata using the [valueForProperty:](mpmediaentity/value%28forproperty_%29.md) method along with the property keys described in this document. You can also access metadata in a batch fashion using the [enumerateValuesForProperties:usingBlock:](mpmediaentity/enumeratevalues%28forproperties_using_%29.md) method. In some cases, this is more efficient. [MPMediaEntity](mpmediaentity.md) defines and describes both of these methods.

## Topics

### Creating a media item collection

- [collectionWithItems:](mpmediaitemcollection/collectionwithitems_.md): Creates a media item collection by copying an array of media items.
- [initWithItems:](mpmediaitemcollection/init%28items_%29.md): Initializes a media item collection with an array of media items.

### Using a media item collection

- [items](mpmediaitemcollection/items.md): The media items in a media item collection.
- [representativeItem](mpmediaitemcollection/representativeitem.md): A media item whose properties are representative of the other media items in a collection.
- [count](mpmediaitemcollection/count.md): The number of media items in a collection.
- [mediaTypes](mpmediaitemcollection/mediatypes.md): The types of the media items in a collection.

## Relationships

### Inherits From

- [MPMediaEntity](mpmediaentity.md)

### Inherited By

- [MPMediaPlaylist](mpmediaplaylist.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
