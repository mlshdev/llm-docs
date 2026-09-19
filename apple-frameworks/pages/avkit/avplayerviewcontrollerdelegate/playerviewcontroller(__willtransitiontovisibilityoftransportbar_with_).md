> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avplayerviewcontrollerdelegate/playerviewcontroller(_:willtransitiontovisibilityoftransportbar:with:)

# playerViewController(\_:willTransitionToVisibilityOfTransportBar:with:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the transport bar’s visibility is about to change.

## Declaration

```swift
optional func playerViewController(_ playerViewController: AVPlayerViewController, willTransitionToVisibilityOfTransportBar visible: Bool, with coordinator: any AVPlayerViewControllerAnimationCoordinator)
```

## Parameters

- `playerViewController`: The player view controller.
- `visible`: The transport bar’s new visibility.
- `coordinator`: The animation coordinator to use to synchronize animations with the transport bar visibility.

## See Also

### Responding to transport bar changes

- [AVPlayerViewControllerAnimationCoordinator](../avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.

# playerViewController:willTransitionToVisibilityOfTransportBar:withAnimationCoordinator: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** tvOS 11.0+

Tells the delegate when the transport bar’s visibility is about to change.

## Declaration

```objectivec
- (void) playerViewController:(AVPlayerViewController *) playerViewController willTransitionToVisibilityOfTransportBar:(BOOL) visible withAnimationCoordinator:(id<AVPlayerViewControllerAnimationCoordinator>) coordinator;
```

## Parameters

- `playerViewController`: The player view controller.
- `visible`: The transport bar’s new visibility.
- `coordinator`: The animation coordinator to use to synchronize animations with the transport bar visibility.

## See Also

### Responding to transport bar changes

- [AVPlayerViewControllerAnimationCoordinator](../avplayerviewcontrolleranimationcoordinator.md): A protocol that defines the methods to implement to synchronize animations with playback controls’ visibility animation.
