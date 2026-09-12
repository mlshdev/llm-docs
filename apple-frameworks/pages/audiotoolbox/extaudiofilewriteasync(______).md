> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/extaudiofilewriteasync(_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/extaudiofilewriteasync(_:_:_:))

# ExtAudioFileWriteAsync(\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Perform an asynchronous, sequential write operation on an audio file.

## Declaration

```swift
func ExtAudioFileWriteAsync(_ inExtAudioFile: ExtAudioFileRef, _ inNumberFrames: UInt32, _ ioData: UnsafePointer<AudioBufferList>?) -> OSStatus
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you want to write to.
- `inNumberFrames`: The number of frames to write.
- `ioData`: The buffer(s) from which audio data is written to the file.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Writes the provided buffer list to an internal ring buffer and notifies an internal thread to perform the write at a later time. The first time this function is called, allocations may be performed. You can call this function with `0` frames and a `NULL` buffer in a non-time-critical context to initialize the asynchronous mechanism. Once initialized, subsequent calls are very efficient and do not take locks. This technique may be used to write to a file from a realtime thread.

Your application must not mix synchronous and asynchronous writes to the same file.

Pending writes are not guaranteed to be flushed to disk until the [ExtAudioFileDispose(\_:)](extaudiofiledispose%28__%29.md) function is called.

Errors may occur after this call has returned. Such errors may be returned from subsequent calls to this function.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead(\_:\_:\_:)](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek(\_:\_:)](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell(\_:\_:)](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite(\_:\_:\_:)](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.

# ExtAudioFileWriteAsync (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.1+ · iPadOS 2.1+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Perform an asynchronous, sequential write operation on an audio file.

## Declaration

```objectivec
extern OSStatus ExtAudioFileWriteAsync(ExtAudioFileRef inExtAudioFile, UInt32 inNumberFrames, const AudioBufferList *ioData);
```

## Parameters

- `inExtAudioFile`: The extended audio file object that represents the file you want to write to.
- `inNumberFrames`: The number of frames to write.
- `ioData`: The buffer(s) from which audio data is written to the file.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

Writes the provided buffer list to an internal ring buffer and notifies an internal thread to perform the write at a later time. The first time this function is called, allocations may be performed. You can call this function with `0` frames and a `NULL` buffer in a non-time-critical context to initialize the asynchronous mechanism. Once initialized, subsequent calls are very efficient and do not take locks. This technique may be used to write to a file from a realtime thread.

Your application must not mix synchronous and asynchronous writes to the same file.

Pending writes are not guaranteed to be flushed to disk until the [ExtAudioFileDispose](extaudiofiledispose%28__%29.md) function is called.

Errors may occur after this call has returned. Such errors may be returned from subsequent calls to this function.

## See Also

### Reading and Writing Audio Data

- [ExtAudioFileRead](extaudiofileread%28______%29.md): Performs a synchronous, sequential read operation on an audio file.
- [ExtAudioFileSeek](extaudiofileseek%28____%29.md): Seeks to a specified frame in a file.
- [ExtAudioFileTell](extaudiofiletell%28____%29.md): Gets an audio file’s read/write position.
- [ExtAudioFileWrite](extaudiofilewrite%28______%29.md): Performs a synchronous, sequential write operation on an audio file.
