> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart(_:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontrollershouldautomaticallydismissatpictureinpicturestart(_:))

# playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.

## Declaration

```swift
optional func playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart(_ playerViewController: AVPlayerViewController) -> Bool
```

## Parameters

- `playerViewController`: The player view controller.

<a id="return-value"></a>

## Return Value

`true` to indicate that the player view controller automatically dismisses itself; otherwise `false`.

<a id="Discussion"></a>

## Discussion

Implement this method and return `false` to prevent the player view controller from automatically dismissing when Picture in Picture starts.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerWillStartPictureInPicture(\_:)](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture(\_:)](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController(\_:failedToStartPictureInPictureWithError:)](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture(\_:)](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture(\_:)](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController(\_:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.

# playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate whether the player view controller automatically dismisses itself when Picture in Picture starts.

## Declaration

```objectivec
- (BOOL) playerViewControllerShouldAutomaticallyDismissAtPictureInPictureStart:(AVPlayerViewController *) playerViewController;
```

## Parameters

- `playerViewController`: The player view controller.

<a id="return-value"></a>

## Return Value

`true` to indicate that the player view controller automatically dismisses itself; otherwise `false`.

<a id="Discussion"></a>

## Discussion

Implement this method and return `false` to prevent the player view controller from automatically dismissing when Picture in Picture starts.

## See Also

### Responding to Picture in Picture Life Cycle Events

- [playerViewControllerWillStartPictureInPicture:](playerviewcontrollerwillstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to start.
- [playerViewControllerDidStartPictureInPicture:](playerviewcontrollerdidstartpictureinpicture%28__%29.md): Tells the delegate when Picture in Picture starts.
- [playerViewController:failedToStartPictureInPictureWithError:](playerviewcontroller%28__failedtostartpictureinpicturewitherror_%29.md): Tells the delegate when Picture in Picture fails to start.
- [playerViewControllerWillStopPictureInPicture:](playerviewcontrollerwillstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture is about to stop.
- [playerViewControllerDidStopPictureInPicture:](playerviewcontrollerdidstoppictureinpicture%28__%29.md): Tells the delegate when Picture in Picture stops.
- [playerViewController:restoreUserInterfaceForPictureInPictureStopWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforpictureinpicturestopwithcompletionhandler_%29.md): Tells the delegate when Picture in Picture is about to stop so you can restore your app’s user interface.
