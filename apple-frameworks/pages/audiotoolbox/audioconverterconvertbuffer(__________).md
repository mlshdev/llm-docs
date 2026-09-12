> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterconvertbuffer(_:_:_:_:_:)](https://developer.apple.com/documentation/audiotoolbox/audioconverterconvertbuffer(_:_:_:_:_:))

# AudioConverterConvertBuffer(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Converts audio data from one linear PCM format to another.

## Declaration

```swift
func AudioConverterConvertBuffer(_ inAudioConverter: AudioConverterRef, _ inInputDataSize: UInt32, _ inInputData: UnsafeRawPointer, _ ioOutputDataSize: UnsafeMutablePointer<UInt32>, _ outOutputData: UnsafeMutableRawPointer) -> OSStatus
```

## Parameters

- `inAudioConverter`: The audio converter to use for format conversion.
- `inInputDataSize`: The size, in bytes, of the audio data input buffer.
- `inInputData`: The audio data to convert.
- `ioOutputDataSize`: On input, the size, in bytes, of the buffer available for the converted data. On output, the number of bytes written to the output buffer (pointed to by the `outOutputData` parameter).
- `outOutputData`: On output, the converted audio data.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function is for the special case of converting from one linear PCM format to another. This function cannot perform sample rate conversions and cannot be used for conversion to or from most compressed formats. To perform these types of conversion, use [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md) instead.

## See Also

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterFillComplexBuffer(\_:\_:\_:\_:\_:\_:)](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.
- [AudioConverterConvertComplexBuffer(\_:\_:\_:\_:)](audioconverterconvertcomplexbuffer%28________%29.md): Converts audio data from one linear PCM format to another, where both use the same sample rate.

# AudioConverterConvertBuffer (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.1+ · tvOS 9.0+ · visionOS 1.0+

Converts audio data from one linear PCM format to another.

## Declaration

```objectivec
extern OSStatus AudioConverterConvertBuffer(AudioConverterRef inAudioConverter, UInt32 inInputDataSize, const void *inInputData, UInt32 *ioOutputDataSize, void *outOutputData);
```

## Parameters

- `inAudioConverter`: The audio converter to use for format conversion.
- `inInputDataSize`: The size, in bytes, of the audio data input buffer.
- `inInputData`: The audio data to convert.
- `ioOutputDataSize`: On input, the size, in bytes, of the buffer available for the converted data. On output, the number of bytes written to the output buffer (pointed to by the `outOutputData` parameter).
- `outOutputData`: On output, the converted audio data.

<a id="return-value"></a>

## Return Value

A result code.

<a id="Discussion"></a>

## Discussion

This function is for the special case of converting from one linear PCM format to another. This function cannot perform sample rate conversions and cannot be used for conversion to or from most compressed formats. To perform these types of conversion, use [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) instead.

## See Also

### Performing Conversions

- [Encoding and decoding audio](encoding-and-decoding-audio.md): Convert audio formats to efficiently manage data and quality.
- [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md): Converts audio data supplied by a callback function, supporting non-interleaved and packetized formats.
- [AudioConverterConvertComplexBuffer](audioconverterconvertcomplexbuffer%28________%29.md): Converts audio data from one linear PCM format to another, where both use the same sample rate.
