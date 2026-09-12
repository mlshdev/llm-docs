> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverterinputstatus](https://developer.apple.com/documentation/avfaudio/avaudioconverterinputstatus)

# AVAudioConverterInputStatus (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the status of an audio converter input block.

## Declaration

```swift
enum AVAudioConverterInputStatus
```

## Topics

### Status Options

- [AVAudioConverterInputStatus.endOfStream](avaudioconverterinputstatus/endofstream.md): A status that indicates you’re at the end of an audio stream.
- [AVAudioConverterInputStatus.haveData](avaudioconverterinputstatus/havedata.md): A status that indicates the normal case where you supply data to the converter.
- [AVAudioConverterInputStatus.noDataNow](avaudioconverterinputstatus/nodatanow.md): A status that indicates you’re out of data.

### Initializers

- [init(rawValue:)](avaudioconverterinputstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Converting Audio Formats

- [convert(to:error:withInputFrom:)](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convert(to:from:)](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

# AVAudioConverterInputStatus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the status of an audio converter input block.

## Declaration

```objectivec
enum AVAudioConverterInputStatus : NSInteger;
```

## Topics

### Status Options

- [AVAudioConverterInputStatus_EndOfStream](avaudioconverterinputstatus/endofstream.md): A status that indicates you’re at the end of an audio stream.
- [AVAudioConverterInputStatus_HaveData](avaudioconverterinputstatus/havedata.md): A status that indicates the normal case where you supply data to the converter.
- [AVAudioConverterInputStatus_NoDataNow](avaudioconverterinputstatus/nodatanow.md): A status that indicates you’re out of data.

## See Also

### Converting Audio Formats

- [convertToBuffer:error:withInputFromBlock:](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convertToBuffer:fromBuffer:error:](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterOutputStatus](avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.
