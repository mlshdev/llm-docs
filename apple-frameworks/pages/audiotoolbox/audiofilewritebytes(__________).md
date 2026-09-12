> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilewritebytes(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilewritebytes(_:_:_:_:_:))

# AudioFileWriteBytes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Writes bytes of audio data to an audio file.

## Declaration

```swift
func AudioFileWriteBytes(_ inAudioFile: AudioFileID, _ inUseCache: Bool, _ inStartingByte: Int64, _ ioNumBytes: UnsafeMutablePointer<UInt32>, _ inBuffer: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file to which you want to write bytes of data.
- `inUseCache`: Set to `true` if you want to cache the data. Otherwise, set to `false`.
- `inStartingByte`: The byte offset where the audio data should be written.
- `ioNumBytes`: On input, a pointer the number of bytes to write. On output, a pointer to the number of bytes actually written.
- `inBuffer`: A pointer to a buffer containing the bytes to be written.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

In most cases, you should use [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md) instead of this function.

## See Also

### Reading and Writing Audio Files

- [AudioFileReadBytes(\_:\_:\_:\_:\_:)](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

# AudioFileWriteBytes (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Writes bytes of audio data to an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileWriteBytes(AudioFileID inAudioFile, Boolean inUseCache, SInt64 inStartingByte, UInt32 *ioNumBytes, const void *inBuffer);
```

## Parameters

- `inAudioFile`: The audio file to which you want to write bytes of data.
- `inUseCache`: Set to `true` if you want to cache the data. Otherwise, set to `false`.
- `inStartingByte`: The byte offset where the audio data should be written.
- `ioNumBytes`: On input, a pointer the number of bytes to write. On output, a pointer to the number of bytes actually written.
- `inBuffer`: A pointer to a buffer containing the bytes to be written.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

In most cases, you should use [AudioFileWritePackets](audiofilewritepackets%28______________%29.md) instead of this function.

## See Also

### Reading and Writing Audio Files

- [AudioFileReadBytes](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.
