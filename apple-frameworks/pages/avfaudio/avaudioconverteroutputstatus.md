> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverteroutputstatus](https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus)

# AVAudioConverterOutputStatus (Swift)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the return status of an audio converter method.

## Declaration

```swift
enum AVAudioConverterOutputStatus
```

## Topics

### Status Options

- [AVAudioConverterOutputStatus.haveData](avaudioconverteroutputstatus/havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus.inputRanDry](avaudioconverteroutputstatus/inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus.endOfStream](avaudioconverteroutputstatus/endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus.error](avaudioconverteroutputstatus/error.md): A status that indicates the method encounters an error.

### Initializers

- [init(rawValue:)](avaudioconverteroutputstatus/init%28rawvalue_%29.md)

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
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.

# AVAudioConverterOutputStatus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An option that indicates the return status of an audio converter method.

## Declaration

```objectivec
enum AVAudioConverterOutputStatus : NSInteger;
```

## Topics

### Status Options

- [AVAudioConverterOutputStatus_HaveData](avaudioconverteroutputstatus/havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus_InputRanDry](avaudioconverteroutputstatus/inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus_EndOfStream](avaudioconverteroutputstatus/endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus_Error](avaudioconverteroutputstatus/error.md): A status that indicates the method encounters an error.

## See Also

### Converting Audio Formats

- [convertToBuffer:error:withInputFromBlock:](avaudioconverter/convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convertToBuffer:fromBuffer:error:](avaudioconverter/convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
