> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/auaudiounitbus/supportedchannelcounts](https://developer.apple.com/documentation/audiotoolbox/auaudiounitbus/supportedchannelcounts)

# supportedChannelCounts (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array of numbers indicating the supported number of channels for this bus.

## Declaration

```swift
var supportedChannelCounts: [NSNumber]? { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, then any number less than or equal to the value of [maximumChannelCount](maximumchannelcount.md) is supported. If setting a new value on this property makes the current bus format unsupported, then the value of [format](format.md) is set to `nil`.

The default value is `nil`.

## See Also

### Audio Unit Implementations

- [init(format:)](init%28format_%29.md): Initializes a bus object with a specific format.
- [maximumChannelCount](maximumchannelcount.md): The maximum number of channels supported for this bus.

# supportedChannelCounts (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An array of numbers indicating the supported number of channels for this bus.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) NSArray<NSNumber *> * supportedChannelCounts;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `nil`, then any number less than or equal to the value of [maximumChannelCount](maximumchannelcount.md) is supported. If setting a new value on this property makes the current bus format unsupported, then the value of [format](format.md) is set to `nil`.

The default value is `nil`.

## See Also

### Audio Unit Implementations

- [initWithFormat:error:](init%28format_%29.md): Initializes a bus object with a specific format.
- [maximumChannelCount](maximumchannelcount.md): The maximum number of channels supported for this bus.
