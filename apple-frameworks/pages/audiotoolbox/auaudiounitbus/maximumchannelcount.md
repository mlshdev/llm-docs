> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/maximumchannelcount](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/maximumchannelcount)

# maximumChannelCount (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The maximum number of channels supported for this bus.

## Declaration

```swift
var maximumChannelCount: AUAudioChannelCount { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of [supportedChannelCounts](supportedchannelcounts.md) is set, then this value is derived from it. If setting a new value on this property makes the current bus format unsupported, then the value of [format](format.md) is set to `nil`.

The default value is `UINT_MAX`.

## See Also

### Audio Unit Implementations

- [init(format:)](init%28format_%29.md): Initializes a bus object with a specific format.
- [supportedChannelCounts](supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.

# maximumChannelCount (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The maximum number of channels supported for this bus.

## Declaration

```objectivec
@property (nonatomic) AUAudioChannelCount maximumChannelCount;
```

<a id="Discussion"></a>

## Discussion

If the value of [supportedChannelCounts](supportedchannelcounts.md) is set, then this value is derived from it. If setting a new value on this property makes the current bus format unsupported, then the value of [format](format.md) is set to `nil`.

The default value is `UINT_MAX`.

## See Also

### Audio Unit Implementations

- [initWithFormat:error:](init%28format_%29.md): Initializes a bus object with a specific format.
- [supportedChannelCounts](supportedchannelcounts.md): An array of numbers indicating the supported number of channels for this bus.
