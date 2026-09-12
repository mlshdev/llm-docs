> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/bitrate](https://developer.apple.com/documentation/avfaudio/avaudioconverter/bitrate)

# bitRate (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The bit rate, in bits per second.

## Declaration

```swift
var bitRate: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This value only applies when encoding.

## See Also

### Getting Bit Rate Properties

- [applicableEncodeBitRates](applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRateStrategy](bitratestrategy.md): A key value constant the framework uses during encoding.

# bitRate (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The bit rate, in bits per second.

## Declaration

```objectivec
@property (nonatomic) NSInteger bitRate;
```

<a id="Discussion"></a>

## Discussion

This value only applies when encoding.

## See Also

### Getting Bit Rate Properties

- [applicableEncodeBitRates](applicableencodebitrates.md): An array of bit rates the framework applies during encoding according to the current formats and settings.
- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRateStrategy](bitratestrategy.md): A key value constant the framework uses during encoding.
