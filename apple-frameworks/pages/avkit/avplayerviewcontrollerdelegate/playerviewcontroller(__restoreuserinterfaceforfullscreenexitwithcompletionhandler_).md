> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:)](https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:restoreuserinterfaceforfullscreenexitwithcompletionhandler:))

# playerViewController(\_:restoreUserInterfaceForFullScreenExitWithCompletionHandler:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, restoreUserInterfaceForFullScreenExitWithCompletionHandler completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
optional func playerViewControllerRestoreUserInterfaceForFullScreenExit(_ playerViewController: AVPlayerViewController) async -> Bool
```

## Parameters

- `playerViewController`: The player view controller.
- `completionHandler`: The completion handler to call for the system to finish restoring your user interface. You must invoke this callback with a value of `true`.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController(\_:willBeginFullScreenPresentationWithAnimationCoordinator:)](playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController(\_:willEndFullScreenPresentationWithAnimationCoordinator:)](playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.

# playerViewController:restoreUserInterfaceForFullScreenExitWithCompletionHandler: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

Tells the delegate to restore the app’s user interface after returning from a full-screen presentation.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController restoreUserInterfaceForFullScreenExitWithCompletionHandler:(void (^)(BOOL restored)) completionHandler;
```

## Parameters

- `playerViewController`: The player view controller.
- `completionHandler`: The completion handler to call for the system to finish restoring your user interface. You must invoke this callback with a value of `true`.

## See Also

### Responding to Full-Screen Presentations

- [playerViewController:willBeginFullScreenPresentationWithAnimationCoordinator:](playerviewcontroller%28__willbeginfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to start full-screen display.
- [playerViewController:willEndFullScreenPresentationWithAnimationCoordinator:](playerviewcontroller%28__willendfullscreenpresentationwithanimationcoordinator_%29.md): Tells the delegate when the player view controller is about to end full-screen display.
