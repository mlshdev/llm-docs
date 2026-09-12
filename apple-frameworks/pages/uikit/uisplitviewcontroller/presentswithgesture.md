> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/presentswithgesture](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/presentswithgesture)

# presentsWithGesture (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS

Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.

## Declaration

```swift
var presentsWithGesture: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the split view controller installs a gesture recognizer for changing the current display mode. In a column-style split view interface, the gesture is interactive.

In a classic split view interface, the gesture recognizer applies the display mode returned by the delegate’s [targetDisplayModeForAction(in:)](../uisplitviewcontrollerdelegate/targetdisplaymodeforaction%28in_%29.md) method. If that method returns the [UISplitViewController.DisplayMode.automatic](displaymode-swift.enum/automatic.md) mode, the split view controller applies the most appropriate display mode given its current configuration and size class.

When this property is [false](https://developer.apple.com/documentation/swift/false), the split view controller doesn’t install a gesture recognizer for changing the display mode. The split view controller also doesn’t display a button to change the display mode.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewController.DisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewController.DisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.

# presentsWithGesture (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.1+ · iPadOS 5.1+ · Mac Catalyst 13.1+ · tvOS

Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.

## Declaration

```objectivec
@property (nonatomic) BOOL presentsWithGesture;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), the split view controller installs a gesture recognizer for changing the current display mode. In a column-style split view interface, the gesture is interactive.

In a classic split view interface, the gesture recognizer applies the display mode returned by the delegate’s [targetDisplayModeForActionInSplitViewController:](../uisplitviewcontrollerdelegate/targetdisplaymodeforaction%28in_%29.md) method. If that method returns the [UISplitViewControllerDisplayModeAutomatic](displaymode-swift.enum/automatic.md) mode, the split view controller applies the most appropriate display mode given its current configuration and size class.

When this property is [false](https://developer.apple.com/documentation/swift/false), the split view controller doesn’t install a gesture recognizer for changing the display mode. The split view controller also doesn’t display a button to change the display mode.

The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayMode](displaymode-swift.property.md): The current arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewControllerDisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewControllerDisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.
