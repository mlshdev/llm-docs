> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1559928-audio-converter-properties](https://developer.apple.com/documentation/audiotoolbox/1559928-audio-converter-properties)

# Audio Converter Properties (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Audio converter properties, used with the [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md) functions.

## Topics

### Constants

- [kAudioConverterPropertyMinimumInputBufferSize](kaudioconverterpropertyminimuminputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of input data that can be supplied via the audio converter input callback or as the input to the [AudioConverterConvertBuffer(\_:\_:\_:\_:\_:)](audioconverterconvertbuffer%28__________%29.md) function.
- [kAudioConverterPropertyMinimumOutputBufferSize](kaudioconverterpropertyminimumoutputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of output data that can be supplied to AudioConverterFillComplexBuffer or as the output to AudioConverterConvertBuffer
- [kAudioConverterPropertyMaximumInputBufferSize](kaudioconverterpropertymaximuminputbuffersize.md): Deprecated. The audio converter input callback may be passed any number of packets of data. If fewer are packets are returned than required, then the input proc is called again. If more packets are passed than required, they remain in the client’s buffer and are consumed as needed.
- [kAudioConverterPropertyMaximumInputPacketSize](kaudioconverterpropertymaximuminputpacketsize.md): A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the input format. This is mostly useful for variable bit rate compressed data (decoders).
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
- [kAudioConverterChannelMap](kaudioconverterchannelmap.md): An array of `SInt32` values that specify an input-to-output channel mapping.
- [kAudioConverterDecompressionMagicCookie](kaudioconverterdecompressionmagiccookie.md): A `void*` value that points to memory set up by the caller. This property is required by some audio data formats in order to decompress the input data.
- [kAudioConverterCompressionMagicCookie](kaudioconvertercompressionmagiccookie.md): A `void*` value that points to memory set up by the caller. This property is returned by the converter so that your application may store it along with the output data. This property can then be passed back to the converter for decompression at a later time.
- [kAudioConverterEncodeBitRate](kaudioconverterencodebitrate.md): A `UInt32` value containing the number of bits per second to aim for when encoding data. Some decoders also allow you to query this property to discover the bit rate.
- [kAudioConverterEncodeAdjustableSampleRate](kaudioconverterencodeadjustablesamplerate.md): A `Float64` value that specifies an output sample rate.
- [kAudioConverterInputChannelLayout](kaudioconverterinputchannellayout.md): An `AudioChannelLayout` structure that specifies an audio converter’s input channel layout.
- [kAudioConverterOutputChannelLayout](kaudioconverteroutputchannellayout.md): An `AudioChannelLayout` structure that specifies an audio converter’s output channel layout.
- [kAudioConverterApplicableEncodeBitRates](kaudioconverterapplicableencodebitrates.md): An array of `AudioValueRange` structures that describes applicable bit rates based on current settings.
- [kAudioConverterAvailableEncodeBitRates](kaudioconverteravailableencodebitrates.md): An array of `AudioValueRange` structures that describes the available bit rates based on the input format. You can determine the available bit rates using Audio Format Services.
- [kAudioConverterApplicableEncodeSampleRates](kaudioconverterapplicableencodesamplerates.md): An array of `AudioValueRange` structures that describes applicable sample rates based on current settings.
- [kAudioConverterAvailableEncodeSampleRates](kaudioconverteravailableencodesamplerates.md): An array of `AudioValueRange` structures that describes the available sample rates based on the input format. You can determine the available sample rates using Audio Format Services.
- [kAudioConverterAvailableEncodeChannelLayoutTags](kaudioconverteravailableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified in the encoder’s input format.
- [kAudioConverterCurrentOutputStreamDescription](kaudioconvertercurrentoutputstreamdescription.md): The current, completely specified output `AudioStreamBasicDescription` structure.
- [kAudioConverterCurrentInputStreamDescription](kaudioconvertercurrentinputstreamdescription.md): The current, completely specified input `AudioStreamBasicDescription` structure.
- [kAudioConverterPropertySettings](kaudioconverterpropertysettings.md): An array (of type `CFArray`) of property settings for converters.
- [kAudioConverterPropertyBitDepthHint](kaudioconverterpropertybitdepthhint.md): A `UInt32` value that designates the source bit depth to preserve.
- [kAudioConverterPropertyFormatList](kaudioconverterpropertyformatlist.md): An array of `AudioFormatListItem` structures that describes the set of data formats produced by the encoder end of an audio converter.
- [kAudioConverterPropertyCanResumeFromInterruption](kaudioconverterpropertycanresumefrominterruption.md): Indicates whether the underlying codec supports resumption of processing following an audio interruption. A read-only `UInt32` value.

## See Also

### Constants

- [Converter Priming Constants](1559927-converter-priming-constants.md): Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.

# Audio Converter Properties (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Audio converter properties, used with the [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md) functions.

## Topics

### Constants

- [kAudioConverterPropertyMinimumInputBufferSize](kaudioconverterpropertyminimuminputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of input data that can be supplied via the audio converter input callback or as the input to the [AudioConverterConvertBuffer](audioconverterconvertbuffer%28__________%29.md) function.
- [kAudioConverterPropertyMinimumOutputBufferSize](kaudioconverterpropertyminimumoutputbuffersize.md): A `UInt32` value that indicates the size, in bytes, of the smallest buffer of output data that can be supplied to AudioConverterFillComplexBuffer or as the output to AudioConverterConvertBuffer
- [kAudioConverterPropertyMaximumInputBufferSize](kaudioconverterpropertymaximuminputbuffersize.md): Deprecated. The audio converter input callback may be passed any number of packets of data. If fewer are packets are returned than required, then the input proc is called again. If more packets are passed than required, they remain in the client’s buffer and are consumed as needed.
- [kAudioConverterPropertyMaximumInputPacketSize](kaudioconverterpropertymaximuminputpacketsize.md): A `UInt32` value that indicates the size, in bytes, of the largest single packet of data in the input format. This is mostly useful for variable bit rate compressed data (decoders).
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
- [kAudioConverterChannelMap](kaudioconverterchannelmap.md): An array of `SInt32` values that specify an input-to-output channel mapping.
- [kAudioConverterDecompressionMagicCookie](kaudioconverterdecompressionmagiccookie.md): A `void*` value that points to memory set up by the caller. This property is required by some audio data formats in order to decompress the input data.
- [kAudioConverterCompressionMagicCookie](kaudioconvertercompressionmagiccookie.md): A `void*` value that points to memory set up by the caller. This property is returned by the converter so that your application may store it along with the output data. This property can then be passed back to the converter for decompression at a later time.
- [kAudioConverterEncodeBitRate](kaudioconverterencodebitrate.md): A `UInt32` value containing the number of bits per second to aim for when encoding data. Some decoders also allow you to query this property to discover the bit rate.
- [kAudioConverterEncodeAdjustableSampleRate](kaudioconverterencodeadjustablesamplerate.md): A `Float64` value that specifies an output sample rate.
- [kAudioConverterInputChannelLayout](kaudioconverterinputchannellayout.md): An `AudioChannelLayout` structure that specifies an audio converter’s input channel layout.
- [kAudioConverterOutputChannelLayout](kaudioconverteroutputchannellayout.md): An `AudioChannelLayout` structure that specifies an audio converter’s output channel layout.
- [kAudioConverterApplicableEncodeBitRates](kaudioconverterapplicableencodebitrates.md): An array of `AudioValueRange` structures that describes applicable bit rates based on current settings.
- [kAudioConverterAvailableEncodeBitRates](kaudioconverteravailableencodebitrates.md): An array of `AudioValueRange` structures that describes the available bit rates based on the input format. You can determine the available bit rates using Audio Format Services.
- [kAudioConverterApplicableEncodeSampleRates](kaudioconverterapplicableencodesamplerates.md): An array of `AudioValueRange` structures that describes applicable sample rates based on current settings.
- [kAudioConverterAvailableEncodeSampleRates](kaudioconverteravailableencodesamplerates.md): An array of `AudioValueRange` structures that describes the available sample rates based on the input format. You can determine the available sample rates using Audio Format Services.
- [kAudioConverterAvailableEncodeChannelLayoutTags](kaudioconverteravailableencodechannellayouttags.md): An array of `AudioChannelLayoutTag` values for the format and number of channels specified in the encoder’s input format.
- [kAudioConverterCurrentOutputStreamDescription](kaudioconvertercurrentoutputstreamdescription.md): The current, completely specified output `AudioStreamBasicDescription` structure.
- [kAudioConverterCurrentInputStreamDescription](kaudioconvertercurrentinputstreamdescription.md): The current, completely specified input `AudioStreamBasicDescription` structure.
- [kAudioConverterPropertySettings](kaudioconverterpropertysettings.md): An array (of type `CFArray`) of property settings for converters.
- [kAudioConverterPropertyBitDepthHint](kaudioconverterpropertybitdepthhint.md): A `UInt32` value that designates the source bit depth to preserve.
- [kAudioConverterPropertyFormatList](kaudioconverterpropertyformatlist.md): An array of `AudioFormatListItem` structures that describes the set of data formats produced by the encoder end of an audio converter.
- [kAudioConverterPropertyCanResumeFromInterruption](kaudioconverterpropertycanresumefrominterruption.md): Indicates whether the underlying codec supports resumption of processing following an audio interruption. A read-only `UInt32` value.

## See Also

### Constants

- [Converter Priming Constants](1559927-converter-priming-constants.md): Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.
