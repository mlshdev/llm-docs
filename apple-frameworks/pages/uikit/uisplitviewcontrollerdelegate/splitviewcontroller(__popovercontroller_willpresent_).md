> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:popovercontroller:willpresent:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:popovercontroller:willpresent:))

# splitViewController(\_:popoverController:willPresent:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the hidden view controller is about to be displayed in a popover.

> Orientation-related delegate methods are no longer supported.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, popoverController pc: UIPopoverController, willPresent aViewController: UIViewController)
```

## Parameters

- `svc`: The split view controller that owns the hidden view controller.
- `pc`: The popover controller that is about to display the view controller.
- `aViewController`: The view controller to be displayed in the popover.

<a id="Discussion"></a>

## Discussion

The toolbar button you add to your user interface facilitates the display of the hidden view controller in response to user taps. When the user taps that button, the split view controller calls this method. You can use this method to perform any additional steps prior to displaying the currently hidden view controller.

## See Also

### Deprecated methods

- [splitViewController(\_:shouldHide:in:)](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController(\_:willHide:with:for:)](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController(\_:willShow:invalidating:)](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.

# splitViewController:popoverController:willPresentViewController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 8.0) · iPadOS 2.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the hidden view controller is about to be displayed in a popover.

> Orientation-related delegate methods are no longer supported.

## Declaration

```objectivec
- (void) splitViewController:(UISplitViewController *) svc popoverController:(UIPopoverController *) pc willPresentViewController:(UIViewController *) aViewController;
```

## Parameters

- `svc`: The split view controller that owns the hidden view controller.
- `pc`: The popover controller that is about to display the view controller.
- `aViewController`: The view controller to be displayed in the popover.

<a id="Discussion"></a>

## Discussion

The toolbar button you add to your user interface facilitates the display of the hidden view controller in response to user taps. When the user taps that button, the split view controller calls this method. You can use this method to perform any additional steps prior to displaying the currently hidden view controller.

## See Also

### Deprecated methods

- [splitViewController:shouldHideViewController:inOrientation:](splitviewcontroller%28__shouldhide_in_%29.md): Deprecated. Asks the delegate whether the first view controller should be hidden for the specified orientation.
- [splitViewController:willHideViewController:withBarButtonItem:forPopoverController:](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController:willShowViewController:invalidatingBarButtonItem:](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
