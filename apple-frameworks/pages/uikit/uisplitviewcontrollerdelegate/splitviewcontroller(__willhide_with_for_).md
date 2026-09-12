> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willhide:with:for:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:willhide:with:for:))

# splitViewController(\_:willHide:with:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the specified view controller is about to be hidden.

> Implement the [splitViewController(\_:willChangeTo:)](splitviewcontroller%28__willchangeto_%29.md) method instead.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, willHide aViewController: UIViewController, with barButtonItem: UIBarButtonItem, for pc: UIPopoverController)
```

## Parameters

- `svc`: The split view controller that owns the specified view controller.
- `aViewController`: The view controller being hidden.
- `barButtonItem`: A button you can add to your toolbar.
- `pc`: The popover controller that uses taps in `barButtonItem` to display the specified view controller.

<a id="Discussion"></a>

## Discussion

When the split view controller rotates from a landscape to portrait orientation, it typically hides one of its view controllers. When that happens, it calls this method to coordinate the addition of a button to the toolbar (or navigation bar) of the remaining custom view controller. If you want the soon-to-be hidden view controller to be displayed in a popover, you must implement this method and use it to add the specified button to your interface.

## See Also

### Deprecated methods

- [splitViewController(\_:shouldHide:in:)](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController(\_:willShow:invalidating:)](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController(\_:popoverController:willPresent:)](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.

# splitViewController:willHideViewController:withBarButtonItem:forPopoverController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the specified view controller is about to be hidden.

> Implement the [splitViewController:willChangeToDisplayMode:](splitviewcontroller%28__willchangeto_%29.md) method instead.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc willHideViewController:(UIViewController *) aViewController withBarButtonItem:(UIBarButtonItem *) barButtonItem forPopoverController:(UIPopoverController *) pc;
```

## Parameters

- `svc`: The split view controller that owns the specified view controller.
- `aViewController`: The view controller being hidden.
- `barButtonItem`: A button you can add to your toolbar.
- `pc`: The popover controller that uses taps in `barButtonItem` to display the specified view controller.

<a id="Discussion"></a>

## Discussion

When the split view controller rotates from a landscape to portrait orientation, it typically hides one of its view controllers. When that happens, it calls this method to coordinate the addition of a button to the toolbar (or navigation bar) of the remaining custom view controller. If you want the soon-to-be hidden view controller to be displayed in a popover, you must implement this method and use it to add the specified button to your interface.

## See Also

### Deprecated methods

- [splitViewController:shouldHideViewController:inOrientation:](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController:willShowViewController:invalidatingBarButtonItem:](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController:popoverController:willPresentViewController:](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.
