> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverteroutputstatus/inputrandry](https://developer.apple.com/documentation/avfaudio/avaudioconverteroutputstatus/inputrandry)

# AVAudioConverterOutputStatus.inputRanDry (Swift)

**Framework:** AVFAudio  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates the method doesn’t have enough input available to satisfy the request.

## Declaration

```swift
case inputRanDry
```

<a id="Discussion"></a>

## Discussion

The output buffer contains as much data as the framework can convert.

## See Also

### Status Options

- [AVAudioConverterOutputStatus.haveData](havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus.endOfStream](endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus.error](error.md): A status that indicates the method encounters an error.

# AVAudioConverterOutputStatus_InputRanDry (Objective-C)

**Framework:** AVFAudio  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A status that indicates the method doesn’t have enough input available to satisfy the request.

## Declaration

```objectivec
AVAudioConverterOutputStatus_InputRanDry
```

<a id="Discussion"></a>

## Discussion

The output buffer contains as much data as the framework can convert.

## See Also

### Status Options

- [AVAudioConverterOutputStatus_HaveData](havedata.md): A status that indicates that the method returns all of the requested data.
- [AVAudioConverterOutputStatus_EndOfStream](endofstream.md): A status that indicates the method reaches the end of the stream, and doesn’t return any data.
- [AVAudioConverterOutputStatus_Error](error.md): A status that indicates the method encounters an error.
