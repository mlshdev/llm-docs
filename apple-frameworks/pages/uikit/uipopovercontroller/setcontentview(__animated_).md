> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/setcontentview(_:animated:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/setcontentview(_:animated:))

# setContentView(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Sets the view controller responsible for the content portion of the popover.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
func setContentView(_ viewController: UIViewController, animated: Bool)
```

## Parameters

- `viewController`: The new view controller whose content should be displayed by the popover.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if the change of view controllers should be animated or [false](https://developer.apple.com/documentation/swift/false) if the change should occur immediately.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [contentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setContentSize(\_:animated:)](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

# setContentViewController:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Sets the view controller responsible for the content portion of the popover.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (void) setContentViewController:(UIViewController *) viewController animated:(BOOL) animated;
```

## Parameters

- `viewController`: The new view controller whose content should be displayed by the popover.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if the change of view controllers should be animated or [false](https://developer.apple.com/documentation/swift/false) if the change should occur immediately.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [popoverContentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setPopoverContentSize:animated:](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.
