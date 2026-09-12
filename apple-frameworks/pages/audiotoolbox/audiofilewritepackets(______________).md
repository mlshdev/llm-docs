> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilewritepackets(_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilewritepackets(_:_:_:_:_:_:_:))

# AudioFileWritePackets(\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Writes packets of audio data to an audio data file.

## Declaration

```swift
func AudioFileWritePackets(_ inAudioFile: AudioFileID, _ inUseCache: Bool, _ inNumBytes: UInt32, _ inPacketDescriptions: UnsafePointer<AudioStreamPacketDescription>?, _ inStartingPacket: Int64, _ ioNumPackets: UnsafeMutablePointer<UInt32>, _ inBuffer: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file to write to.
- `inUseCache`: Set to `true` if you want to cache the data. Otherwise, set to `false`.
- `inNumBytes`: The number of bytes of audio data being written.
- `inPacketDescriptions`: A pointer to an array of packet descriptions for the audio data. Not all formats require packet descriptions. If no packet descriptions are required, for instance, if you are writing CBR data,  pass `NULL`.
- `inStartingPacket`: The packet index for the placement of the first provided packet.
- `ioNumPackets`: On input, a pointer to the number of packets to write. On output, a pointer to the number of packets actually written.
- `inBuffer`: A pointer to user-allocated memory containing the new audio data to write to the audio data file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

For all uncompressed formats, this function equates packets with frames.

## See Also

### Related Documentation

- [AudioFileReadPackets(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.

### Reading and Writing Audio Files

- [AudioFileReadBytes(\_:\_:\_:\_:\_:)](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileWriteBytes(\_:\_:\_:\_:\_:)](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData(\_:\_:\_:\_:\_:\_:\_:)](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.

# AudioFileWritePackets (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Writes packets of audio data to an audio data file.

## Declaration

```objectivec
extern OSStatus AudioFileWritePackets(AudioFileID inAudioFile, Boolean inUseCache, UInt32 inNumBytes, const AudioStreamPacketDescription *inPacketDescriptions, SInt64 inStartingPacket, UInt32 *ioNumPackets, const void *inBuffer);
```

## Parameters

- `inAudioFile`: The audio file to write to.
- `inUseCache`: Set to `true` if you want to cache the data. Otherwise, set to `false`.
- `inNumBytes`: The number of bytes of audio data being written.
- `inPacketDescriptions`: A pointer to an array of packet descriptions for the audio data. Not all formats require packet descriptions. If no packet descriptions are required, for instance, if you are writing CBR data,  pass `NULL`.
- `inStartingPacket`: The packet index for the placement of the first provided packet.
- `ioNumPackets`: On input, a pointer to the number of packets to write. On output, a pointer to the number of packets actually written.
- `inBuffer`: A pointer to user-allocated memory containing the new audio data to write to the audio data file.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

For all uncompressed formats, this function equates packets with frames.

## See Also

### Related Documentation

- [AudioFileReadPackets](audiofilereadpackets%28______________%29.md): Deprecated. Reads a fixed duration of audio data from an audio file.

### Reading and Writing Audio Files

- [AudioFileReadBytes](audiofilereadbytes%28__________%29.md): Reads bytes of audio data from an audio file.
- [AudioFileWriteBytes](audiofilewritebytes%28__________%29.md): Writes bytes of audio data to an audio file.
- [AudioFileReadPacketData](audiofilereadpacketdata%28______________%29.md): Reads packets of audio data from an audio file.
