> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerplaybackcoordinatordelegate/playbackcoordinator(_:interstitialtimerangesfor:)](https://developer.apple.com/documentation/avfoundation/avplayerplaybackcoordinatordelegate/playbackcoordinator(_:interstitialtimerangesfor:))

# playbackCoordinator(\_:interstitialTimeRangesFor:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Asks the delegate for time ranges in a player item that don’t correspond to the primary content.

## Declaration

```swift
optional func playbackCoordinator(_ coordinator: AVPlayerPlaybackCoordinator, interstitialTimeRangesFor playerItem: AVPlayerItem) -> [NSValue]
```

## Parameters

- `coordinator`: The object coordinating playback.
- `playerItem`: The player item for which to retrieve interstitial time ranges.

<a id="return-value"></a>

## Return Value

An array of [NSValue](../../foundation/nsvalue.md) objects that contain the interstitial time ranges.

<a id="Discussion"></a>

## Discussion

Implementing this method enables the coordinator to synchronize playback between participants that have different interstitials stitched into the primary content timeline.

If you don’t implement this method, the coordinator assumes that the entire item corresponds to the primary content.

# playbackCoordinator:interstitialTimeRangesForPlayerItem: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+

Asks the delegate for time ranges in a player item that don’t correspond to the primary content.

## Declaration

```objectivec
- (NSArray<NSValue *> *) playbackCoordinator:(AVPlayerPlaybackCoordinator *) coordinator interstitialTimeRangesForPlayerItem:(AVPlayerItem *) playerItem;
```

## Parameters

- `coordinator`: The object coordinating playback.
- `playerItem`: The player item for which to retrieve interstitial time ranges.

<a id="return-value"></a>

## Return Value

An array of [NSValue](../../foundation/nsvalue.md) objects that contain the interstitial time ranges.

<a id="Discussion"></a>

## Discussion

Implementing this method enables the coordinator to synchronize playback between participants that have different interstitials stitched into the primary content timeline.

If you don’t implement this method, the coordinator assumes that the entire item corresponds to the primary content.
