> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmoviewritingoptions/addmovieheadertodestination](https://developer.apple.com/documentation/avfoundation/avmoviewritingoptions/addmovieheadertodestination)

# addMovieHeaderToDestination (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The new movie header overwrites any existing movie header.

## Declaration

```swift
static var addMovieHeaderToDestination: AVMovieWritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Only an existing movie header is overwritten, all other data is preserved. If the destination file is empty, a file type box is created at the beginning of the file.

## See Also

### Writing options

- [truncateDestinationToMovieHeaderOnly](truncatedestinationtomovieheaderonly.md): The movie header overwrites all existing data and creates a pure reference movie file.

# AVMovieWritingAddMovieHeaderToDestination (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The new movie header overwrites any existing movie header.

## Declaration

```objectivec
AVMovieWritingAddMovieHeaderToDestination
```

<a id="Discussion"></a>

## Discussion

Only an existing movie header is overwritten, all other data is preserved. If the destination file is empty, a file type box is created at the beginning of the file.

## See Also

### Writing options

- [AVMovieWritingTruncateDestinationToMovieHeaderOnly](truncatedestinationtomovieheaderonly.md): The movie header overwrites all existing data and creates a pure reference movie file.
