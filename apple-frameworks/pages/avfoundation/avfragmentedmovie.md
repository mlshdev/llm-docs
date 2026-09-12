> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avfragmentedmovie](https://developer.apple.com/documentation/avfoundation/avfragmentedmovie)

# AVFragmentedMovie (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a fragmented movie file.

## Declaration

```swift
class AVFragmentedMovie
```

## Topics

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-7fr6q.md): Conforms when `Root` inherits `AVFragmentedMovie`. The tracks that a movie contains.
- [loadTrack(withTrackID:completionHandler:)](avfragmentedmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avfragmentedmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avfragmentedmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avfragmentedmovie/tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](avfragmentedmovie/track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](avfragmentedmovie/tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](avfragmentedmovie/tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

## Relationships

### Inherits From

- [AVMovie](avmovie.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [AVFragmentMinding](avfragmentminding.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fragmented movies

- [AVFragmentedMovieTrack](avfragmentedmovietrack.md): An object that represents a track in a fragmented movie.
- [AVFragmentedMovieMinder](avfragmentedmovieminder.md): An object that checks whether a fragmented movie appends additional movie fragments.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.

# AVFragmentedMovie (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that represents a fragmented movie file.

## Declaration

```objectivec
@interface AVFragmentedMovie : AVMovie
```

## Topics

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avfragmentedmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avfragmentedmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avfragmentedmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avfragmentedmovie/tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](avfragmentedmovie/track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](avfragmentedmovie/tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](avfragmentedmovie/tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

## Relationships

### Inherits From

- [AVMovie](avmovie.md)

### Conforms To

- [AVFragmentMinding](avfragmentminding.md)

## See Also

### Fragmented movies

- [AVFragmentedMovieTrack](avfragmentedmovietrack.md): An object that represents a track in a fragmented movie.
- [AVFragmentedMovieMinder](avfragmentedmovieminder.md): An object that checks whether a fragmented movie appends additional movie fragments.
- [AVFragmentMinding](avfragmentminding.md): A protocol that defines whether an asset supports fragment minding.
