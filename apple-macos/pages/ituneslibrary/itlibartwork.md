> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibartwork](https://developer.apple.com/documentation/ituneslibrary/itlibartwork)

# ITLibArtwork (Swift)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class represents the artwork for a media item.

## Declaration

```swift
class ITLibArtwork
```

## Topics

### Getting Artwork Info

- [image](itlibartwork/image.md): The artwork image.
- [imageData](itlibartwork/imagedata.md): The raw image data of the artwork in the format that [imageDataFormat](itlibartwork/imagedataformat.md) specifies.
- [imageDataFormat](itlibartwork/imagedataformat.md): The format of the artwork image data that [imageData](itlibartwork/imagedata.md) returns.

### Artwork Formats

- [ITLibArtworkFormat](itlibartworkformat.md): These constants specify the possible formats of the data that [imageDataFormat](itlibartwork/imagedataformat.md) returns.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.

# ITLibArtwork (Objective-C)

**Framework:** iTunes Library  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

This class represents the artwork for a media item.

## Declaration

```objectivec
@interface ITLibArtwork : NSObject
```

## Topics

### Getting Artwork Info

- [image](itlibartwork/image.md): The artwork image.
- [imageData](itlibartwork/imagedata.md): The raw image data of the artwork in the format that [imageDataFormat](itlibartwork/imagedataformat.md) specifies.
- [imageDataFormat](itlibartwork/imagedataformat.md): The format of the artwork image data that [imageData](itlibartwork/imagedata.md) returns.

### Artwork Formats

- [ITLibArtworkFormat](itlibartworkformat.md): These constants specify the possible formats of the data that [imageDataFormat](itlibartwork/imagedataformat.md) returns.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Media Items

- [ITLibMediaItem](itlibmediaitem.md): This class describes a media item (a track) in the iTunes library, such as a song, a video, or a podcast.
- [ITLibMediaEntity](itlibmediaentity.md): This class describes a media entity, which can be a media item, such as an audio track.
- [ITLibArtist](itlibartist.md): This class represents an artist, such as the performer of a song.
- [ITLibMediaItemVideoInfo](itlibmediaitemvideoinfo.md): This class encapsulates the video information of a video media item.
