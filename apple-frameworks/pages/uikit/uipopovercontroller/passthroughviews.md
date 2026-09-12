> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopovercontroller/passthroughviews](https://developer.apple.com/documentation/uikit/uipopovercontroller/passthroughviews)

# passthroughViews (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An array of views that the user can interact with while the popover is visible.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```swift
var passthroughViews: [UIView]? { get set }
```

<a id="Discussion"></a>

## Discussion

When a popover is active, interactions with other views are normally disabled until the popover is dismissed. Assigning an array of views to this property allows taps outside of the popover to be handled by the corresponding views.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentView(\_:animated:)](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [contentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setContentSize(\_:animated:)](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.

# passthroughViews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ (deprecated in 9.0) · iPadOS 3.2+ (deprecated in 9.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 9.0)

An array of views that the user can interact with while the popover is visible.

> For more information, see [UIPopoverController](../uipopovercontroller.md).

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<__kindof UIView *> * passthroughViews;
```

<a id="Discussion"></a>

## Discussion

When a popover is active, interactions with other views are normally disabled until the popover is dismissed. Assigning an array of views to this property allows taps outside of the popover to be handled by the corresponding views.

## See Also

### Configuring the popover content

- [contentViewController](contentviewcontroller.md): Deprecated. The view controller responsible for the content portion of the popover.
- [setContentViewController:animated:](setcontentview%28__animated_%29.md): Deprecated. Sets the view controller responsible for the content portion of the popover.
- [popoverContentSize](contentsize.md): Deprecated. The size of the popover’s content view.
- [setPopoverContentSize:animated:](setcontentsize%28__animated_%29.md): Deprecated. Changes the size of the popover’s content view.
