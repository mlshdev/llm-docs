> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilestreamsetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilestreamsetproperty(_:_:_:_:))

# AudioFileStreamSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of the specified property.

## Declaration

```swift
func AudioFileStreamSetProperty(_ inAudioFileStream: AudioFileStreamID, _ inPropertyID: AudioFileStreamPropertyID, _ inPropertyDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to pass data. The parser ID is returned by the [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: The ID of the audio file stream property whose value is to be set.
- `inPropertyDataSize`: The size, in bytes, of the property data.
- `inPropertyData`: The property data.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Currently, there are no settable properties.

## See Also

### Related Documentation

- [AudioFileStreamOpen(\_:\_:\_:\_:\_:)](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo(\_:\_:\_:\_:)](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamGetProperty(\_:\_:\_:\_:)](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.

# AudioFileStreamSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of the specified property.

## Declaration

```objectivec
extern OSStatus AudioFileStreamSetProperty(AudioFileStreamID inAudioFileStream, AudioFileStreamPropertyID inPropertyID, UInt32 inPropertyDataSize, const void *inPropertyData);
```

## Parameters

- `inAudioFileStream`: The ID of the parser to which you wish to pass data. The parser ID is returned by the [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md) function.
- `inPropertyID`: The ID of the audio file stream property whose value is to be set.
- `inPropertyDataSize`: The size, in bytes, of the property data.
- `inPropertyData`: The property data.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

<a id="Discussion"></a>

## Discussion

Currently, there are no settable properties.

## See Also

### Related Documentation

- [AudioFileStreamOpen](audiofilestreamopen%28__________%29.md): Creates and opens a new audio file stream parser.

### Working with Data Stream Property Information

- [AudioFileStreamGetPropertyInfo](audiofilestreamgetpropertyinfo%28________%29.md): Retrieves information about a property value.
- [AudioFileStreamGetProperty](audiofilestreamgetproperty%28________%29.md): Retrieves the value of the specified property.
