> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/contentsize](https://developer.apple.com/documentation/uikit/uipopovercontroller/contentsize)

# contentSize (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The size of the popover’s content view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
var contentSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

This property represents the size of the content view that is managed by the view controller in the [contentViewController](contentviewcontroller.md) property. The initial value of this property is set to value in the view controller’s [contentSizeForViewInPopover](../uiviewcontroller/contentsizeforviewinpopover.md) property. Changing the value of this property overrides the default value of the current view controller. The overridden value persists until you assign a new content view controller to the receiver. Thus, if you want to keep your overridden value, you must reassign it after changing the content view controller.

When changing the value of this property, the width value you specify must be at least 320 points and no more than 600 points. There are no restrictions on the height value. However, both the width and height values you specify may be adjusted to ensure the popup fits on screen and is not covered by the keyboard. If you change the value of this property while the popover is visible, the size change is animated.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentView(\_:animated:)](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [setContentSize(\_:animated:)](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.

# popoverContentSize (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

The size of the popover’s content view.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
@property (nonatomic) CGSize popoverContentSize;
```

<a id="Discussion"></a>

## Discussion

This property represents the size of the content view that is managed by the view controller in the [contentViewController](contentviewcontroller.md) property. The initial value of this property is set to value in the view controller’s [contentSizeForViewInPopover](../uiviewcontroller/contentsizeforviewinpopover.md) property. Changing the value of this property overrides the default value of the current view controller. The overridden value persists until you assign a new content view controller to the receiver. Thus, if you want to keep your overridden value, you must reassign it after changing the content view controller.

When changing the value of this property, the width value you specify must be at least 320 points and no more than 600 points. There are no restrictions on the height value. However, both the width and height values you specify may be adjusted to ensure the popup fits on screen and is not covered by the keyboard. If you change the value of this property while the popover is visible, the size change is animated.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentViewController:animated:](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [setPopoverContentSize:animated:](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
- [passthroughViews](passthroughviews.md): Deprecated. An array of views that the user can interact with while the popover is visible.
