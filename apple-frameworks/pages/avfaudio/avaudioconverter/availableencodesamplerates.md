> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconverter/availableencodesamplerates

# availableEncodeSampleRates (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of all output sample rates the codec provides when encoding.

## Declaration

```swift
var availableEncodeSampleRates: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [applicableEncodeSampleRates](applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.

# availableEncodeSampleRates (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of all output sample rates the codec provides when encoding.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * availableEncodeSampleRates;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [applicableEncodeSampleRates](applicableencodesamplerates.md): An array of output sample rates that the converter applies according to the current formats and settings, when encoding.
