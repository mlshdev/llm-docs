> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/sourceview](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/sourceview)

# sourceView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view containing the anchor rectangle for the popover.

## Declaration

```swift
var sourceView: UIView? { get set }
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with the [sourceRect](sourcerect.md) property to specify the anchor location for the popover. Alternatively, you may specify the anchor location for the popover using the [barButtonItem](barbuttonitem.md) property.

## See Also

### Specifying the popover’s anchor point

- [sourceItem](sourceitem.md): The item on which to anchor the popover.
- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceRect](sourcerect.md): The area in the source view in which you anchor the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.

# sourceView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The view containing the anchor rectangle for the popover.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIView * sourceView;
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Use this property in conjunction with the [sourceRect](sourcerect.md) property to specify the anchor location for the popover. Alternatively, you may specify the anchor location for the popover using the [barButtonItem](barbuttonitem.md) property.

## See Also

### Specifying the popover’s anchor point

- [sourceItem](sourceitem.md): The item on which to anchor the popover.
- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceRect](sourcerect.md): The area in the source view in which you anchor the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.
