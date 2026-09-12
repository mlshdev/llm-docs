> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverteroutputstatus/endofstream](https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus/endofstream)

# AVAudioConverterOutputStatus.endOfStream (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates the method reaches the end of the stream, and doesn’t return any data.

## Declaration

```swift
case endOfStream
```

## See Also

### Status Options

- [AVAudioConverterOutputStatus.haveData](havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus.inputRanDry](inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus.error](error.md): A status that indicates the method encounters an error.

# AVAudioConverterOutputStatus_EndOfStream (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates the method reaches the end of the stream, and doesn’t return any data.

## Declaration

```objectivec
AVAudioConverterOutputStatus_EndOfStream
```

## See Also

### Status Options

- [AVAudioConverterOutputStatus_HaveData](havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus_InputRanDry](inputrandry.md): A status that indicates the method doesn’t have enough input available to satisfy the request.
- [AVAudioConverterOutputStatus_Error](error.md): A status that indicates the method encounters an error.
