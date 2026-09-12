> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/maximumoutputpacketsize](https://developer.apple.com/documentation/avfaudio/avaudioconverter/maximumoutputpacketsize)

# maximumOutputPacketSize (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum size of an output packet, in bytes.

## Declaration

```swift
var maximumOutputPacketSize: Int { get }
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.

# maximumOutputPacketSize (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The maximum size of an output packet, in bytes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger maximumOutputPacketSize;
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
