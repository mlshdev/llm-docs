> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/samplerateconverteralgorithm](https://developer.apple.com/documentation/avfaudio/avaudioconverter/samplerateconverteralgorithm)

# sampleRateConverterAlgorithm (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The priming method the sample rate converter or decoder uses.

## Declaration

```swift
var sampleRateConverterAlgorithm: String? { get set }
```

## Topics

### Algorithms

- [AVSampleRateConverterAlgorithm_Normal](../avsamplerateconverteralgorithm_normal.md): The usual encoder bit rate strategy.
- [AVSampleRateConverterAlgorithm_MinimumPhase](../avsamplerateconverteralgorithm_minimumphase.md): The minimum phase encoder bit rate strategy.
- [AVSampleRateConverterAlgorithm_Mastering](../avsamplerateconverteralgorithm_mastering.md): The mastering encoder bit rate strategy.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [applicableEncodeSampleRates](applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.
- [availableEncodeSampleRates](availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.

# sampleRateConverterAlgorithm (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The priming method the sample rate converter or decoder uses.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * sampleRateConverterAlgorithm;
```

## Topics

### Algorithms

- [AVSampleRateConverterAlgorithm_Normal](../avsamplerateconverteralgorithm_normal.md): The usual encoder bit rate strategy.
- [AVSampleRateConverterAlgorithm_MinimumPhase](../avsamplerateconverteralgorithm_minimumphase.md): The minimum phase encoder bit rate strategy.
- [AVSampleRateConverterAlgorithm_Mastering](../avsamplerateconverteralgorithm_mastering.md): The mastering encoder bit rate strategy.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [applicableEncodeSampleRates](applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.
- [availableEncodeSampleRates](availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.
