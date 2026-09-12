> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture(_:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollerwillstoppictureinpicture(_:))

# playerViewControllerWillStopPictureInPicture(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture is about to stop.

## Declaration

```swift
optional func playerViewControllerWillStopPictureInPicture(_ playerViewController: AVPlayerViewController)
```

## Parameters

- `playerViewController`: The player view controller to which you’ve assigned the delegate.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method to update the state of your user interface, like presenting or enabling playback controls.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerDidStopPictureInPicture(\_:)](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

# playerViewControllerWillStopPictureInPicture: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture is about to stop.

## Declaration

```objectivec
- (void) playerViewControllerWillStopPictureInPicture:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller to which you’ve assigned the delegate.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method to update the state of your user interface, like presenting or enabling playback controls.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerDidStopPictureInPicture:](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.
