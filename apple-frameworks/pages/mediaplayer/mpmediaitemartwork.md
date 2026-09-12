> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemartwork](https://developer.apple.com/documentation/mediaplayer/mpmediaitemartwork)

# MPMediaItemArtwork (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A graphical image, such as music album cover art, associated with a media item.

## Declaration

```swift
class MPMediaItemArtwork
```

## Topics

### Resizing existing artwork

- [init(boundsSize:requestHandler:)](mpmediaitemartwork/init%28boundssize_requesthandler_%29.md): Creates a new image from existing artwork with the specified bounds.

### Using a media item image

- [image(at:)](mpmediaitemartwork/image%28at_%29.md): Returns the artwork image for an item at the given size.
- [bounds](mpmediaitemartwork/bounds.md): The maximum size, in points, of the image associated with the media item artwork.

### Initializers

- [init(image:)](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.

### Instance Properties

- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaItemArtwork (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 5.0+

A graphical image, such as music album cover art, associated with a media item.

## Declaration

```objectivec
@interface MPMediaItemArtwork : NSObject
```

## Topics

### Resizing existing artwork

- [initWithBoundsSize:requestHandler:](mpmediaitemartwork/init%28boundssize_requesthandler_%29.md): Creates a new image from existing artwork with the specified bounds.

### Using a media item image

- [imageWithSize:](mpmediaitemartwork/image%28at_%29.md): Returns the artwork image for an item at the given size.
- [bounds](mpmediaitemartwork/bounds.md): The maximum size, in points, of the image associated with the media item artwork.

### Initializers

- [initWithImage:](mpmediaitemartwork/init%28image_%29.md): Deprecated. Initializes a media item artwork instance with a full-size image.

### Instance Properties

- [imageCropRect](mpmediaitemartwork/imagecroprect.md): Deprecated. The bounds, in points, of the content area for the full size image associated with the media item artwork.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
