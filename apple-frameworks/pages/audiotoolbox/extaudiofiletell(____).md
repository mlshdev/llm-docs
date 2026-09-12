> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofiletell(_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofiletell(_:_:))

# ExtAudioFileTell(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio file’s read/write position.

## Declaration

```swift
func ExtAudioFileTell(_ inExtAudioFile: ExtAudioFileRef, _ outFrameOffset: UnsafeMutablePointer<Int64>) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you are working with.
- `outFrameOffset`: On output, the file’s current read/write position in sample frames. Read/write position is specified in the sample rate and frame count of the file’s audio data format—not your application’s audio data format.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek(\_:\_:)](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync(\_:\_:\_:)](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

# ExtAudioFileTell (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Gets an audio file’s read/write position.

## Declaration

```objectivec
extern OSStatus ExtAudioFileTell(ExtAudioFileRef inExtAudioFile, SInt64 *outFrameOffset);
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you are working with.
- `outFrameOffset`: On output, the file’s current read/write position in sample frames. Read/write position is specified in the sample rate and frame count of the file’s audio data format—not your application’s audio data format.

<a id="return-value"></a>

## Return Value

A result code.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileWrite](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.
