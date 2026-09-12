> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/inputformat](https://developer.apple.com/documentation/avfaudio/avaudioconverter/inputformat)

# inputFormat (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format of the input audio stream.

## Declaration

```swift
var inputFormat: AVAudioFormat { get }
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

# inputFormat (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The format of the input audio stream.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioFormat * inputFormat;
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.
