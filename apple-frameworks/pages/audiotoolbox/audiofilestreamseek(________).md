> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamseek(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamseek(_:_:_:_:))

# AudioFileStreamSeek(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Provides a byte offset for a specified packet in the data stream.

## Declaration

```swift
func AudioFileStreamSeek(_ inAudioFileStream: AudioFileStreamID, _ inPacketOffset: Int64, _ outDataByteOffset: UnsafeMutablePointer<Int64>, _ ioFlags: UnsafeMutablePointer<AudioFileStreamSeekFlags>) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to provide a byte offset. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.
- `inPacketOffset`: The number of packets from the beginning of the file of the packet whose byte offset you wish to have returned.
- `outDataByteOffset`: On output, the absolute byte offset of the packet whose offset you specify in the `inPacketOffset` parameter. For audio file formats that do not contain packet tables, the returned offset may be an estimate.
- `ioFlags`: On output, if the `outDataByteOffset` parameter returns an estimate, this parameter returns the constant `kAudioFileStreamSeekFlag_OffsetIsEstimated`. Currently, no input flags are defined for this call.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

After you call this function, the parser assumes the next data passed to the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function starts from the byte offset returned in the `outDataByteOffset` parameter.

## See Also

### Related Documentation

- [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md): Passes audio file stream data to the parser.
- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

# AudioFileStreamSeek (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Provides a byte offset for a specified packet in the data stream.

## Declaration

```objectivec
extern OSStatus AudioFileStreamSeek(AudioFileStreamID inAudioFileStream, SInt64 inPacketOffset, SInt64 *outDataByteOffset, AudioFileStreamSeekFlags *ioFlags);
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to provide a byte offset. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.
- `inPacketOffset`: The number of packets from the beginning of the file of the packet whose byte offset you wish to have returned.
- `outDataByteOffset`: On output, the absolute byte offset of the packet whose offset you specify in the `inPacketOffset` parameter. For audio file formats that do not contain packet tables, the returned offset may be an estimate.
- `ioFlags`: On output, if the `outDataByteOffset` parameter returns an estimate, this parameter returns the constant `kAudioFileStreamSeekFlag_OffsetIsEstimated`. Currently, no input flags are defined for this call.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

After you call this function, the parser assumes the next data passed to the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function starts from the byte offset returned in the `outDataByteOffset` parameter.

## See Also

### Related Documentation

- [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md): Passes audio file stream data to the parser.
- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.
