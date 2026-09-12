> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeplaybackratecommand/supportedplaybackrates](https://developer.apple.com/documentation/mediaplayer/mpchangeplaybackratecommand/supportedplaybackrates)

# supportedPlaybackRates (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The supported playback rates for a media item.

## Declaration

```swift
var supportedPlaybackRates: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

Contains an array of [NSNumber](../../foundation/nsnumber.md) objects. Each object is of type `float` and designates a supported playback rate. For example, a value of `2.0` would indicate the media item plays at double speed. Negative values are not supported.

# supportedPlaybackRates (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The supported playback rates for a media item.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * supportedPlaybackRates;
```

<a id="Discussion"></a>

## Discussion

Contains an array of [NSNumber](../../foundation/nsnumber.md) objects. Each object is of type `float` and designates a supported playback rate. For example, a value of `2.0` would indicate the media item plays at double speed. Negative values are not supported.
