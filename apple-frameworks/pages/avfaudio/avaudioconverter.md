> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter](https://developer.apple.com/documentation/avfaudio/avaudioconverter)

# AVAudioConverter (Swift)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts streams of audio between formats.

## Declaration

```swift
class AVAudioConverter
```

<a id="overview"></a>

## Overview

The audio converter class transforms audio between file formats and audio encodings.

Supported transformations include:

- PCM float, integer, or bit depth conversions
- PCM sample rate conversion
- PCM interleaving and deinterleaving
- Encoding PCM to compressed formats
- Decoding compressed formats to PCM

A single audio converter instance may perform more than one of the above transformations.

## Topics

### Creating an Audio Converter

- [init(from:to:)](avaudioconverter/init%28from_to_%29.md): Creates an audio converter object from the specified input and output formats.

### Converting Audio Formats

- [convert(to:error:withInputFrom:)](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convert(to:from:)](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

### Resetting an Audio Converter

- [reset()](avaudioconverter/reset%28%29.md): Resets the converter so you can convert a new audio stream.

### Getting Audio Converter Properties

- [channelMap](avaudioconverter/channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](avaudioconverter/dither.md): A Boolean value that indicates whether dither is on.
- [downmix](avaudioconverter/downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](avaudioconverter/inputformat.md): The format of the input audio stream.
- [outputFormat](avaudioconverter/outputformat.md): The format of the output audio stream.
- [magicCookie](avaudioconverter/magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](avaudioconverter/maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

### Getting Bit Rate Properties

- [applicableEncodeBitRates](avaudioconverter/applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](avaudioconverter/availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](avaudioconverter/availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](avaudioconverter/bitrate.md): The bit rate, in bits per second.
- [bitRateStrategy](avaudioconverter/bitratestrategy.md): A key value constant the framework uses during encoding.

### Getting Sample Rate Properties

- [sampleRateConverterQuality](avaudioconverter/samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](avaudioconverter/samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [applicableEncodeSampleRates](avaudioconverter/applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.
- [availableEncodeSampleRates](avaudioconverter/availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md): Priming information for audio conversion.
- [AVAudioConverterPrimeMethod](avaudioconverterprimemethod.md): Options for the prime method property.

### Managing packet dependencies

- [audioSyncPacketFrequency](avaudioconverter/audiosyncpacketfrequency.md)
- [contentSource](avaudioconverter/contentsource.md)
- [AVAudioContentSource](avaudiocontentsource.md)
- [dynamicRangeControlConfiguration](avaudioconverter/dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](avaudiodynamicrangecontrolconfiguration.md)

### Initializers

- [init(fromFormat:toFormat:)](avaudioconverter/init%28fromformat_toformat_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AVAudioConverter (Objective-C)

**Framework:** AVFAudio  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that converts streams of audio between formats.

## Declaration

```objectivec
@interface AVAudioConverter : NSObject
```

<a id="overview"></a>

## Overview

The audio converter class transforms audio between file formats and audio encodings.

Supported transformations include:

- PCM float, integer, or bit depth conversions
- PCM sample rate conversion
- PCM interleaving and deinterleaving
- Encoding PCM to compressed formats
- Decoding compressed formats to PCM

A single audio converter instance may perform more than one of the above transformations.

## Topics

### Creating an Audio Converter

- [initFromFormat:toFormat:](avaudioconverter/init%28from_to_%29.md): Creates an audio converter object from the specified input and output formats.

### Converting Audio Formats

- [convertToBuffer:error:withInputFromBlock:](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convertToBuffer:fromBuffer:error:](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

### Resetting an Audio Converter

- [reset](avaudioconverter/reset%28%29.md): Resets the converter so you can convert a new audio stream.

### Getting Audio Converter Properties

- [channelMap](avaudioconverter/channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](avaudioconverter/dither.md): A Boolean value that indicates whether dither is on.
- [downmix](avaudioconverter/downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](avaudioconverter/inputformat.md): The format of the input audio stream.
- [outputFormat](avaudioconverter/outputformat.md): The format of the output audio stream.
- [magicCookie](avaudioconverter/magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](avaudioconverter/maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

### Getting Bit Rate Properties

- [applicableEncodeBitRates](avaudioconverter/applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](avaudioconverter/availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](avaudioconverter/availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](avaudioconverter/bitrate.md): The bit rate, in bits per second.
- [bitRateStrategy](avaudioconverter/bitratestrategy.md): A key value constant the framework uses during encoding.

### Getting Sample Rate Properties

- [sampleRateConverterQuality](avaudioconverter/samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](avaudioconverter/samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [applicableEncodeSampleRates](avaudioconverter/applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.
- [availableEncodeSampleRates](avaudioconverter/availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md): Priming information for audio conversion.
- [AVAudioConverterPrimeMethod](avaudioconverterprimemethod.md): Options for the prime method property.

### Managing packet dependencies

- [audioSyncPacketFrequency](avaudioconverter/audiosyncpacketfrequency.md)
- [contentSource](avaudioconverter/contentsource.md)
- [AVAudioContentSource](avaudiocontentsource.md)
- [dynamicRangeControlConfiguration](avaudioconverter/dynamicrangecontrolconfiguration.md)
- [AVAudioDynamicRangeControlConfiguration](avaudiodynamicrangecontrolconfiguration.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
