> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/writeheader(to:filetype:options:)](https://developer.apple.com/documentation/avfoundation/avmovie/writeheader(to:filetype:options:))

# writeHeader(to:fileType:options:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Writes the movie header to the specified URL.

## Declaration

```swift
func writeHeader(to URL: URL, fileType: AVFileType, options: AVMovieWritingOptions = []) throws
```

## Parameters

- `URL`: The URL indicating where to write the movie header.
- `fileType`: A UTI that indicates the specific file format for the movie header.
- `options`: The [AVMovieWritingOptions](../avmoviewritingoptions.md) constants whose bits specify the options for writing the movie header.

## See Also

### Creating and writing headers

- [is(compatibleWithFileType:)](is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [makeMovieHeader(fileType:)](makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.

# writeMovieHeaderToURL:fileType:options:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Writes the movie header to the specified URL.

## Declaration

```objectivec
- (BOOL) writeMovieHeaderToURL:(NSURL *) URL fileType:(AVFileType) fileType options:(AVMovieWritingOptions) options error:(NSError **) outError;
```

## Parameters

- `URL`: The URL indicating where to write the movie header.
- `fileType`: A UTI that indicates the specific file format for the movie header.
- `options`: The [AVMovieWritingOptions](../avmoviewritingoptions.md) constants whose bits specify the options for writing the movie header.
- `outError`: The error, if any, that occurred.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the writing succeeds; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating and writing headers

- [isCompatibleWithFileType:](is%28compatiblewithfiletype_%29.md): Returns a Boolean value that indicates whether the system can create a movie header of the specified type.
- [movieHeaderWithFileType:error:](makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.
