> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/sourceitem](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/sourceitem)

# sourceItem (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item on which to anchor the popover.

## Declaration

```swift
var sourceItem: (any UIPopoverPresentationControllerSourceItem)? { get set }
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Assign a value to this property to anchor the popover to the specified [UIBarButtonItem](../uibarbuttonitem.md) or [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem). In iOS 18 and earlier, the popover’s arrow points to the specified item. In iOS 26 and later, the popover animates from and replaces the specified item until someone selects an action item or dismisses the popover.

Alternatively, you may specify the anchor location for the popover using the [sourceView](sourceview.md) and [sourceRect](sourcerect.md) properties.

The default value of this property is `nil`.

## See Also

### Specifying the popover’s anchor point

- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceView](sourceview.md): The view containing the anchor rectangle for the popover.
- [sourceRect](sourcerect.md): The area in the source view in which you anchor the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.

# sourceItem (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The item on which to anchor the popover.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) id<UIPopoverPresentationControllerSourceItem> sourceItem;
```

## Mentioned In

- [Getting the user’s attention with alerts and action sheets](../getting-the-user-s-attention-with-alerts-and-action-sheets.md)

<a id="Discussion"></a>

## Discussion

Assign a value to this property to anchor the popover to the specified [UIBarButtonItem](../uibarbuttonitem.md) or [NSToolbarItem](https://developer.apple.com/documentation/appkit/nstoolbaritem). In iOS 18 and earlier, the popover’s arrow points to the specified item. In iOS 26 and later, the popover animates from and replaces the specified item until someone selects an action item or dismisses the popover.

Alternatively, you may specify the anchor location for the popover using the [sourceView](sourceview.md) and [sourceRect](sourcerect.md) properties.

The default value of this property is `nil`.

## See Also

### Specifying the popover’s anchor point

- [UIPopoverPresentationControllerSourceItem](../uipopoverpresentationcontrollersourceitem.md): A type that can be an anchor for a popover presentation controller.
- [sourceView](sourceview.md): The view containing the anchor rectangle for the popover.
- [sourceRect](sourcerect.md): The area in the source view in which you anchor the popover.
- [barButtonItem](barbuttonitem.md): Deprecated. The bar button item on which to anchor the popover.
