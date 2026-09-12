> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmoviewritingoptions](https://developer.apple.com/documentation/avfoundation/avmoviewritingoptions)

# AVMovieWritingOptions (Swift)

**Framework:** AVFoundation  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines options to control the writing of a movie header to a destination URL.

## Declaration

```swift
struct AVMovieWritingOptions
```

## Topics

### Writing options

- [addMovieHeaderToDestination](avmoviewritingoptions/addmovieheadertodestination.md): The new movie header overwrites any existing movie header.
- [truncateDestinationToMovieHeaderOnly](avmoviewritingoptions/truncatedestinationtomovieheaderonly.md): The movie header overwrites all existing data and creates a pure reference movie file.

### Initializers

- [init(rawValue:)](avmoviewritingoptions/init%28rawvalue_%29.md): Creates a movie writing options structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Creating and writing headers

- [is(compatibleWithFileType:)](avmovie/is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [makeMovieHeader(fileType:)](avmovie/makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeHeader(to:fileType:options:)](avmovie/writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.

# AVMovieWritingOptions (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

A structure that defines options to control the writing of a movie header to a destination URL.

## Declaration

```objectivec
enum AVMovieWritingOptions : NSUInteger;
```

## Topics

### Writing options

- [AVMovieWritingAddMovieHeaderToDestination](avmoviewritingoptions/addmovieheadertodestination.md): The new movie header overwrites any existing movie header.
- [AVMovieWritingTruncateDestinationToMovieHeaderOnly](avmoviewritingoptions/truncatedestinationtomovieheaderonly.md): The movie header overwrites all existing data and creates a pure reference movie file.

## See Also

### Creating and writing headers

- [isCompatibleWithFileType:](avmovie/is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [movieHeaderWithFileType:error:](avmovie/makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeMovieHeaderToURL:fileType:options:error:](avmovie/writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
