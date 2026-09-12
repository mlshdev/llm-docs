> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:shouldhide:in:)](https://developer.apple.com/documentation/uikit/uisplitviewcontrollerdelegate/splitviewcontroller(_:shouldhide:in:))

# splitViewController(\_:shouldHide:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate whether the first view controller should be hidden for the specified orientation.

> Orientation-related delegate methods are no longer supported.

## Declaration

```swift
optional func splitViewController(_ svc: UISplitViewController, shouldHide vc: UIViewController, in orientation: UIInterfaceOrientation) -> Bool
```

## Parameters

- `svc`: The split view controller that owns the first view controller.
- `vc`: The first view controller in the array of view controllers.
- `orientation`: The orientation being considered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller should be hidden in the specified orientation or [false](https://developer.apple.com/documentation/swift/false) if it should be visible. If you do not implement this method, a value of [true](https://developer.apple.com/documentation/swift/true) is assumed for portrait orientations and [false](https://developer.apple.com/documentation/swift/false) is assumed for landscape orientations.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method only for the first child view controller in its array. The second view controller always remains visible regardless of the orientation.

Prior to iOS 5.0, the first view controller was always hidden in portrait orientations and always shown in landscape orientations. If you do not implement this method in your delegate object, that default behavior remains in effect.

## See Also

### Deprecated methods

- [splitViewController(\_:willHide:with:for:)](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController(\_:willShow:invalidating:)](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController(\_:popoverController:willPresent:)](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.

# splitViewController:shouldHideViewController:inOrientation: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 8.0) · iPadOS 5.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate whether the first view controller should be hidden for the specified orientation.

> Orientation-related delegate methods are no longer supported.

## Declaration

```objectivec
- (BOOL) splitViewController:(UISplitViewController *) svc shouldHideViewController:(UIViewController *) vc inOrientation:(UIInterfaceOrientation) orientation;
```

## Parameters

- `svc`: The split view controller that owns the first view controller.
- `vc`: The first view controller in the array of view controllers.
- `orientation`: The orientation being considered.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view controller should be hidden in the specified orientation or [false](https://developer.apple.com/documentation/swift/false) if it should be visible. If you do not implement this method, a value of [true](https://developer.apple.com/documentation/swift/true) is assumed for portrait orientations and [false](https://developer.apple.com/documentation/swift/false) is assumed for landscape orientations.

<a id="Discussion"></a>

## Discussion

The split view controller calls this method only for the first child view controller in its array. The second view controller always remains visible regardless of the orientation.

Prior to iOS 5.0, the first view controller was always hidden in portrait orientations and always shown in landscape orientations. If you do not implement this method in your delegate object, that default behavior remains in effect.

## See Also

### Deprecated methods

- [splitViewController:willHideViewController:withBarButtonItem:forPopoverController:](splitviewcontroller%28__willhide_with_for_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be hidden.
- [splitViewController:willShowViewController:invalidatingBarButtonItem:](splitviewcontroller%28__willshow_invalidating_%29.md): Deprecated. Tells the delegate that the specified view controller is about to be shown again.
- [splitViewController:popoverController:willPresentViewController:](splitviewcontroller%28__popovercontroller_willpresent_%29.md): Deprecated. Tells the delegate that the hidden view controller is about to be displayed in a popover.
