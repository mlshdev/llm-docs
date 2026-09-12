> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/setcontentsize(_:animated:)](https://developer.apple.com/documentation/uikit/uipopovercontroller/setcontentsize(_:animated:))

# setContentSize(\_:animated:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Changes the size of the popover’s content view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
func setContentSize(_ size: CGSize, animated: Bool)
```

## Parameters

- `size`: The new size to apply to the content view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the change in size to be animated or [false](https://developer.apple.com/documentation/swift/false) if you want the change to appear immediately.

<a id="Discussion"></a>

## Discussion

When changing the size of the popover’s content, the width value you specify must be at least 320 points and no more than 600 points. There are no restrictions on the height value. However, both the width and height values you specify may be adjusted to ensure the popup fits on screen and is not covered by the keyboard.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentView(\_:animated:)](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [contentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

# setPopoverContentSize:animated: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

Changes the size of the popover’s content view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
- (void) setPopoverContentSize:(CGSize) size animated:(BOOL) animated;
```

## Parameters

- `size`: The new size to apply to the content view.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the change in size to be animated or [false](https://developer.apple.com/documentation/swift/false) if you want the change to appear immediately.

<a id="Discussion"></a>

## Discussion

When changing the size of the popover’s content, the width value you specify must be at least 320 points and no more than 600 points. There are no restrictions on the height value. However, both the width and height values you specify may be adjusted to ensure the popup fits on screen and is not covered by the keyboard.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentViewController:animated:](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [popoverContentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.
