> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/sourcerect](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/sourcerect)

# sourceRect (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The area in the source view in which you anchor the popover.

## Declaration

```swift
var sourceRect: CGRect { get set }
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Use this property to define the rectangle that the popover’s arrow points to. The rectangle must be in the coordinate space of [sourceView](sourceview.md).

In iOS 13.2 and later, the default value is [CGRectNull](../../coregraphics/cgrectnull.md), which instructs the system to use the current frame of [sourceView](sourceview.md). The controller observes changes to this frame and updates the popover accordingly.

In iOS 13.1 and earlier, the default value is [zero](../../corefoundation/cgrect/zero.md) (Swift) or [CGRectZero](../../coregraphics/cgrectzero.md) (Objective-C); using [CGRectNull](../../coregraphics/cgrectnull.md) results in undefined behavior.

[UIPopoverPresentationController](../uipopoverpresentationcontroller.md) ignores this property if you set the [barButtonItem](barbuttonitem.md) property.

## See Also

### Specifying the popover’s anchor point

- [sourceItem](sourceitem.md): The item on which to anchor the popover.
- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceView](sourceview.md): The view containing the anchor rectangle for the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.

# sourceRect (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The area in the source view in which you anchor the popover.

## Declaration

```objectivec
@property (nonatomic, assign) CGRect sourceRect;
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Use this property to define the rectangle that the popover’s arrow points to. The rectangle must be in the coordinate space of [sourceView](sourceview.md).

In iOS 13.2 and later, the default value is [CGRectNull](../../coregraphics/cgrectnull.md), which instructs the system to use the current frame of [sourceView](sourceview.md). The controller observes changes to this frame and updates the popover accordingly.

In iOS 13.1 and earlier, the default value is [zero](../../corefoundation/cgrect/zero.md) (Swift) or [CGRectZero](../../coregraphics/cgrectzero.md) (Objective-C); using [CGRectNull](../../coregraphics/cgrectnull.md) results in undefined behavior.

[UIPopoverPresentationController](../uipopoverpresentationcontroller.md) ignores this property if you set the [barButtonItem](barbuttonitem.md) property.

## See Also

### Specifying the popover’s anchor point

- [sourceItem](sourceitem.md): The item on which to anchor the popover.
- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceView](sourceview.md): The view containing the anchor rectangle for the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.
