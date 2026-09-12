> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/init(contentsof:filetypehint:)](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:filetypehint:))

# init(contentsOf:fileTypeHint:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a player to play audio from a file of a particular type.

## Declaration

```swift
init(contentsOf url: URL, fileTypeHint utiString: String?) throws
```

## Parameters

- `url`: A URL that identifies the local audio file to play.
- `utiString`: The uniform type identifier (UTI) string of the file format.

<a id="return-value"></a>

## Return Value

A new audio player instance, or [nil](../../objectivec/nil-227m0.md) if there is an error.

<a id="Discussion"></a>

## Discussion

The audio data must be in a format that Core Audio supports. Passing a file type hint helps the system parse the data if it can’t determine the file type or if the data is corrupt. See [AVFileType](../../avfoundation/avfiletype.md) for supported values.

## See Also

### Creating an audio player

- [init(contentsOf:)](init%28contentsof_%29.md): Creates a player to play audio from a file.
- [init(data:)](init%28data_%29.md): Creates a player to play in-memory audio data.
- [init(data:fileTypeHint:)](init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.

# initWithContentsOfURL:fileTypeHint:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a player to play audio from a file of a particular type.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url fileTypeHint:(NSString *) utiString error:(NSError **) outError;
```

## Parameters

- `url`: A URL that identifies the local audio file to play.
- `utiString`: The uniform type identifier (UTI) string of the file format.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new audio player instance, or [nil](../../objectivec/nil-227m0.md) if there is an error.

<a id="Discussion"></a>

## Discussion

The audio data must be in a format that Core Audio supports. Passing a file type hint helps the system parse the data if it can’t determine the file type or if the data is corrupt. See [AVFileType](../../avfoundation/avfiletype.md) for supported values.

## See Also

### Creating an audio player

- [initWithContentsOfURL:error:](init%28contentsof_%29.md): Creates a player to play audio from a file.
- [initWithData:error:](init%28data_%29.md): Creates a player to play in-memory audio data.
- [initWithData:fileTypeHint:error:](init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.
