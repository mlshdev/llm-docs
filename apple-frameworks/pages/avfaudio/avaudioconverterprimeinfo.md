> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverterprimeinfo](https://developer.apple.com/documentation/avfaudio/avaudioconverterprimeinfo)

# AVAudioConverterPrimeInfo (Swift)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Priming information for audio conversion.

## Declaration

```swift
struct AVAudioConverterPrimeInfo
```

## Topics

### Creating Priming Information

- [init()](avaudioconverterprimeinfo/init%28%29.md): Creates a priming information instance.
- [init(leadingFrames:trailingFrames:)](avaudioconverterprimeinfo/init%28leadingframes_trailingframes_%29.md): Creates a priming information instance with the specified leading and trailing frames.

### Getting Frame Properties

- [leadingFrames](avaudioconverterprimeinfo/leadingframes.md): The number of leading (previous) input frames the converter requires to perform a high-quality conversion.
- [trailingFrames](avaudioconverterprimeinfo/trailingframes.md): The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeMethod](avaudioconverterprimemethod.md): Options for the prime method property.

# AVAudioConverterPrimeInfo (Objective-C)

**Framework:** AVFAudio  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Priming information for audio conversion.

## Declaration

```objectivec
typedef struct AVAudioConverterPrimeInfo { ... } AVAudioConverterPrimeInfo;
```

## Topics

### Getting Frame Properties

- [leadingFrames](avaudioconverterprimeinfo/leadingframes.md): The number of leading (previous) input frames the converter requires to perform a high-quality conversion.
- [trailingFrames](avaudioconverterprimeinfo/trailingframes.md): The number of trailing input frames, past the end input frame, the converter requires to perform a high-quality conversion.

## See Also

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeMethod](avaudioconverterprimemethod.md): Options for the prime method property.
