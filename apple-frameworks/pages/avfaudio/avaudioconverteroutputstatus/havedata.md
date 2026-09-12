> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverteroutputstatus/havedata](https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus/havedata)

# AVAudioConverterOutputStatus.haveData (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates that the method returns all of the requested data.

## Declaration

```swift
case haveData
```

## See Also

### Status Options

- [AVAudioConverterOutputStatus.inputRanDry](inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus.endOfStream](endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus.error](error.md): A status that indicates the method encounters an error.

# AVAudioConverterOutputStatus_HaveData (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates that the method returns all of the requested data.

## Declaration

```objectivec
AVAudioConverterOutputStatus_HaveData
```

## See Also

### Status Options

- [AVAudioConverterOutputStatus_InputRanDry](inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus_EndOfStream](endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus_Error](error.md): A status that indicates the method encounters an error.
