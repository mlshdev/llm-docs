> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontroller/displaymode-swift.property](https://developer.apple.com/documentation/uikit/uisplitviewcontroller/displaymode-swift.property)

# displayMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current arrangement of the split view interface.

## Declaration

```swift
var displayMode: UISplitViewController.DisplayMode { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the arrangement of the child view controllers in a split view interface. The value in this property is never set to [UISplitViewController.DisplayMode.automatic](displaymode-swift.enum/automatic.md). To change the current display mode, change the value of the [preferredDisplayMode](preferreddisplaymode.md) property. If you just want to change which columns are shown, consider using [show(\_:)](show%28__%29.md) or [hide(\_:)](hide%28__%29.md) and the split view controller will determine how to update the display mode to display the desired columns.

When [isCollapsed](iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true), the value of this property is ignored. A collapsed split view interface contains only one view controller, so the display mode is superfluous.

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewController.DisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewController.DisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.

# displayMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The current arrangement of the split view interface.

## Declaration

```objectivec
@property (nonatomic, readonly) UISplitViewControllerDisplayMode displayMode;
```

<a id="Discussion"></a>

## Discussion

This property reflects the arrangement of the child view controllers in a split view interface. The value in this property is never set to [UISplitViewControllerDisplayModeAutomatic](displaymode-swift.enum/automatic.md). To change the current display mode, change the value of the [preferredDisplayMode](preferreddisplaymode.md) property. If you just want to change which columns are shown, consider using [showColumn:](show%28__%29.md) or [hideColumn:](hide%28__%29.md) and the split view controller will determine how to update the display mode to display the desired columns.

When [collapsed](iscollapsed.md) is [true](https://developer.apple.com/documentation/swift/true), the value of this property is ignored. A collapsed split view interface contains only one view controller, so the display mode is superfluous.

## See Also

### Managing the display mode

- [preferredDisplayMode](preferreddisplaymode.md): The preferred arrangement of the split view interface.
- [displayModeButtonItem](displaymodebuttonitem.md): A button that changes the display mode of the split view controller.
- [presentsWithGesture](presentswithgesture.md): Specifies whether a hidden view controller can be presented and dismissed using a swipe gesture.
- [showsSecondaryOnlyButton](showssecondaryonlybutton.md): Specifies whether the secondary view controller shows a button to toggle to and from the secondary-only display mode.
- [UISplitViewControllerDisplayMode](displaymode-swift.enum.md): Constants that describe the possible arrangements for a split view interface.
- [displayModeButtonVisibility](displaymodebuttonvisibility-swift.property.md): A setting that determines whether the display mode button is visible in the interface.
- [UISplitViewControllerDisplayModeButtonVisibility](displaymodebuttonvisibility-swift.enum.md): Constants that determine the visibility of the display mode button.
