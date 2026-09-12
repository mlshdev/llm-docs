> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofileread(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofileread(_:_:_:))

# ExtAudioFileRead(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Performs a synchronous, sequential read operation on an audio file.

## Declaration

```swift
func ExtAudioFileRead(_ inExtAudioFile: ExtAudioFileRef, _ ioNumberFrames: UnsafeMutablePointer<UInt32>, _ ioData: UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you want to read.
- `ioNumberFrames`: On input, the number of frames to read from the file. On output, the number of frames actually read. Fewer frames may be read than were requested. For example, the supplied buffers may not be large enough to accommodate the requested data. If `0` frames are returned, end-of-file was reached.
- `ioData`: One or more buffers into which the audio data is read.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the extended audio file object has an application data format, then the object’s converter converts the file data to the application format.

This function works only on a single thread. If you want your application to read an audio file on multiple threads, use Audio File Services instead.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileSeek(\_:\_:)](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell(\_:\_:)](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync(\_:\_:\_:)](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.

# ExtAudioFileRead (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Performs a synchronous, sequential read operation on an audio file.

## Declaration

```objectivec
extern OSStatus ExtAudioFileRead(ExtAudioFileRef inExtAudioFile, UInt32 *ioNumberFrames, AudioBufferList *ioData);
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you want to read.
- `ioNumberFrames`: On input, the number of frames to read from the file. On output, the number of frames actually read. Fewer frames may be read than were requested. For example, the supplied buffers may not be large enough to accommodate the requested data. If `0` frames are returned, end-of-file was reached.
- `ioData`: One or more buffers into which the audio data is read.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

If the extended audio file object has an application data format, then the object’s converter converts the file data to the application format.

This function works only on a single thread. If you want your application to read an audio file on multiple threads, use Audio File Services instead.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileSeek](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
- [ExtAudioFileWriteAsync](extaudiofilewriteasync%28______%29.md): Perform an asynchronous, sequential write operation on an audio file.
