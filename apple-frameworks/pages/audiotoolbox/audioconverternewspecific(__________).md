> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverternewspecific(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverternewspecific(_:_:_:_:_:))

# AudioConverterNewSpecific(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio converter object using a specified codec.

## Declaration

```swift
func AudioConverterNewSpecific(_ inSourceFormat: UnsafePointer<AudioStreamBasicDescription>, _ inDestinationFormat: UnsafePointer<AudioStreamBasicDescription>, _ inNumberClassDescriptions: UInt32, _ inClassDescriptions: UnsafePointer<AudioClassDescription>, _ outAudioConverter: UnsafeMutablePointer<AudioConverterRef?>) -> OSStatus
```

## Parameters

- `inSourceFormat`: The format of the source audio to be converted.
- `inDestinationFormat`: The destination format to which the audio is to be converted.
- `inNumberClassDescriptions`: The number of class descriptions supplied in the `inClassDescriptions` parameter.
- `inClassDescriptions`: A list of `AudioClassDescription` objects that specify the codec to use.
- `outAudioConverter`: On return, a new audio converter object.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

This function is identical to [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md) function, except that your application may explicitly choose which codec to instantiate if there is more than one choice.

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew(\_:\_:\_:)](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterReset(\_:)](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.
- [AudioConverterDispose(\_:)](audioconverterdispose%28__%29.md): Disposes of an audio converter object.

# AudioConverterNewSpecific (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+

Creates a new audio converter object using a specified codec.

## Declaration

```objectivec
extern OSStatus AudioConverterNewSpecific(const AudioStreamBasicDescription *inSourceFormat, const AudioStreamBasicDescription *inDestinationFormat, UInt32 inNumberClassDescriptions, const AudioClassDescription *inClassDescriptions, AudioConverterRef*outAudioConverter);
```

## Parameters

- `inSourceFormat`: The format of the source audio to be converted.
- `inDestinationFormat`: The destination format to which the audio is to be converted.
- `inNumberClassDescriptions`: The number of class descriptions supplied in the `inClassDescriptions` parameter.
- `inClassDescriptions`: A list of `AudioClassDescription` objects that specify the codec to use.
- `outAudioConverter`: On return, a new audio converter object.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

This function is identical to [AudioConverterNew](audioconverternew%28______%29.md) function, except that your application may explicitly choose which codec to instantiate if there is more than one choice.

## See Also

### Managing Audio Converter Objects

- [AudioConverterNew](audioconverternew%28______%29.md): Creates a new audio converter object based on specified audio formats.
- [AudioConverterReset](audioconverterreset%28__%29.md): Resets an audio converter object, clearing and flushing its buffers.
- [AudioConverterDispose](audioconverterdispose%28__%29.md): Disposes of an audio converter object.
