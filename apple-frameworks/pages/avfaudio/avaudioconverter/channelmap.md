> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/channelmap](https://developer.apple.com/documentation/avfaudio/avaudioconverter/channelmap)

# channelMap (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of integers that indicates which input to derive each output from.

## Declaration

```swift
var channelMap: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

The array size equals the number of output channels. Each element’s value is the input channel number, starting with zero, that the framework copies to that output.

A negative value means that the output channel doesn’t have a source and is silent.

Setting a channel map overrides channel mapping due to any channel layouts in the input and output formats that you supply.

## See Also

### Getting Audio Converter Properties

- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.

# channelMap (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of integers that indicates which input to derive each output from.

## Declaration

```objectivec
@property (nonatomic, retain) NSArray<NSNumber *> * channelMap;
```

<a id="Discussion"></a>

## Discussion

The array size equals the number of output channels. Each element’s value is the input channel number, starting with zero, that the framework copies to that output.

A negative value means that the output channel doesn’t have a source and is silent.

Setting a channel map overrides channel mapping due to any channel layouts in the input and output formats that you supply.

## See Also

### Getting Audio Converter Properties

- [dither](dither.md): A Boolean value that indicates whether dither is on.
- [downmix](downmix.md): A Boolean value that indicates whether the framework mixes the channels instead of remapping.
- [inputFormat](inputformat.md): The format of the input audio stream.
- [outputFormat](outputformat.md): The format of the output audio stream.
- [magicCookie](magiccookie.md): An object that contains metadata for encoders and decoders.
- [maximumOutputPacketSize](maximumoutputpacketsize.md): The maximum size of an output packet, in bytes.
