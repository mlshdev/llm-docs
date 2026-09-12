> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/1559927-converter-priming-constants](https://developer.apple.com/documentation/audiotoolbox/1559927-converter-priming-constants)

# Converter Priming Constants (Swift)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.

## Topics

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

## See Also

### Constants

- [Audio Converter Properties](1559928-audio-converter-properties.md): Audio converter properties, used with the [AudioConverterGetPropertyInfo(\_:\_:\_:\_:)](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty(\_:\_:\_:\_:)](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty(\_:\_:\_:\_:)](audioconvertersetproperty%28________%29.md) functions.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.

# Converter Priming Constants (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** API Collection

Constants used with the [kAudioConverterPrimeMethod](kaudioconverterprimemethod.md) property.

## Topics

### Constants

- [kConverterPrimeMethod_Pre](kconverterprimemethod_pre.md): Prime with `leading` \+ `trailing` input frames.
- [kConverterPrimeMethod_Normal](kconverterprimemethod_normal.md): Prime with `trailing` frames only, for zero latency. Leading frames are assumed to be silence.
- [kConverterPrimeMethod_None](kconverterprimemethod_none.md): Acts in “latency” mode. Leading and trailing frames are both assumed to be silence.

## See Also

### Constants

- [Audio Converter Properties](1559928-audio-converter-properties.md): Audio converter properties, used with the [AudioConverterGetPropertyInfo](audioconvertergetpropertyinfo%28________%29.md), [AudioConverterGetProperty](audioconvertergetproperty%28________%29.md), and [AudioConverterSetProperty](audioconvertersetproperty%28________%29.md) functions.
- [Sample Rate Conversion Quality Identifiers](1559924-sample-rate-conversion-quality-i.md): Specifiers for sample rate conversion quality, used for the [kAudioConverterSampleRateConverterQuality](kaudioconvertersamplerateconverterquality.md) property.
- [Sample Rate Conversion Complexity Identifiers](1559923-sample-rate-conversion-complexit.md): Specifiers for the sample rate conversion algorithm, used for the [kAudioConverterSampleRateConverterComplexity](kaudioconvertersamplerateconvertercomplexity.md) property.
