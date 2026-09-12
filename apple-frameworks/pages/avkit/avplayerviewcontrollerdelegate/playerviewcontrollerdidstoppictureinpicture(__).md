> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture(_:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerdidstoppictureinpicture(_:))

# playerViewControllerDidStopPictureInPicture(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture stops.

## Declaration

```swift
optional func playerViewControllerDidStopPictureInPicture(_ playerViewController: AVPlayerViewController)
```

## Parameters

- `playerViewController`: The player view controller.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Don’t restore your app’s user interface in your implementation of this method. Instead, do it in the [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md) method.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture(\_:)](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

# playerViewControllerDidStopPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture stops.

## Declaration

```objectivec
- (void) playerViewControllerDidStopPictureInPicture:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Don’t restore your app’s user interface in your implementation of this method. Instead, do it in the [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md) method.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture:](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.
