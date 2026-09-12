> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamparsebytes(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamparsebytes(_:_:_:_:))

# AudioFileStreamParseBytes(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Passes audio file stream data to the parser.

## Declaration

```swift
func AudioFileStreamParseBytes(_ inAudioFileStream: AudioFileStreamID, _ inDataByteSize: UInt32, _ inData: UnsafeRawPointer?, _ inFlags: AudioFileStreamParseFlags) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to pass data. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.
- `inDataByteSize`: The number of bytes of data to be parsed.
- `inData`: The data to be parsed.
- `inFlags`: An audio file stream flag. If there is a discontinuity from the last data you passed to the parser, set the  [discontinuity](audiofilestreamparseflags/discontinuity.md) flag.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Streamed audio file data is expected to be passed to the parser in the same sequence in which it appears in the audio file, from the beginning of the audio file stream, without gaps. However, if you called the [AudioFileStreamSeek(\_:\_:\_:\_:)](audiofilestreamseek%28________%29.md) function, the parser assumes that the data passed to the [AudioFileStreamParseBytes(\_:\_:\_:\_:)](audiofilestreamparsebytes%28________%29.md) function starts from the byte offset returned by the [AudioFileStreamSeek(\_:\_:\_:\_:)](audiofilestreamseek%28________%29.md) function.

When you provide data to the parser, the parser looks for property data and audio data packets and, when it has data ready, calls your [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md) and [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md) callback functions to process the data. You should provide at least more than a single packet’s worth of audio file data, but it is better to provide a few packets to a few seconds data at a time.

## See Also

### Related Documentation

- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStreamSeek(\_:\_:\_:\_:)](audiofilestreamseek%28________%29.md): Provides a byte offset for a specified packet in the data stream.
- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.

# AudioFileStreamParseBytes (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Passes audio file stream data to the parser.

## Declaration

```objectivec
extern OSStatus AudioFileStreamParseBytes(AudioFileStreamID inAudioFileStream, UInt32 inDataByteSize, const void *inData, AudioFileStreamParseFlags inFlags);
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to pass data. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.
- `inDataByteSize`: The number of bytes of data to be parsed.
- `inData`: The data to be parsed.
- `inFlags`: An audio file stream flag. If there is a discontinuity from the last data you passed to the parser, set the  [kAudioFileStreamParseFlag_Discontinuity](audiofilestreamparseflags/discontinuity.md) flag.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Streamed audio file data is expected to be passed to the parser in the same sequence in which it appears in the audio file, from the beginning of the audio file stream, without gaps. However, if you called the [AudioFileStreamSeek](audiofilestreamseek%28________%29.md) function, the parser assumes that the data passed to the [AudioFileStreamParseBytes](audiofilestreamparsebytes%28________%29.md) function starts from the byte offset returned by the [AudioFileStreamSeek](audiofilestreamseek%28________%29.md) function.

When you provide data to the parser, the parser looks for property data and audio data packets and, when it has data ready, calls your [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md) and [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md) callback functions to process the data. You should provide at least more than a single packet’s worth of audio file data, but it is better to provide a few packets to a few seconds data at a time.

## See Also

### Related Documentation

- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStreamSeek](audiofilestreamseek%28________%29.md): Provides a byte offset for a specified packet in the data stream.
- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.
