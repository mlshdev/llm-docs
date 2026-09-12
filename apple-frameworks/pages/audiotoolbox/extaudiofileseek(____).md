> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofileseek(_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofileseek(_:_:))

# ExtAudioFileSeek(\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Seeks to a specified frame in a file.

## Declaration

```swift
func ExtAudioFileSeek(_ inExtAudioFile: ExtAudioFileRef, _ inFrameOffset: Int64) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you are working with.
- `inFrameOffset`: The desired seek position, in sample frames, relative to the beginning of the file. Seek position is specified in the sample rate and frame count of the file’s audio data format—not your application’s audio data format.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Sets the file’s read position to the specified sample frame number. A subsequent call to the [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md) function returns samples from precisely this location, even if it is located in the middle of a packet.

Ensure that the file you are seeking in is open for reading only. This function’s behavior with files open for writing is undefined.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileTell(\_:\_:)](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync(\_:\_:\_:)](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

# ExtAudioFileSeek (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Seeks to a specified frame in a file.

## Declaration

```objectivec
extern OSStatus ExtAudioFileSeek(ExtAudioFileRef inExtAudioFile, SInt64 inFrameOffset);
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you are working with.
- `inFrameOffset`: The desired seek position, in sample frames, relative to the beginning of the file. Seek position is specified in the sample rate and frame count of the file’s audio data format—not your application’s audio data format.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Sets the file’s read position to the specified sample frame number. A subsequent call to the [ExtAudioFileRead](extaudiofileread%28______%29.md) function returns samples from precisely this location, even if it is located in the middle of a packet.

Ensure that the file you are seeking in is open for reading only. This function’s behavior with files open for writing is undefined.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileTell](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.
