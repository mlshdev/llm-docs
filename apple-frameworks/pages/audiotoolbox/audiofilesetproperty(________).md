> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiofilesetproperty(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audiofilesetproperty(_:_:_:_:))

# AudioFileSetProperty(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio file property

## Declaration

```swift
func AudioFileSetProperty(_ inAudioFile: AudioFileID, _ inPropertyID: AudioFilePropertyID, _ inDataSize: UInt32, _ inPropertyData: UnsafeRawPointer) -> OSStatus
```

## Parameters

- `inAudioFile`: The audio file that you want to set a property value for.
- `inPropertyID`: The property whose value you want to set. See [Audio File Properties](1576499-audio-file-properties.md) for possible values. Use the [AudioFileGetPropertyInfo(\_:\_:\_:\_:)](audiofilegetpropertyinfo%28________%29.md) function to determine whether the property value is writable.
- `inDataSize`: The size of the value you are passing in the `inPropertyData` parameter.
- `inPropertyData`: The new value for the property.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetProperty(\_:\_:\_:\_:)](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileGetPropertyInfo(\_:\_:\_:\_:)](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.

# AudioFileSetProperty (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS 9.0+ · visionOS 1.0+

Sets the value of an audio file property

## Declaration

```objectivec
extern OSStatus AudioFileSetProperty(AudioFileID inAudioFile, AudioFilePropertyID inPropertyID, UInt32 inDataSize, const void *inPropertyData);
```

## Parameters

- `inAudioFile`: The audio file that you want to set a property value for.
- `inPropertyID`: The property whose value you want to set. See [Audio File Properties](1576499-audio-file-properties.md) for possible values. Use the [AudioFileGetPropertyInfo](audiofilegetpropertyinfo%28________%29.md) function to determine whether the property value is writable.
- `inDataSize`: The size of the value you are passing in the `inPropertyData` parameter.
- `inPropertyData`: The new value for the property.

<a id="return-value"></a>

## Return Value

A result code. See Result Codes.

## See Also

### Getting and Setting Audio File Properties

- [AudioFileGetProperty](audiofilegetproperty%28________%29.md): Gets the value of an audio file property.
- [AudioFileGetPropertyInfo](audiofilegetpropertyinfo%28________%29.md): Gets information about an audio file property, including the size of the property value and whether the value is writable.
