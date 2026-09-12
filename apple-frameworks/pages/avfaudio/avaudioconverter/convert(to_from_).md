> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/convert(to:from:)](https://developer.apple.com/documentation/avfaudio/avaudioconverter/convert(to:from:))

# convert(to:from:) (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.

## Declaration

```swift
func convert(to outputBuffer: AVAudioPCMBuffer, from inputBuffer: AVAudioPCMBuffer) throws
```

## Parameters

- `outputBuffer`: The output audio buffer.
- `inputBuffer`: The input audio buffer.

<a id="Discussion"></a>

## Discussion

The output buffer’s [frameCapacity](../avaudiopcmbuffer/framecapacity.md) value needs to be at least at large as the [frameLength](../avaudiopcmbuffer/framelength.md) value of the `inputBuffer`.

## See Also

### Converting Audio Formats

- [convert(to:error:withInputFrom:)](convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [AVAudioConverterInputStatus](../avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.

# convertToBuffer:fromBuffer:error: (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Performs a basic conversion between audio formats that doesn’t involve converting codecs or sample rates.

## Declaration

```objectivec
- (BOOL) convertToBuffer:(AVAudioPCMBuffer *) outputBuffer fromBuffer:(const AVAudioPCMBuffer *) inputBuffer error:(NSError **) outError;
```

## Parameters

- `outputBuffer`: The output audio buffer.
- `inputBuffer`: The input audio buffer.
- `outError`: On input, a pointer to an error object. If an error occurs, the framework sets the pointer to an [NSError](../../foundation/nserror.md) object that describes the error. If you don’t want error information, pass in `nil`.

<a id="Discussion"></a>

## Discussion

The output buffer’s [frameCapacity](../avaudiopcmbuffer/framecapacity.md) value needs to be at least at large as the [frameLength](../avaudiopcmbuffer/framelength.md) value of the `inputBuffer`.

## See Also

### Converting Audio Formats

- [convertToBuffer:error:withInputFromBlock:](convert%28to_error_withinputfrom_%29.md): Performs a conversion between audio formats, if the system supports it.
- [AVAudioConverterInputBlock](../avaudioconverterinputblock.md): A block to get input data for conversion, as necessary.
- [AVAudioConverterInputStatus](../avaudioconverterinputstatus.md): An option that indicates the status of an audio converter input block.
- [AVAudioConverterOutputStatus](../avaudioconverteroutputstatus.md): An option that indicates the return status of an audio converter method.
