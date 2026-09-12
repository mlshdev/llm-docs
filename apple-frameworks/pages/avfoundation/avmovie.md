> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie](https://developer.apple.com/documentation/avfoundation/avmovie)

# AVMovie (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

## Declaration

```swift
class AVMovie
```

<a id="overview"></a>

## Overview

`AVMovie` supports operations involving the format-specific portions of the QuickTime movie model that [AVAsset](avasset.md) doesn’t support. For instance, retrieving the movie header from an existing QuickTime movie file. You can also use `AVMovie` to write a movie header into a new file, thereby creating a reference movie.

## Topics

### Creating a movie

- [init(url:)](avmovie/init%28url_%29.md): Creates a movie that models the media at the specified URL.
- [init(url:options:)](avmovie/init%28url_options_%29-1wjrq.md): Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [init(data:options:)](avmovie/init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](initialization-options.md): Specify options to configure the initialization of a movie.

### Determining supported file types

- [movieTypes()](avmovie/movietypes%28%29.md): Returns the file types that a movie supports.

### Loading tracks

- [tracks](avpartialasyncproperty/tracks-80a83.md): Conforms when `Root` inherits `AVMovie`. The tracks that a movie contains.
- [loadTrack(withTrackID:completionHandler:)](avmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracks(withMediaType:completionHandler:)](avmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracks(withMediaCharacteristic:completionHandler:)](avmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Creating and writing headers

- [is(compatibleWithFileType:)](avmovie/is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [makeMovieHeader(fileType:)](avmovie/makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeHeader(to:fileType:options:)](avmovie/writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.

### Determining fragment support

- [canContainMovieFragments](avmovie/cancontainmoviefragments.md): A Boolean value that indicates whether fragments can extend the movie file.
- [containsMovieFragments](avmovie/containsmoviefragments.md): A Boolean value that indicates whether at least one movie fragment extends the movie file.

### Accessing movie information

- [url](avmovie/url.md): A URL to a QuickTime or ISO base media file.
- [data](avmovie/data.md): A data object that contains the movie file’s data.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmovie/tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](avmovie/track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](avmovie/tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](avmovie/tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

### Accessing data storage

- [defaultMediaDataStorage](avmovie/defaultmediadatastorage.md): The default storage container for media data added to a movie.

### Initializers

- [init(URL:options:)](avmovie/init%28url_options_%29-3tgg4.md)
- [init(URL:options:)](avmovie/init%28url_options_%29-9sf6c.md)

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVFragmentedMovie](avfragmentedmovie.md)
- [AVMutableMovie](avmutablemovie.md)

### Conforms To

- [AVAsynchronousKeyValueLoading](avasynchronouskeyvalueloading.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Movies

- [AVMovieTrack](avmovietrack.md): A track in a movie that conforms to the QuickTime or ISO base media file format.

# AVMovie (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 6.0+

An object that represents an audiovisual container that conforms to the QuickTime movie file format or a related format like MPEG-4.

## Declaration

```objectivec
@interface AVMovie : AVAsset
```

<a id="overview"></a>

## Overview

`AVMovie` supports operations involving the format-specific portions of the QuickTime movie model that [AVAsset](avasset.md) doesn’t support. For instance, retrieving the movie header from an existing QuickTime movie file. You can also use `AVMovie` to write a movie header into a new file, thereby creating a reference movie.

## Topics

### Creating a movie

- [movieWithURL:options:](avmovie/moviewithurl_options_.md): Returns a new movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [initWithURL:options:](avmovie/init%28url_options_%29-1wjrq.md): Creates a movie object from a movie header stored in a QuickTime movie file of ISO base media file.
- [movieWithData:options:](avmovie/moviewithdata_options_.md): Returns a new movie object from a movie file’s data.
- [initWithData:options:](avmovie/init%28data_options_%29.md): Creates a movie object from a movie file’s data.
- [Initialization options](initialization-options.md): Specify options to configure the initialization of a movie.

### Determining supported file types

- [movieTypes](avmovie/movietypes%28%29.md): Returns the file types that a movie supports.

### Loading tracks

- [loadTrackWithTrackID:completionHandler:](avmovie/loadtrack%28withtrackid_completionhandler_%29.md): Loads a track that contains the specified identifier.
- [loadTracksWithMediaType:completionHandler:](avmovie/loadtracks%28withmediatype_completionhandler_%29.md): Loads tracks that contain media of a specified type.
- [loadTracksWithMediaCharacteristic:completionHandler:](avmovie/loadtracks%28withmediacharacteristic_completionhandler_%29.md): Loads tracks that contain media of a specified characteristic.

### Creating and writing headers

- [isCompatibleWithFileType:](avmovie/is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [movieHeaderWithFileType:error:](avmovie/makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeMovieHeaderToURL:fileType:options:error:](avmovie/writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.

### Determining fragment support

- [canContainMovieFragments](avmovie/cancontainmoviefragments.md): A Boolean value that indicates whether fragments can extend the movie file.
- [containsMovieFragments](avmovie/containsmoviefragments.md): A Boolean value that indicates whether at least one movie fragment extends the movie file.

### Accessing movie information

- [URL](avmovie/url.md): A URL to a QuickTime or ISO base media file.
- [data](avmovie/data.md): A data object that contains the movie file’s data.

### Accessing tracks

Prefer loading tracks asynchronously using the methods in Loading Tracks.

- [tracks](avmovie/tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](avmovie/track%28withtrackid_%29.md): Deprecated. Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](avmovie/tracks%28withmediatype_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](avmovie/tracks%28withmediacharacteristic_%29.md): Deprecated. Retrieves tracks in the movie that present media of the specified characteristic.

### Accessing data storage

- [defaultMediaDataStorage](avmovie/defaultmediadatastorage.md): The default storage container for media data added to a movie.

## Relationships

### Inherits From

- [AVAsset](avasset.md)

### Inherited By

- [AVFragmentedMovie](avfragmentedmovie.md)
- [AVMutableMovie](avmutablemovie.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSMutableCopying](../foundation/nsmutablecopying.md)

## See Also

### Movies

- [AVMovieTrack](avmovietrack.md): A track in a movie that conforms to the QuickTime or ISO base media file format.
