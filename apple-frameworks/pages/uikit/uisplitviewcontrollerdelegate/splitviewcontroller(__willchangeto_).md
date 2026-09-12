> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willchangeto:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willchangeto:))

# splitViewController(\_:willChangeTo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the display mode for the split view controller is about to change.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, willChangeTo displayMode: UISplitViewController.DisplayMode)
```

## Parameters

- `svc`: The split view controller whose display mode is changing.
- `displayMode`: The new display mode that is about to be applied to the split view controller.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method when its display mode is about to change. Because changing the display mode usually means hiding or showing one of the child view controllers, you can implement this method and use it to add or remove the controls for showing the primary view controller.

## See Also

### Responding to display mode changes

- [targetDisplayModeForAction(in:)](targetdisplaymodeforaction%28in_%29.md): Asks the delegate to provide the display mode to apply when a split view controller action occurs.

# splitViewController:willChangeToDisplayMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Tells the delegate that the display mode for the split view controller is about to change.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc willChangeToDisplayMode:(UISplitViewControllerDisplayMode) displayMode;
```

## Parameters

- `svc`: The split view controller whose display mode is changing.
- `displayMode`: The new display mode that is about to be applied to the split view controller.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method when its display mode is about to change. Because changing the display mode usually means hiding or showing one of the child view controllers, you can implement this method and use it to add or remove the controls for showing the primary view controller.

## See Also

### Responding to display mode changes

- [targetDisplayModeForActionInSplitViewController:](targetdisplaymodeforaction%28in_%29.md): Asks the delegate to provide the display mode to apply when a split view controller action occurs.
