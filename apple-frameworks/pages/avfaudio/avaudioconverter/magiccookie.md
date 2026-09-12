> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/magiccookie](https://developer.apple.com/documentation/avfaudio/avaudioconverter/magiccookie)

# magicCookie (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that contains metadata for encoders and decoders.

## Declaration

```swift
var magicCookie: Data? { get set }
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

# magicCookie (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that contains metadata for encoders and decoders.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSData * magicCookie;
```

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.
