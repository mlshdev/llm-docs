> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/kaudioconverterpropertymaximuminputpacketsize](https://developer.apple.com/documentation/audiotoolbox/kaudioconverterpropertymaximuminputpacketsize)

# kAudioConverterPropertyMaximumInputPacketSize (Swift)

**Framework:** Audio Toolbox  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the input format. This is mostly useful for variable bit rate compressed data (decoders).

## Declaration

```swift
var kAudioConverterPropertyMaximumInputPacketSize: AudioConverterPropertyID { get }
```

## See Also

### Constants

- [kAudioConverterPropertyMinimumInputBufferSize](kaudioconverterpropertyminimuminputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of input data that can be supplied via the audio converter input callback or as the input to the [AudioConverterConvertBuffer(\_:\_:\_:\_:\_:)](audioconverterconvertbuffer%28__________%29.md) function.
- [kAudioConverterPropertyMinimumOutputBufferSize](kaudioconverterpropertyminimumoutputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of output data that can be supplied to AudioConverterFillComplexBuffer or as the output to AudioConverterConvertBuffer
- [kAudioConverterPropertyMaximumInputBufferSize](kaudioconverterpropertymaximuminputbuffersize.md): Deprecated. The audio converter input callback may be passed any number of packets of data. If fewer are packets are returned than required, then the input proc is called again. If more packets are passed than required, they remain in the client’s buffer and are consumed as needed.
- [kAudioConverterPropertyMaximumOutputPacketSize](kaudioconverterpropertymaximumoutputpacketsize.md): A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the output format. This is mostly useful for variable bit rate compressed data (encoders).
- [kAudioConverterPropertyCalculateInputBufferSize](kaudioconverterpropertycalculateinputbuffersize.md): A `UInt32` value that on input holds a size, in bytes, that is desired for the output data. On output, it holds the size, in bytes, of the input buffer required to generate that much output data. Note that some converters cannot do this calculation.
- [kAudioConverterPropertyCalculateOutputBufferSize](kaudioconverterpropertycalculateoutputbuffersize.md): A `UInt32` value that on input holds a size, in bytes, that is desired for the input data. On output, it holds the size, in bytes, of the output buffer required to hold the output data to be generated. Some converters cannot do this calculation.
- [kAudioConverterPropertyInputCodecParameters](kaudioconverterpropertyinputcodecparameters.md): The value of this property varies from format to format and is considered private to the format. It is treated as a buffer of untyped data.
- [kAudioConverterPropertyOutputCodecParameters](kaudioconverterpropertyoutputcodecparameters.md): The value of this property varies from format to format and is considered private to the format. It is treated as a buffer of untyped data.
- [kAudioConverterSampleRateConverterAlgorithm](kaudioconvertersamplerateconverteralgorithm.md): A value that indicates the sample rate conversion algorithm.
- [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md): The sample rate conversion algorithm.
- [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md): The rendering quality of the sample rate converter.
- [kAudioConverterSampleRateConverterInitialPhase](kaudioconvertersamplerateconverterinitialphase.md): A `Float64` value equal to `0.0`.
- [kAudioConverterCodecQuality](kaudioconvertercodecquality.md): The rendering quality of a codec. A `UInt32` value.
- [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md): The priming method, usually for sample-rate conversion.
- [kAudioConverterPrimeInfo](kaudioconverterprimeinfo.md): An [AudioConverterPrimeInfo](audioconverterprimeinfo.md) structure.

# kAudioConverterPropertyMaximumInputPacketSize (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the input format. This is mostly useful for variable bit rate compressed data (decoders).

## Declaration

```objectivec
kAudioConverterPropertyMaximumInputPacketSize
```

## See Also

### Constants

- [kAudioConverterPropertyMinimumInputBufferSize](kaudioconverterpropertyminimuminputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of input data that can be supplied via the audio converter input callback or as the input to the [AudioConverterConvertBuffer](audioconverterconvertbuffer%28__________%29.md) function.
- [kAudioConverterPropertyMinimumOutputBufferSize](kaudioconverterpropertyminimumoutputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of output data that can be supplied to AudioConverterFillComplexBuffer or as the output to AudioConverterConvertBuffer
- [kAudioConverterPropertyMaximumInputBufferSize](kaudioconverterpropertymaximuminputbuffersize.md): Deprecated. The audio converter input callback may be passed any number of packets of data. If fewer are packets are returned than required, then the input proc is called again. If more packets are passed than required, they remain in the client’s buffer and are consumed as needed.
- [kAudioConverterPropertyMaximumOutputPacketSize](kaudioconverterpropertymaximumoutputpacketsize.md): A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the output format. This is mostly useful for variable bit rate compressed data (encoders).
- [kAudioConverterPropertyCalculateInputBufferSize](kaudioconverterpropertycalculateinputbuffersize.md): A `UInt32` value that on input holds a size, in bytes, that is desired for the output data. On output, it holds the size, in bytes, of the input buffer required to generate that much output data. Note that some converters cannot do this calculation.
- [kAudioConverterPropertyCalculateOutputBufferSize](kaudioconverterpropertycalculateoutputbuffersize.md): A `UInt32` value that on input holds a size, in bytes, that is desired for the input data. On output, it holds the size, in bytes, of the output buffer required to hold the output data to be generated. Some converters cannot do this calculation.
- [kAudioConverterPropertyInputCodecParameters](kaudioconverterpropertyinputcodecparameters.md): The value of this property varies from format to format and is considered private to the format. It is treated as a buffer of untyped data.
- [kAudioConverterPropertyOutputCodecParameters](kaudioconverterpropertyoutputcodecparameters.md): The value of this property varies from format to format and is considered private to the format. It is treated as a buffer of untyped data.
- [kAudioConverterSampleRateConverterAlgorithm](kaudioconvertersamplerateconverteralgorithm.md): A value that indicates the sample rate conversion algorithm.
- [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md): The sample rate conversion algorithm.
- [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md): The rendering quality of the sample rate converter.
- [kAudioConverterSampleRateConverterInitialPhase](kaudioconvertersamplerateconverterinitialphase.md): A `Float64` value equal to `0.0`.
- [kAudioConverterCodecQuality](kaudioconvertercodecquality.md): The rendering quality of a codec. A `UInt32` value.
- [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md): The priming method, usually for sample-rate conversion.
- [kAudioConverterPrimeInfo](kaudioconverterprimeinfo.md): An [AudioConverterPrimeInfo](audioconverterprimeinfo.md) structure.
