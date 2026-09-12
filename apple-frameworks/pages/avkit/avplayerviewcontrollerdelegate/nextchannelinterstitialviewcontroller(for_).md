> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller(for:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/nextchannelinterstitialviewcontroller(for:))

# nextChannelInterstitialViewController(for:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.

## Declaration

```swift
optional func nextChannelInterstitialViewController(for playerViewController: AVPlayerViewController) -> UIViewController
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the user initiates, but hasn’t yet committed, a change in channel. The framework may calls this method while a previous channel interstice is visible (on screen, or transitioning).

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController(\_:skipToNextChannel:)](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController(\_:skipToPreviousChannel:)](playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [previousChannelInterstitialViewController(for:)](previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

# nextChannelInterstitialViewControllerForPlayerViewController: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.

## Declaration

```objectivec
- (UIViewController *) nextChannelInterstitialViewControllerForPlayerViewController:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the user initiates, but hasn’t yet committed, a change in channel. The framework may calls this method while a previous channel interstice is visible (on screen, or transitioning).

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController:skipToNextChannel:](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController:skipToPreviousChannel:](playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [previousChannelInterstitialViewControllerForPlayerViewController:](previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.
