> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudioconverterprimemethod/normal

# AVAudioConverterPrimeMethod.normal (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.

## Declaration

```swift
case normal
```

## See Also

### Options

- [AVAudioConverterPrimeMethod.pre](pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod.none](none.md): An option to prime the converter assumes leading and trailing frames are silence.

# AVAudioConverterPrimeMethod_Normal (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to prime with trailing (zero latency) frames where the converter assumes the leading frames are silence.

## Declaration

```objectivec
AVAudioConverterPrimeMethod_Normal
```

## See Also

### Options

- [AVAudioConverterPrimeMethod_Pre](pre.md): An option to prime with leading and trailing input frames.
- [AVAudioConverterPrimeMethod_None](none.md): An option to prime the converter assumes leading and trailing frames are silence.
