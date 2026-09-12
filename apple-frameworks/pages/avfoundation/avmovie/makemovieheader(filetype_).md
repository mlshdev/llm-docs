> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/makemovieheader(filetype:)](https://developer.apple.com/documentation/avfoundation/avmovie/makemovieheader(filetype:))

# makeMovieHeader(fileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a header for a movie for the specified file type.

## Declaration

```swift
func makeMovieHeader(fileType: AVFileType) throws -> Data
```

## Parameters

- `fileType`: A UTI that indicates the specific file format for the movie header.

<a id="return-value"></a>

## Return Value

An [NSData](../../foundation/nsdata.md) object containing the movie header.

<a id="Discussion"></a>

## Discussion

The created movie header is a pure reference movie, with no base URL, suitable for use on the pasteboard.

## See Also

### Creating and writing headers

- [is(compatibleWithFileType:)](is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [writeHeader(to:fileType:options:)](writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.

# movieHeaderWithFileType:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Creates a header for a movie for the specified file type.

## Declaration

```objectivec
- (NSData *) movieHeaderWithFileType:(AVFileType) fileType error:(NSError **) outError;
```

## Parameters

- `fileType`: A UTI that indicates the specific file format for the movie header.
- `outError`: The error that occurred.

<a id="return-value"></a>

## Return Value

An [NSData](../../foundation/nsdata.md) object containing the movie header.

<a id="Discussion"></a>

## Discussion

The created movie header is a pure reference movie, with no base URL, suitable for use on the pasteboard.

## See Also

### Creating and writing headers

- [isCompatibleWithFileType:](is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [writeMovieHeaderToURL:fileType:options:error:](writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.
