> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverterprimemethod](https://developer.apple.com/documentation/avfaudio/avaudioconverterprimemethod)

# AVAudioConverterPrimeMethod (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for the prime method property.

## Declaration

```swift
enum AVAudioConverterPrimeMethod
```

<a id="overview"></a>

## Overview

For more information, see [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md).

## Topics

### Options

- [AVAudioConverterPrimeMethod.pre](avaudioconverterprimemethod/pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod.normal](avaudioconverterprimemethod/normal.md): An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.
- [AVAudioConverterPrimeMethod.none](avaudioconverterprimemethod/none.md): An option to prime the converter assumes leading and trailing frames are silence.

### Initializers

- [init(rawValue:)](avaudioconverterprimemethod/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md): Priming information for audio conversion.

# AVAudioConverterPrimeMethod (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options for the prime method property.

## Declaration

```objectivec
enum AVAudioConverterPrimeMethod : NSInteger;
```

<a id="overview"></a>

## Overview

For more information, see [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md).

## Topics

### Options

- [AVAudioConverterPrimeMethod_Pre](avaudioconverterprimemethod/pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod_Normal](avaudioconverterprimemethod/normal.md): An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.
- [AVAudioConverterPrimeMethod_None](avaudioconverterprimemethod/none.md): An option to prime the converter assumes leading and trailing frames are silence.

## See Also

### Getting Priming Information

- [primeInfo](avaudioconverter/primeinfo.md): The number of priming frames the converter uses.
- [primeMethod](avaudioconverter/primemethod.md): The priming method the sample rate converter or decoder uses.
- [AVAudioConverterPrimeInfo](avaudioconverterprimeinfo.md): Priming information for audio conversion.
