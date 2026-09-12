> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:failedtostartpictureinpicturewitherror:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:failedtostartpictureinpicturewitherror:))

# playerViewController(\_:failedToStartPictureInPictureWithError:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture fails to start.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, failedToStartPictureInPictureWithError error: any Error)
```

## Parameters

- `playerViewController`: The player view controller.
- `error`: An error object that describes the failure.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewControllerWillStopPictureInPicture(\_:)](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture(\_:)](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

# playerViewController:failedToStartPictureInPictureWithError: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture fails to start.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController failedToStartPictureInPictureWithError:(NSError *) error;
```

## Parameters

- `playerViewController`: The player view controller.
- `error`: An error object that describes the failure.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewControllerWillStopPictureInPicture:](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture:](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.
