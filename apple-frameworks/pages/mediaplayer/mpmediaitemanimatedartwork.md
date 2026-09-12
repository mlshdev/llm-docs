> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaitemanimatedartwork](https://developer.apple.com/documentation/mediaplayer/mpmediaitemanimatedartwork)

# MPMediaItemAnimatedArtwork (Swift)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An animated image, such as an animated music album cover art, for a media item.

## Declaration

```swift
class MPMediaItemAnimatedArtwork
```

## Mentioned In

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md)

<a id="overview"></a>

## Overview

A single instance of animated artwork is comprised of two assets: an artwork video asset, and a preview image which should match the first frame of the artwork video. The preview image may be used when displaying the animated artwork whilst the video becomes available.

Both the preview image and artwork video can be fetched asynchronously and will only be requested when required at point of display. Aim to provide preview images as quickly as possible once requested, and ideally synchronously.

Video asset `URL`s you provide must be local file `URL`s. You should make the associated assets available locally before providing them via the relevant handler, for example by fetching the associated video asset over the network. The `URL`s should remain valid for the lifetime of the [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md), once provided.

[MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md) should not be subclassed.

## Topics

### Initializers

- [init(artworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler:)](mpmediaitemanimatedartwork/init%28artworkid_previewimagerequesthandler_videoassetfileurlrequesthandler_%29-7bb3j.md): Creates an animated artwork.
- [init(artworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler:)](mpmediaitemanimatedartwork/init%28artworkid_previewimagerequesthandler_videoassetfileurlrequesthandler_%29-7n23z.md): Creates an animated artwork.
- [init(artworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler:)](mpmediaitemanimatedartwork/init%28artworkid_previewimagerequesthandler_videoassetfileurlrequesthandler_%29-ieue.md): Creates an animated artwork.

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
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.

# MPMediaItemAnimatedArtwork (Objective-C)

**Framework:** Media Player  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

An animated image, such as an animated music album cover art, for a media item.

## Declaration

```objectivec
@interface MPMediaItemAnimatedArtwork : NSObject
```

## Mentioned In

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md)

<a id="overview"></a>

## Overview

A single instance of animated artwork is comprised of two assets: an artwork video asset, and a preview image which should match the first frame of the artwork video. The preview image may be used when displaying the animated artwork whilst the video becomes available.

Both the preview image and artwork video can be fetched asynchronously and will only be requested when required at point of display. Aim to provide preview images as quickly as possible once requested, and ideally synchronously.

Video asset `URL`s you provide must be local file `URL`s. You should make the associated assets available locally before providing them via the relevant handler, for example by fetching the associated video asset over the network. The `URL`s should remain valid for the lifetime of the [MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md), once provided.

[MPMediaItemAnimatedArtwork](mpmediaitemanimatedartwork.md) should not be subclassed.

## Topics

### Instance Methods

- [initWithArtworkID:previewImageRequestHandler:videoAssetFileURLRequestHandler:](mpmediaitemanimatedartwork/init%28artworkid_previewimagerequesthandler_videoassetfileurlrequesthandler_%29-ieue.md): Creates an animated artwork.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Media items and playlists

- [Providing animated artwork for media items](providing-animated-artwork-for-media-items.md): Display animated artwork for your app’s media in system views, such as the lock screen, by providing video assets through your now playing info.
- [MPMediaItem](mpmediaitem.md): A collection of properties that represents a single item in the media library.
- [MPMediaItemArtwork](mpmediaitemartwork.md): A graphical image, such as music album cover art, associated with a media item.
- [MPMediaItemCollection](mpmediaitemcollection.md): A sorted set of media items from the media library.
- [MPMediaPlaylist](mpmediaplaylist.md): A playable collection of related media items.
- [MPMediaPlaylistCreationMetadata](mpmediaplaylistcreationmetadata.md): A set of attributes for describing a playlist when creating it.
- [MPMediaEntity](mpmediaentity.md): The abstract superclass for media items, media item collections, and media playlist instances.
