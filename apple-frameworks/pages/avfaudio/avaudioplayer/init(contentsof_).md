> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioplayer/init(contentsof:)](https://developer.apple.com/documentation/avfaudio/avaudioplayer/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a player to play audio from a file.

## Declaration

```swift
init(contentsOf url: URL) throws
```

## Parameters

- `url`: A URL that identifies the local audio file to play.

<a id="return-value"></a>

## Return Value

A new audio player instance, or [nil](../../objectivec/nil-227m0.md) if an error occurs.

<a id="Discussion"></a>

## Discussion

The audio data must be in a format that Core Audio supports.

## See Also

### Creating an audio player

- [init(contentsOf:fileTypeHint:)](init%28contentsof_filetypehint_%29.md): Creates a player to play audio from a file of a particular type.
- [init(data:)](init%28data_%29.md): Creates a player to play in-memory audio data.
- [init(data:fileTypeHint:)](init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.

# initWithContentsOfURL:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 2.2+ · iPadOS 2.2+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

Creates a player to play audio from a file.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url error:(NSError **) outError;
```

## Parameters

- `url`: A URL that identifies the local audio file to play.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="return-value"></a>

## Return Value

A new audio player instance, or [nil](../../objectivec/nil-227m0.md) if an error occurs.

<a id="Discussion"></a>

## Discussion

The audio data must be in a format that Core Audio supports.

## See Also

### Creating an audio player

- [initWithContentsOfURL:fileTypeHint:error:](init%28contentsof_filetypehint_%29.md): Creates a player to play audio from a file of a particular type.
- [initWithData:error:](init%28data_%29.md): Creates a player to play in-memory audio data.
- [initWithData:fileTypeHint:error:](init%28data_filetypehint_%29.md): Creates a player to play in-memory audio data of a particular type.
