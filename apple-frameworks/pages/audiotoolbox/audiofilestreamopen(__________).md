> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamopen(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamopen(_:_:_:_:_:))

# AudioFileStreamOpen(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and opens a new audio file stream parser.

## Declaration

```swift
func AudioFileStreamOpen(_ inClientData: UnsafeMutableRawPointer?, _ inPropertyListenerProc: AudioFileStream_PropertyListenerProc, _ inPacketsProc: AudioFileStream_PacketsProc, _ inFileTypeHint: AudioFileTypeID, _ outAudioFileStream: UnsafeMutablePointer<AudioFileStreamID?>) -> OSStatus
```

## Parameters

- `inClientData`: A pointer to a value or structure to be passed to your callback functions.
- `inPropertyListenerProc`: Your property-listener callback. Whenever the parser finds the value of a property in the data stream, it calls your property listener with the property ID. You can then call the [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md) and [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md) functions to get the value of the property.
- `inPacketsProc`: Your audio-data callback. Whenever the parser finds audio data packets in the data stream, it passes the data to your audio-data callback.
- `inFileTypeHint`: An audio file type hint. If the audio file stream that you intend to pass to the parser is of a type that the parser cannot easily or uniquely determine from the data (such as ADTS or AC3), you can use this parameter to indicate the type. Possible values are listed in the [AudioFileTypeID](audiofiletypeid.md) enumeration in [Audio File Services](audio-file-services.md).

  If you do not know the audio file type, pass `0`.
- `outAudioFileStream`: On output, an opaque object representing the audio file stream parser. This object is referred to in this document as the audio file stream parser ID. You need to pass this ID in to other functions in the Audio File Stream API.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.

# AudioFileStreamOpen (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates and opens a new audio file stream parser.

## Declaration

```objectivec
extern OSStatus AudioFileStreamOpen(void *inClientData, AudioFileStream_PropertyListenerProc inPropertyListenerProc, AudioFileStream_PacketsProc inPacketsProc, AudioFileTypeID inFileTypeHint, AudioFileStreamID*outAudioFileStream);
```

## Parameters

- `inClientData`: A pointer to a value or structure to be passed to your callback functions.
- `inPropertyListenerProc`: Your property-listener callback. Whenever the parser finds the value of a property in the data stream, it calls your property listener with the property ID. You can then call the [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md) and [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md) functions to get the value of the property.
- `inPacketsProc`: Your audio-data callback. Whenever the parser finds audio data packets in the data stream, it passes the data to your audio-data callback.
- `inFileTypeHint`: An audio file type hint. If the audio file stream that you intend to pass to the parser is of a type that the parser cannot easily or uniquely determine from the data (such as ADTS or AC3), you can use this parameter to indicate the type. Possible values are listed in the [AudioFileTypeID](audiofiletypeid.md) enumeration in [Audio File Services](audio-file-services.md).

  If you do not know the audio file type, pass `0`.
- `outAudioFileStream`: On output, an opaque object representing the audio file stream parser. This object is referred to in this document as the audio file stream parser ID. You need to pass this ID in to other functions in the Audio File Stream API.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStream_PropertyListenerProc](audiofilestream_propertylistenerproc.md): Invoked by an audio file stream parser when it finds a property value in the audio file stream.
- [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStream_PacketsProc](audiofilestream_packetsproc.md): Invoked by an audio file stream parser when it finds audio data in the audio file stream.
