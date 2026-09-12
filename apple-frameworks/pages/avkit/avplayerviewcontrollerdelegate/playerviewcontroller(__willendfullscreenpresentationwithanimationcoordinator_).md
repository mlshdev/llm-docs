> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willendfullscreenpresentationwithanimationcoordinator:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willendfullscreenpresentationwithanimationcoordinator:))

# playerViewController(\_:willEndFullScreenPresentationWithAnimationCoordinator:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the player view controller is about to end full-screen display.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willEndFullScreenPresentationWithAnimationCoordinator coordinator: any UIViewControllerTransitionCoordinator)
```

## Parameters

- `playerViewController`: The player view controller.
- `coordinator`: The transition coordinator to use when coordinating animations.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController(\_:willBeginFullScreenPresentationWithAnimationCoordinator:)](playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:)](playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

# playerViewController:willEndFullScreenPresentationWithAnimationCoordinator: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the player view controller is about to end full-screen display.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController willEndFullScreenPresentationWithAnimationCoordinator:(id<UIViewControllerTransitionCoordinator>) coordinator;
```

## Parameters

- `playerViewController`: The player view controller.
- `coordinator`: The transition coordinator to use when coordinating animations.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController:willBeginFullScreenPresentationWithAnimationCoordinator:](playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController:restoreUserInterfaceForFullScreenExitWithCompletionHandler:](playerviewcontroller%28__restoreuserinterfaceforfullscreenexitwithcompletionhandler_%29.md): Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.
