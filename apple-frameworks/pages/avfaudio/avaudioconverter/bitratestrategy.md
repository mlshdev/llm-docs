> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/bitratestrategy](https://developer.apple.com/documentation/avfaudio/avaudioconverter/bitratestrategy)

# bitRateStrategy (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A key value constant the framework uses during encoding.

## Declaration

```swift
var bitRateStrategy: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding. For information about possible values, see [AVEncoderBitRateStrategyKey](../avencoderbitratestrategykey.md).

## See Also

### Getting Bit Rate Properties

- [applicableEncodeBitRates](applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](bitrate.md): The bit rate, in bits per second.

# bitRateStrategy (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A key value constant the framework uses during encoding.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSString * bitRateStrategy;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding. For information about possible values, see [AVEncoderBitRateStrategyKey](../avencoderbitratestrategykey.md).

## See Also

### Getting Bit Rate Properties

- [applicableEncodeBitRates](applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](bitrate.md): The bit rate, in bits per second.
