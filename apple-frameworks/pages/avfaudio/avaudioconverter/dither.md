> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/dither](https://developer.apple.com/documentation/avfaudio/avaudioconverter/dither)

# dither (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether dither is on.

## Declaration

```swift
var dither: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This property defaults to `false`. When `true`, the framework determines whether dithering makes sense for the formats and settings.

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

# dither (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether dither is on.

## Declaration

```objectivec
@property (nonatomic) BOOL dither;
```

<a id="Discussion"></a>

## Discussion

This property defaults to `false`. When `true`, the framework determines whether dithering makes sense for the formats and settings.

## See Also

### Getting Audio Converter Properties

- [channelMap](channelmap.md): An array of integers that indicates which input to derive each output from.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.
