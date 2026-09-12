> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovietrack](https://developer.apple.com/documentation/avfoundation/avmovietrack)

# AVMovieTrack (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A track in a movie that conforms to the QuickTime or ISO base media file format.

## Declaration

```swift
class AVMovieTrack
```

## Topics

### Retrieving track information

- [alternateGroupID](avmovietrack/alternategroupid.md): A value that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](avmovietrack/mediadatastorage.md): The storage container for media data added to a track.
- [mediaDecodeTimeRange](avmovietrack/mediadecodetimerange.md): A range of decode times for the track’s media.
- [mediaPresentationTimeRange](avmovietrack/mediapresentationtimerange.md): A range of presentation times for the track’s media.

## Relationships

### Inherits From

- [AVAssetTrack](avassettrack.md)

### Inherited By

- [AVFragmentedMovieTrack](avfragmentedmovietrack.md)
- [AVMutableMovieTrack](avmutablemovietrack.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Movies

- [AVMovie](avmovie.md): An object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

# AVMovieTrack (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

A track in a movie that conforms to the QuickTime or ISO base media file format.

## Declaration

```objectivec
@interface AVMovieTrack : AVAssetTrack
```

## Topics

### Retrieving track information

- [alternateGroupID](avmovietrack/alternategroupid.md): A value that identifies the track as a member of a particular alternate group.
- [mediaDataStorage](avmovietrack/mediadatastorage.md): The storage container for media data added to a track.
- [mediaDecodeTimeRange](avmovietrack/mediadecodetimerange.md): A range of decode times for the track’s media.
- [mediaPresentationTimeRange](avmovietrack/mediapresentationtimerange.md): A range of presentation times for the track’s media.

## Relationships

### Inherits From

- [AVAssetTrack](avassettrack.md)

### Inherited By

- [AVFragmentedMovieTrack](avfragmentedmovietrack.md)
- [AVMutableMovieTrack](avmutablemovietrack.md)

## See Also

### Movies

- [AVMovie](avmovie.md): An object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.
