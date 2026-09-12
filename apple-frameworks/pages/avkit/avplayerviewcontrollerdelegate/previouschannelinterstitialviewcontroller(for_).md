> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller(for:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/previouschannelinterstitialviewcontroller(for:))

# previousChannelInterstitialViewController(for:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

## Declaration

```swift
optional func previousChannelInterstitialViewController(for playerViewController: AVPlayerViewController) -> UIViewController
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the user initiates, but hasn’t yet committed, a change in channel. The framework may call this method while a previous channel’s interstitial view is visible (on screen, or transitioning).

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController(\_:skipToNextChannel:)](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController(\_:skipToPreviousChannel:)](playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewController(for:)](nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.

# previousChannelInterstitialViewControllerForPlayerViewController: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

## Declaration

```objectivec
- (UIViewController *) previousChannelInterstitialViewControllerForPlayerViewController:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

<a id="Discussion"></a>

## Discussion

The framework calls this method when the user initiates, but hasn’t yet committed, a change in channel. The framework may call this method while a previous channel’s interstitial view is visible (on screen, or transitioning).

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController:skipToNextChannel:](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [playerViewController:skipToPreviousChannel:](playerviewcontroller%28__skiptopreviouschannel_%29.md): Tells the delegate when the user wants to skip to the previous channel.
- [nextChannelInterstitialViewControllerForPlayerViewController:](nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
