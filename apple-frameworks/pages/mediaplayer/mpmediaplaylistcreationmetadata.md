> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylistcreationmetadata](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylistcreationmetadata)

# MPMediaPlaylistCreationMetadata (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of attributes for describing a playlist when creating it.

## Declaration

```swift
class MPMediaPlaylistCreationMetadata
```

<a id="overview"></a>

## Overview

Use this class when creating a new playlist using the [getPlaylist(with:creationMetadata:completionHandler:)](mpmedialibrary/getplaylist%28with_creationmetadata_completionhandler_%29.md) method. The system adds the metadata to the playlist when you create it, however it ignores the metadata if the playlist already exists.

## Topics

### Creating metadata for a playlist

- [init(name:)](mpmediaplaylistcreationmetadata/init%28name_%29.md): Creates a new playlist metadata object with the designated name.

### Metadata for a playlist

- [authorDisplayName](mpmediaplaylistcreationmetadata/authordisplayname.md): App defined display name for the playlist.
- [descriptionText](mpmediaplaylistcreationmetadata/descriptiontext.md): The descriptive text for the playlist.
- [name](mpmediaplaylistcreationmetadata/name.md): The playlist’s displayed name.

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
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaPlaylistCreationMetadata (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

A set of attributes for describing a playlist when creating it.

## Declaration

```objectivec
@interface MPMediaPlaylistCreationMetadata : NSObject
```

<a id="overview"></a>

## Overview

Use this class when creating a new playlist using the [getPlaylistWithUUID:creationMetadata:completionHandler:](mpmedialibrary/getplaylist%28with_creationmetadata_completionhandler_%29.md) method. The system adds the metadata to the playlist when you create it, however it ignores the metadata if the playlist already exists.

## Topics

### Creating metadata for a playlist

- [initWithName:](mpmediaplaylistcreationmetadata/init%28name_%29.md): Creates a new playlist metadata object with the designated name.

### Metadata for a playlist

- [authorDisplayName](mpmediaplaylistcreationmetadata/authordisplayname.md): App defined display name for the playlist.
- [descriptionText](mpmediaplaylistcreationmetadata/descriptiontext.md): The descriptive text for the playlist.
- [name](mpmediaplaylistcreationmetadata/name.md): The playlist’s displayed name.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md): An animated image, such as an animated music album cover art, for a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
