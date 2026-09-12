> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmovie/is(compatiblewithfiletype:)](https://developer.apple.com/documentation/avfoundation/avmovie/is(compatiblewithfiletype:))

# is(compatibleWithFileType:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the system can create a movie header of the specified type.

## Declaration

```swift
func `is`(compatibleWithFileType fileType: AVFileType) -> Bool
```

## Parameters

- `fileType`: A file type to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the movie only contains tracks whose media types are allowed by the specified file type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating and writing headers

- [makeMovieHeader(fileType:)](makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeHeader(to:fileType:options:)](writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.

# isCompatibleWithFileType: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the system can create a movie header of the specified type.

## Declaration

```objectivec
- (BOOL) isCompatibleWithFileType:(AVFileType) fileType;
```

## Parameters

- `fileType`: A file type to test.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the movie only contains tracks whose media types are allowed by the specified file type; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Creating and writing headers

- [movieHeaderWithFileType:error:](makemovieheader%28filetype_%29.md): Creates a header for a movie for the specified file type.
- [writeMovieHeaderToURL:fileType:options:error:](writeheader%28to_filetype_options_%29.md): Writes the movie header to the specified URL.
- [AVMovieWritingOptions](../avmoviewritingoptions.md): A structure that defines options to control the writing of a movie header to a destination URL.
