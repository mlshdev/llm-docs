> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpchangeplaybackratecommandevent/playbackrate](https://developer.apple.com/documentation/mediaplayer/mpchangeplaybackratecommandevent/playbackrate)

# playbackRate (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The chosen playback rate for the command event.

## Declaration

```swift
var playbackRate: Float { get }
```

<a id="Discussion"></a>

## Discussion

The `playbackRate` property is equal to a value stored in the [supportedPlaybackRates](../mpchangeplaybackratecommand/supportedplaybackrates.md) array.

# playbackRate (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The chosen playback rate for the command event.

## Declaration

```objectivec
@property (nonatomic, readonly) float playbackRate;
```

<a id="Discussion"></a>

## Discussion

The `playbackRate` property is equal to a value stored in the [supportedPlaybackRates](../mpchangeplaybackratecommand/supportedplaybackrates.md) array.
