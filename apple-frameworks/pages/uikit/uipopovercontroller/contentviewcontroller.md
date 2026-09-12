> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/contentviewcontroller](https://developer.apple.com/documentation/uikit/uipopovercontroller/contentviewcontroller)

# contentViewController (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The view controller responsible for the content portion of the popover.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
var contentViewController: UIViewController { get set }
```

<a id="Discussion"></a>

## Discussion

This property is initially set to the view controller passed to the [init(contentViewController:)](init%28contentviewcontroller_%29.md) method. You can change the value of this property later to reflect a new set of content. Changing the value of this property swaps the new view controller in for the old one immediately and does not trigger an animation. If you want to animate the change, use the [setContentView(\_:animated:)](setcontentview%28__animated_%29.md) method instead.

## See Also

### Configuring the popover content

- [setContentView(\_:animated:)](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [contentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setContentSize(\_:animated:)](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

# contentViewController (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The view controller responsible for the content portion of the popover.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
@property (nonatomic, strong) UIViewController * contentViewController;
```

<a id="Discussion"></a>

## Discussion

This property is initially set to the view controller passed to the [initWithContentViewController:](init%28contentviewcontroller_%29.md) method. You can change the value of this property later to reflect a new set of content. Changing the value of this property swaps the new view controller in for the old one immediately and does not trigger an animation. If you want to animate the change, use the [setContentViewController:animated:](setcontentview%28__animated_%29.md) method instead.

## See Also

### Configuring the popover content

- [setContentViewController:animated:](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [popoverContentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setPopoverContentSize:animated:](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.
