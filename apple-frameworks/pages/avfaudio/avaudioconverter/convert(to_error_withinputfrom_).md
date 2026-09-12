> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/convert(to:error:withinputfrom:)](https://developer.apple.com/documentation/avfaudio/avaudioconverter/convert(to:error:withinputfrom:))

# convert(to:error:withInputFrom:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a conversion between audio formats, if the system supports it.

## Declaration

```swift
func convert(to outputBuffer: AVAudioBuffer, error outError: NSErrorPointer, withInputFrom inputBlock: (AVAudioPacketCount, UnsafeMutablePointer<AVAudioConverterInputStatus>) -> AVAudioBuffer?) -> AVAudioConverterOutputStatus
```

## Parameters

- `outputBuffer`: The output audio buffer.
- `outError`: The error if the conversion fails.
- `inputBlock`: A block the framework calls to get input data.

<a id="return-value"></a>

## Return Value

An [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md) type that indicates the conversion status.

<a id="Discussion"></a>

## Discussion

The method attempts to fill the buffer to its capacity. On return, the buffer’s length indicates the number of sample frames the framework successfully converts.

## Topics

### Callbacks

- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.

## See Also

### Converting Audio Formats

- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convert(to:from:)](convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](../avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

# convertToBuffer:error:withInputFromBlock: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a conversion between audio formats, if the system supports it.

## Declaration

```objectivec
- (AVAudioConverterOutputStatus) convertToBuffer:(AVAudioBuffer *) outputBuffer error:(NSError **) outError withInputFromBlock:(AVAudioConverterInputBlock) inputBlock;
```

## Parameters

- `outputBuffer`: The output audio buffer.
- `outError`: The error if the conversion fails.
- `inputBlock`: A block the framework calls to get input data.

<a id="return-value"></a>

## Return Value

An [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md) type that indicates the conversion status.

<a id="Discussion"></a>

## Discussion

The method attempts to fill the buffer to its capacity. On return, the buffer’s length indicates the number of sample frames the framework successfully converts.

## Topics

### Callbacks

- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.

## See Also

### Converting Audio Formats

- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [convertToBuffer:fromBuffer:error:](convert%28to_from_%29.md): Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.
- [AVAudioConverterInputStatus](../avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.
