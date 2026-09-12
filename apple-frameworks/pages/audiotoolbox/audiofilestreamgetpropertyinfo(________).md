> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamgetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamgetpropertyinfo(_:_:_:_:))

# AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retrieves information about a property value.

## Declaration

```swift
func AudioFileStreamGetPropertyInfo(_ inAudioFileStream: AudioFileStreamID, _ inPropertyID: AudioFileStreamPropertyID, _ outPropertyDataSize: UnsafeMutablePointer<UInt32>?, _ outWritable: UnsafeMutablePointer<DarwinBoolean>?) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser from which you wish to obtain information. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: A four-character ID indicating the audio file stream property about which you want information. See [Audio File Stream Properties](1391506-audio-file-stream-properties.md) for possible values.
- `outPropertyDataSize`: On output, the size, in bytes, of the current value of the specified property.
- `outWritable`: On output, `true` if the property can be written. Currently, there are no writable audio file stream properties.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStreamSetProperty(\_:\_:\_:\_:)](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.

# AudioFileStreamGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Retrieves information about a property value.

## Declaration

```objectivec
extern OSStatus AudioFileStreamGetPropertyInfo(AudioFileStreamID inAudioFileStream, AudioFileStreamPropertyID inPropertyID, UInt32 *outPropertyDataSize, Boolean *outWritable);
```

## Parameters

- `inAudioFileStream`: The ID of the parser from which you wish to obtain information. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: A four-character ID indicating the audio file stream property about which you want information. See [Audio File Stream Properties](1391506-audio-file-stream-properties.md) for possible values.
- `outPropertyDataSize`: On output, the size, in bytes, of the current value of the specified property.
- `outWritable`: On output, `true` if the property can be written. Currently, there are no writable audio file stream properties.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Related Documentation

- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
- [AudioFileStreamSetProperty](audiofilestreamsetproperty%28________%29.md): Sets the value of the specified property.
