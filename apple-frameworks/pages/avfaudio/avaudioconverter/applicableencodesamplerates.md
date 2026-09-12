> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/applicableencodesamplerates](https://developer.apple.com/documentation/avfaudio/avaudioconverter/applicableencodesamplerates)

# applicableEncodeSampleRates (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of output sample rates that the converter applies according to the current formats and settings, when encoding.

## Declaration

```swift
var applicableEncodeSampleRates: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [availableEncodeSampleRates](availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.

# applicableEncodeSampleRates (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of output sample rates that the converter applies according to the current formats and settings, when encoding.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * applicableEncodeSampleRates;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Sample Rate Properties

- [sampleRateConverterQuality](samplerateconverterquality.md): A sample rate converter algorithm key value.
- [sampleRateConverterAlgorithm](samplerateconverteralgorithm.md): The priming method the sample rate converter or decoder uses.
- [availableEncodeSampleRates](availableencodesamplerates.md): An array of all output sample rates the codec provides when encoding.
