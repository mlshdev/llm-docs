> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/targetdisplaymodeforaction(in:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/targetdisplaymodeforaction(in:))

# targetDisplayModeForAction(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the display mode to apply when a split view controller action occurs.

## Declaration

```swift
optional func targetDisplayModeForAction(in svc: UISplitViewController) -> UISplitViewController.DisplayMode
```

## Parameters

- `svc`: The split view controller whose action may be triggered. Use this object to obtain the current display mode and configuration of the split view interface.

<a id="return-value"></a>

## Return Value

The display mode to apply to the split view controller when the user performs specific actions.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method to determine which display mode to apply to itself in response to user-initiated actions. The split view controller has a built-in gesture recognizer that changes the current display mode. It also provides a bar button item from its [displayModeButtonItem](../uisplitviewcontroller/displaymodebuttonitem.md) property that changes the display mode. The gesture recognizer is enabled using the [presentsWithGesture](../uisplitviewcontroller/presentswithgesture.md) property of the split view controller. Apps must incorporate the bar button item into their interface.

Implement this method if you want to specify which display mode to apply to the split view controller in response to the user actions. The split view controller calls this method to obtain an updated value for the gesture and bar button item. If you do not implement this method or if your method returns [UISplitViewController.DisplayMode.automatic](../uisplitviewcontroller/displaymode-swift.enum/automatic.md), the split view controller applies its own heuristics to determine which mode to apply when the next action is triggered. You cannot specify different display modes for the gesture and bar button item.

## See Also

### Responding to display mode changes

- [splitViewController(\_:willChangeTo:)](splitviewcontroller%28__willchangeto_%29.md): Tells the delegate that the display mode for the split view controller is about to change.

# targetDisplayModeForActionInSplitViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks the delegate to provide the display mode to apply when a split view controller action occurs.

## Declaration

```objectivec
- (UISplitViewControllerDisplayMode) targetDisplayModeForActionInSplitViewController:(UISplitViewController *) svc;
```

## Parameters

- `svc`: The split view controller whose action may be triggered. Use this object to obtain the current display mode and configuration of the split view interface.

<a id="return-value"></a>

## Return Value

The display mode to apply to the split view controller when the user performs specific actions.

<a id="Discussion"></a>

## Discussion

This delegate method only applies to classic split view interfaces. For more information, see [Split view styles](../uisplitviewcontroller.md#Split-view-styles).

The split view controller calls this method to determine which display mode to apply to itself in response to user-initiated actions. The split view controller has a built-in gesture recognizer that changes the current display mode. It also provides a bar button item from its [displayModeButtonItem](../uisplitviewcontroller/displaymodebuttonitem.md) property that changes the display mode. The gesture recognizer is enabled using the [presentsWithGesture](../uisplitviewcontroller/presentswithgesture.md) property of the split view controller. Apps must incorporate the bar button item into their interface.

Implement this method if you want to specify which display mode to apply to the split view controller in response to the user actions. The split view controller calls this method to obtain an updated value for the gesture and bar button item. If you do not implement this method or if your method returns [UISplitViewControllerDisplayModeAutomatic](../uisplitviewcontroller/displaymode-swift.enum/automatic.md), the split view controller applies its own heuristics to determine which mode to apply when the next action is triggered. You cannot specify different display modes for the gesture and bar button item.

## See Also

### Responding to display mode changes

- [splitViewController:willChangeToDisplayMode:](splitviewcontroller%28__willchangeto_%29.md): Tells the delegate that the display mode for the split view controller is about to change.
