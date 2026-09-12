> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioconverter/applicableencodebitrates](https://developer.apple.com/documentation/avfaudio/avaudioconverter/applicableencodebitrates)

# applicableEncodeBitRates (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of bit rates the framework applies during encoding according to the current formats and settings.

## Declaration

```swift
var applicableEncodeBitRates: [NSNumber]? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Bit Rate Properties

- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](bitrate.md): The bit rate, in bits per second.
- [bitRateStrategy](bitratestrategy.md): A key value constant the framework uses during encoding.

# applicableEncodeBitRates (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An array of bit rates the framework applies during encoding according to the current formats and settings.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<NSNumber *> * applicableEncodeBitRates;
```

<a id="Discussion"></a>

## Discussion

This property returns `nil` if you’re not encoding.

## See Also

### Getting Bit Rate Properties

- [availableEncodeBitRates](availableencodebitrates.md): An array of all bit rates the codec provides when encoding.
- [availableEncodeChannelLayoutTags](availableencodechannellayouttags.md): An array of all output channel layout tags the codec provides when encoding.
- [bitRate](bitrate.md): The bit rate, in bits per second.
- [bitRateStrategy](bitratestrategy.md): A key value constant the framework uses during encoding.
