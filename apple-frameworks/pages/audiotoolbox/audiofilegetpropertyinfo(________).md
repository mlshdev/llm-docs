> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilegetpropertyinfo(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilegetpropertyinfo(_:_:_:_:))

# AudioFileGetPropertyInfo(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio file property, including the size of the property value and whether the value is writable.

## Declaration

```swift
func AudioFileGetPropertyInfo(_ inAudioFile: AudioFileID, _ inPropertyID: AudioFilePropertyID, _ outDataSize: UnsafeMutablePointer<UInt32>?, _ isWritable: UnsafeMutablePointer<UInt32>?) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file you want to obtain property value information from.
- `inPropertyID`: The property whose value information you want. See [Audio File Properties](1576499-audio-file-properties.md) for possible values.
- `outDataSize`: On output, the size in bytes of the property value.
- `isWritable`: On output, equals `1` if the property is writable, or `0` if it is read-only.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileSetProperty(\_:\_:\_:\_:)](audiofilesetproperty%28________%29.md): Sets the value of an audio file property

# AudioFileGetPropertyInfo (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Gets information about an audio file property, including the size of the property value and whether the value is writable.

## Declaration

```objectivec
extern OSStatus AudioFileGetPropertyInfo(AudioFileID inAudioFile, AudioFilePropertyID inPropertyID, UInt32 *outDataSize, UInt32 *isWritable);
```

## Parameters

- `inAudioFile`: The audio file you want to obtain property value information from.
- `inPropertyID`: The property whose value information you want. See [Audio File Properties](1576499-audio-file-properties.md) for possible values.
- `outDataSize`: On output, the size in bytes of the property value.
- `isWritable`: On output, equals `1` if the property is writable, or `0` if it is read-only.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetProperty](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileSetProperty](audiofilesetproperty%28________%29.md): Sets the value of an audio file property
