> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/close()](https://developer.apple.com/documentation/avfaudio/avaudiofile/close())

# close() (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Closes the audio file.

## Declaration

```swift
func close()
```

<a id="Discussion"></a>

## Discussion

Calling this method closes the underlying file, if open. It’s normally unnecessary to close a file opened for reading because it’s automatically closed when released. It’s only necessary to close a file opened for writing in order to achieve specific control over when the file’s header is updated.

> **Note**

>  Once closed, further file read or write operations fail with a [kAudio_FileNotFoundError](../../coreaudiotypes/kaudio_filenotfounderror.md).

## See Also

### Reading and Writing the Audio Buffer

- [read(into:)](read%28into_%29.md): Reads an entire audio buffer.
- [read(into:frameCount:)](read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [read(frameCount:)](read%28framecount_%29.md)

# close (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Closes the audio file.

## Declaration

```objectivec
- (void) close;
```

<a id="Discussion"></a>

## Discussion

Calling this method closes the underlying file, if open. It’s normally unnecessary to close a file opened for reading because it’s automatically closed when released. It’s only necessary to close a file opened for writing in order to achieve specific control over when the file’s header is updated.

> **Note**

>  Once closed, further file read or write operations fail with a [kAudio_FileNotFoundError](../../coreaudiotypes/kaudio_filenotfounderror.md).

## See Also

### Reading and Writing the Audio Buffer

- [readIntoBuffer:error:](read%28into_%29.md): Reads an entire audio buffer.
- [readIntoBuffer:frameCount:error:](read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
