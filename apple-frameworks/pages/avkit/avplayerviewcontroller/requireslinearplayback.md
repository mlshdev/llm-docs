> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontroller/requireslinearplayback](https://developer.apple.com/documentation/avkit/avplayerviewcontroller/requireslinearplayback)

# requiresLinearPlayback (Swift)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that determines whether the player allows someone to skip media content.

## Declaration

```swift
var requiresLinearPlayback: Bool { get set }
```

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)
- [Working with Interstitial Content](../working-with-interstitial-content.md)

<a id="Discussion"></a>

## Discussion

If this value is `false` (the default), the controller’s user interface allows a user to fast-forward, scrub, or skip ahead to content later in the player’s presentation. To prevent the user from skipping content—for example, while presenting a legal notice or other mandatory interstitial content—set this property’s value to `true`.

To track when the player is presenting content for which you might require linear playback, use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property of the view controller’s player item to define the time ranges of the interstitial content. The view controller then sends [playerViewController(\_:willPresent:)](../avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md) and [playerViewController(\_:didPresent:)](../avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md) messages to its [delegate](delegate.md) object when the content is playing. Implement these methods to enable or disable the [requiresLinearPlayback](requireslinearplayback.md) property as needed.

# requiresLinearPlayback (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that determines whether the player allows someone to skip media content.

## Declaration

```objectivec
@property (nonatomic) BOOL requiresLinearPlayback;
```

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)
- [Working with Interstitial Content](../working-with-interstitial-content.md)

<a id="Discussion"></a>

## Discussion

If this value is `false` (the default), the controller’s user interface allows a user to fast-forward, scrub, or skip ahead to content later in the player’s presentation. To prevent the user from skipping content—for example, while presenting a legal notice or other mandatory interstitial content—set this property’s value to `true`.

To track when the player is presenting content for which you might require linear playback, use the [interstitialTimeRanges](../../avfoundation/avplayeritem/interstitialtimeranges.md) property of the view controller’s player item to define the time ranges of the interstitial content. The view controller then sends [playerViewController:willPresentInterstitialTimeRange:](../avplayerviewcontrollerdelegate/playerviewcontroller%28__willpresent_%29.md) and [playerViewController:didPresentInterstitialTimeRange:](../avplayerviewcontrollerdelegate/playerviewcontroller%28__didpresent_%29.md) messages to its [delegate](delegate.md) object when the content is playing. Implement these methods to enable or disable the [requiresLinearPlayback](requireslinearplayback.md) property as needed.
