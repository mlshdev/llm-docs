> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterconvertcomplexbuffer(_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverterconvertcomplexbuffer(_:_:_:_:))

# AudioConverterConvertComplexBuffer(\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Converts audio data from one linear PCM format to another, where both use the same sample rate.

## Declaration

```swift
func AudioConverterConvertComplexBuffer(_ inAudioConverter: AudioConverterRef, _ inNumberPCMFrames: UInt32, _ inInputData: UnsafePointer<AudioBufferList>, _ outOutputData: UnsafeMutablePointer<AudioBufferList>) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter to use for the format conversion.
- `inNumberPCMFrames`: The number of linear PCM frames to convert.
- `inInputData`: The source audio buffer list.
- `outOutputData`: The destination audio buffer list.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function is appropriate for linear PCM-to-linear PCM audio data format conversion where there is no sample rate conversion.

> **Important**

>  This function fails for conversions where there is a variation between the input and output data buffer sizes. This includes sample rate conversions and conversions involving most compressed formats. In these cases, instead use the [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) function.

## See Also

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterConvertBuffer(\_:\_:\_:\_:\_:)](audioconverterconvertbuffer%28__________%29.md): Converts audio data from one linear PCM format to another.
- [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.

# AudioConverterConvertComplexBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Converts audio data from one linear PCM format to another, where both use the same sample rate.

## Declaration

```objectivec
extern OSStatus AudioConverterConvertComplexBuffer(AudioConverterRef inAudioConverter, UInt32 inNumberPCMFrames, const AudioBufferList *inInputData, AudioBufferList *outOutputData);
```

## Parameters

- `inAudioConverter`: The audio converter to use for the format conversion.
- `inNumberPCMFrames`: The number of linear PCM frames to convert.
- `inInputData`: The source audio buffer list.
- `outOutputData`: The destination audio buffer list.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function is appropriate for linear PCM-to-linear PCM audio data format conversion where there is no sample rate conversion.

> **Important**

>  This function fails for conversions where there is a variation between the input and output data buffer sizes. This includes sample rate conversions and conversions involving most compressed formats. In these cases, instead use the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function.

## See Also

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterConvertBuffer](audioconverterconvertbuffer%28__________%29.md): Converts audio data from one linear PCM format to another.
- [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.
