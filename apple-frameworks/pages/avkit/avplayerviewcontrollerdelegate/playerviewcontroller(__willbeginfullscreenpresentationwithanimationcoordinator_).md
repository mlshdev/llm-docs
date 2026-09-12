> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willbeginfullscreenpresentationwithanimationcoordinator:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willbeginfullscreenpresentationwithanimationcoordinator:))

# playerViewController(\_:willBeginFullScreenPresentationWithAnimationCoordinator:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the player view controller is about to start full-screen display.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willBeginFullScreenPresentationWithAnimationCoordinator coordinator: any UIViewControllerTransitionCoordinator)
```

## Parameters

- `playerViewController`: The player view controller.
- `coordinator`: The transition coordinator to use when coordinating animations.

<a id="Discussion"></a>

## Discussion

This method isn’t called if you embed the player view controller as a child of the presented view controller.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController(\_:willEndFullScreenPresentationWithAnimationCoordinator:)](playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

# playerViewController:willBeginFullScreenPresentationWithAnimationCoordinator: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the player view controller is about to start full-screen display.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController willBeginFullScreenPresentationWithAnimationCoordinator:(id<UIViewControllerTransitionCoordinator>) coordinator;
```

## Parameters

- `playerViewController`: The player view controller.
- `coordinator`: The transition coordinator to use when coordinating animations.

<a id="Discussion"></a>

## Discussion

This method isn’t called if you embed the player view controller as a child of the presented view controller.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController:willEndFullScreenPresentationWithAnimationCoordinator:](playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
- [playerViewController:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.
