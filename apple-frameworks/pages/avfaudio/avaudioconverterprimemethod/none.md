> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconverterprimemethod/none

# AVAudioConverterPrimeMethod.none (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to prime the converter assumes leading and trailing frames are silence.

## Declaration

```swift
case none
```

## See Also

### Options

- [AVAudioConverterPrimeMethod.pre](pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod.normal](normal.md): An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.

# AVAudioConverterPrimeMethod_None (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to prime the converter assumes leading and trailing frames are silence.

## Declaration

```objectivec
AVAudioConverterPrimeMethod_None
```

## See Also

### Options

- [AVAudioConverterPrimeMethod_Pre](pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod_Normal](normal.md): An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.
