> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilewrite(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilewrite(_:_:_:))

# ExtAudioFileWrite(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Performs a synchronous, sequential write operation on an audio file.

## Declaration

```swift
func ExtAudioFileWrite(_ inExtAudioFile: ExtAudioFileRef, _ inNumberFrames: UInt32, _ ioData: UnsafePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file to write to.
- `inNumberFrames`: The number of frames to write.
- `ioData`: The buffer(s) from which audio data is written to the file.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the extended audio file object has an application data format, then the object’s converter converts the data in the `ioData` parameter to the file data format.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek(\_:\_:)](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell(\_:\_:)](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWriteAsync(\_:\_:\_:)](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

# ExtAudioFileWrite (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Performs a synchronous, sequential write operation on an audio file.

## Declaration

```objectivec
extern OSStatus ExtAudioFileWrite(ExtAudioFileRef inExtAudioFile, UInt32 inNumberFrames, const AudioBufferList *ioData);
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file to write to.
- `inNumberFrames`: The number of frames to write.
- `ioData`: The buffer(s) from which audio data is written to the file.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the extended audio file object has an application data format, then the object’s converter converts the data in the `ioData` parameter to the file data format.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWriteAsync](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.
