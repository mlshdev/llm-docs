> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didpresent:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:didpresent:))

# playerViewController(\_:didPresent:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when the player view controller finishes playing a range of interstitial content.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, didPresent interstitial: AVInterstitialTimeRange)
```

## Parameters

- `playerViewController`: The player view controller.
- `interstitial`: The time range of interstitial content that’s finished playback.

<a id="Discussion"></a>

## Discussion

Interstitial content is material that’s unrelated to the main content and may have special playback options or requirements. For example, implement this method to record when a user begins viewing an advertisement, or to enable the player view controller’s [requiresLinearPlayback](../avplayerviewcontroller/requireslinearplayback.md) property to prevent skipping mandatory legal notices.

Use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property to identify the time ranges of interstitial content in the media timeline.

## See Also

### Responding to Interstitial Content Playback Events

- [playerViewController(\_:willPresent:)](playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.

# playerViewController:didPresentInterstitialTimeRange: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · tvOS 9.0+ · visionOS 1.0+

Tells the delegate when the player view controller finishes playing a range of interstitial content.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController didPresentInterstitialTimeRange:(AVInterstitialTimeRange *) interstitial;
```

## Parameters

- `playerViewController`: The player view controller.
- `interstitial`: The time range of interstitial content that’s finished playback.

<a id="Discussion"></a>

## Discussion

Interstitial content is material that’s unrelated to the main content and may have special playback options or requirements. For example, implement this method to record when a user begins viewing an advertisement, or to enable the player view controller’s [requiresLinearPlayback](../avplayerviewcontroller/requireslinearplayback.md) property to prevent skipping mandatory legal notices.

Use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property to identify the time ranges of interstitial content in the media timeline.

## See Also

### Responding to Interstitial Content Playback Events

- [playerViewController:willPresentInterstitialTimeRange:](playerviewcontroller%28__willpresent_%29.md): Tells the delegate when the player view controller is about to start playing a range of interstitial content.
