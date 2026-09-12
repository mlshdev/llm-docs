> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilereadbytes(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilereadbytes(_:_:_:_:_:))

# AudioFileReadBytes(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Reads bytes of audio data from an audio file.

## Declaration

```swift
func AudioFileReadBytes(_ inAudioFile: AudioFileID, _ inUseCache: Bool, _ inStartingByte: Int64, _ ioNumBytes: UnsafeMutablePointer<UInt32>, _ outBuffer: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file whose bytes of audio data you want to read.
- `inUseCache`: Set to `true` if you want to cache the data. You should cache reads and writes if you read or write the same portion of a file multiple times. To request that the data not be cached, if possible, set to `false`. You should not cache reads and writes if you read or write data from a file only once.
- `inStartingByte`: The byte offset of the audio data you want to be returned.
- `ioNumBytes`: On input, a pointer to the number of bytes to read. On output, a pointer to the number of bytes actually read.
- `outBuffer`: A pointer to user-allocated memory large enough for the requested bytes.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

In most cases, you should use [AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpackets%28______________%29.md) instead of this function.

This function returns `eofErr` when the read operation encounters the end of the file.  Note that Audio File Services only reads one 32-bit chunk of a file at a time.

## See Also

### Reading and Writing Audio Files

- [AudioFileWriteBytes(\_:\_:\_:\_:\_:)](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.

# AudioFileReadBytes (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Reads bytes of audio data from an audio file.

## Declaration

```objectivec
extern OSStatus AudioFileReadBytes(AudioFileID inAudioFile, Boolean inUseCache, SInt64 inStartingByte, UInt32 *ioNumBytes, void *outBuffer);
```

## Parameters

- `inAudioFile`: The audio file whose bytes of audio data you want to read.
- `inUseCache`: Set to `true` if you want to cache the data. You should cache reads and writes if you read or write the same portion of a file multiple times. To request that the data not be cached, if possible, set to `false`. You should not cache reads and writes if you read or write data from a file only once.
- `inStartingByte`: The byte offset of the audio data you want to be returned.
- `ioNumBytes`: On input, a pointer to the number of bytes to read. On output, a pointer to the number of bytes actually read.
- `outBuffer`: A pointer to user-allocated memory large enough for the requested bytes.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

In most cases, you should use [AudioFileReadPackets](audiofilereadpackets%28______________%29.md) instead of this function.

This function returns `eofErr` when the read operation encounters the end of the file.  Note that Audio File Services only reads one 32-bit chunk of a file at a time.

## See Also

### Reading and Writing Audio Files

- [AudioFileWriteBytes](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
- [AudioFileWritePackets](audiofilewritepackets%28______________%29.md): Writes packets of audio data to an audio data file.
