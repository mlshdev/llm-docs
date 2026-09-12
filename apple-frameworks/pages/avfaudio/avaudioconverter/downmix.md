> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/downmix](https://developer.apple.com/documentation/avfaudio/avaudioconverter/downmix)

# downmix (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the framework mixes the channels instead of remapping.

## Declaration

```swift
var downmix: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to `false`, indicating that the framework remaps the channels. When `true`, and channel remapping is necessary, the framework mixes the channels.

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

# downmix (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the framework mixes the channels instead of remapping.

## Declaration

```objectivec
@property (nonatomic) BOOL downmix;
```

<a id="Discussion"></a>

## Discussion

This property defaults to `false`, indicating that the framework remaps the channels. When `true`, and channel remapping is necessary, the framework mixes the channels.

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.
