> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforpictureinpicturestopwithcompletionhandler:))

# playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, restoreUserInterfaceForPictureInPictureStopWithCompletionHandler completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func playerViewControllerRestoreUserInterfaceForPictureInPictureStop(_ playerViewController: AVPlayerViewController) async -> Bool
```

## Parameters

- `playerViewController`: The player view controller.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your app’s user interface.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method to reestablish your playback user interface when PiP ends. The framework calls this method no matter how PiP ends, whether it’s because the user ended playback, the user tapped the button to return ongoing video playback to your app, or the video finished playing on its own.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:)](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture(\_:)](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture(\_:)](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture(\_:)](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.

# playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:(void (^)(BOOL restored)) completionHandler;
```

## Parameters

- `playerViewController`: The player view controller.
- `completionHandler`: You must call the completion handler with a value of `true` to allow the system to finish restoring your app’s user interface.

## Mentioned In

- [Adopting Picture in Picture in a Standard Player](../adopting-picture-in-picture-in-a-standard-player.md)

<a id="Discussion"></a>

## Discussion

Implement this method to reestablish your playback user interface when PiP ends. The framework calls this method no matter how PiP ends, whether it’s because the user ended playback, the user tapped the button to return ongoing video playback to your app, or the video finished playing on its own.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:](playerviewcontrollershouldautomaticallydismissatpictureinpicturestart%28__%29.md): Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.
- [playerViewControllerWillStartPictureInPicture:](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture:](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture:](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
