> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverterinputblock](https://developer.apple.com/documentation/avfaudio/avaudioconverterinputblock)

# AVAudioConverterInputBlock (Swift)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block to get input data for conversion, as necessary.

## Declaration

```swift
typealias AVAudioConverterInputBlock = (AVAudioPacketCount, UnsafeMutablePointer<AVAudioConverterInputStatus>) -> AVAudioBuffer?
```

## See Also

### Converting Audio Formats

- [convert(to:error:withInputFrom:)](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [convert(to:from:)](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

# AVAudioConverterInputBlock (Objective-C)

**Framework:** AVFAudio  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A block to get input data for conversion, as necessary.

## Declaration

```objectivec
typedef AVAudioBuffer *(^)(unsigned int, enum AVAudioConverterInputStatus *) AVAudioConverterInputBlock;
```

## See Also

### Converting Audio Formats

- [convertToBuffer:error:withInputFromBlock:](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [convertToBuffer:fromBuffer:error:](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.
