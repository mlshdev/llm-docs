> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmoviewritingoptions/truncatedestinationtomovieheaderonly](https://developer.apple.com/documentation/avfoundation/avmoviewritingoptions/truncatedestinationtomovieheaderonly)

# truncateDestinationToMovieHeaderOnly (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The movie header overwrites all existing data and creates a pure reference movie file.

## Declaration

```swift
static var truncateDestinationToMovieHeaderOnly: AVMovieWritingOptions { get }
```

<a id="Discussion"></a>

## Discussion

Creates a file type box at the beginning of the destination file.

## See Also

### Writing options

- [addMovieHeaderToDestination](addmovieheadertodestination.md): The new movie header overwrites any existing movie header.

# AVMovieWritingTruncateDestinationToMovieHeaderOnly (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

The movie header overwrites all existing data and creates a pure reference movie file.

## Declaration

```objectivec
AVMovieWritingTruncateDestinationToMovieHeaderOnly
```

<a id="Discussion"></a>

## Discussion

Creates a file type box at the beginning of the destination file.

## See Also

### Writing options

- [AVMovieWritingAddMovieHeaderToDestination](addmovieheadertodestination.md): The new movie header overwrites any existing movie header.
