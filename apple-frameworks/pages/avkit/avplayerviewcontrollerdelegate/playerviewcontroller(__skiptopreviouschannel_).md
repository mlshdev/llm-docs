> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:skiptopreviouschannel:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:skiptopreviouschannel:))

# playerViewController(\_:skipToPreviousChannel:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when the user wants to skip to the previous channel.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, skipToPreviousChannel completion: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func playerViewControllerSkipToPreviousChannel(_ playerViewController: AVPlayerViewController) async -> Bool
```

## Parameters

- `playerViewController`: The player view controller.
- `completion`: A completion callback to invoke to dismiss the channel’s interstitial view.

<a id="Discussion"></a>

## Discussion

Each call to this method should advance one channel, relative to the previous request, even if the prior request hasn’t yet completed. Adopt this method and replace the current player item with one that reflects the previous channel’s content, and call the completion block to dismiss the channel’s interstitial view.

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController(\_:skipToNextChannel:)](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [nextChannelInterstitialViewController(for:)](nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewController(for:)](previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.

# playerViewController:skipToPreviousChannel: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Tells the delegate when the user wants to skip to the previous channel.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController skipToPreviousChannel:(void (^)(BOOL success)) completion;
```

## Parameters

- `playerViewController`: The player view controller.
- `completion`: A completion callback to invoke to dismiss the channel’s interstitial view.

<a id="Discussion"></a>

## Discussion

Each call to this method should advance one channel, relative to the previous request, even if the prior request hasn’t yet completed. Adopt this method and replace the current player item with one that reflects the previous channel’s content, and call the completion block to dismiss the channel’s interstitial view.

> **Important**

>  Only live video streams support channel skipping. This feature isn’t supported for VOD streams or local media.

## See Also

### Responding to Channel Changes

- [playerViewController:skipToNextChannel:](playerviewcontroller%28__skiptonextchannel_%29.md): Tells the delegate when the user wants to skip to the next channel.
- [nextChannelInterstitialViewControllerForPlayerViewController:](nextchannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the next channel’s interstitial view.
- [previousChannelInterstitialViewControllerForPlayerViewController:](previouschannelinterstitialviewcontroller%28for_%29.md): Asks the delegate for a view controller that describes the layout of the previous channel’s interstitial view.
