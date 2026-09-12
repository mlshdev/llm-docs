> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audioconverterfillbuffer](https://developer.apple.com/documentation/audiotoolbox/audioconverterfillbuffer)

# AudioConverterFillBuffer

**Interface language:** Objective-C

**Framework:** Audio Toolbox  
**Kind:** Function  
**Availability:** macOS 10.1+ (deprecated in 10.5)

> Deprecated. Use [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) instead.

## Declaration

```objectivec
extern OSStatus AudioConverterFillBuffer(AudioConverterRef inAudioConverter, AudioConverterInputDataProc inInputDataProc, void *inInputDataProcUserData, UInt32 *ioOutputDataSize, void *outOutputData);
```

## Parameters

- `inAudioConverter`: The audio converter to use for format conversion.
- `inInputDataProc`: A callback function that supplies audio data to convert. This callback is invoked repeatedly as the converter is ready for new input data.
- `inInputDataProcUserData`: Custom data for use by your application when receiving a callback invocation.
- `ioOutputDataSize`: On input, the size, in bytes, of the buffer available for the converted data. On output, the number of bytes written to the output buffer (pointed to by the `outOutputData` parameter).
- `outOutputData`: On output, the converted audio data.

<a id="return-value"></a>

## Return Value

A  result code.

<a id="Discussion"></a>

## Discussion

Converts audio data supplied by a callback function.

<a id="Special-Considerations"></a>

### Special Considerations

This function is deprecated. Use the [AudioConverterFillComplexBuffer](audioconverterfillcomplexbuffer%28____________%29.md) function instead.
