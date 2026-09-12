> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverpresentationcontroller/delegate](https://developer.apple.com/documentation/uikit/uipopoverpresentationcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate that handles popover-related messages.

## Declaration

```swift
weak var delegate: (any UIPopoverPresentationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

At various points during the presentation process, the popover presentation controller calls methods of its delegate to give that object a chance to respond. You might use a delegate to further configure the popover presentation controller or to respond to user-initiated actions relating to the popover. For example, immediately prior to displaying the popover, the presentation controller calls the [prepareForPopoverPresentation(\_:)](../uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation%28__%29.md) method of the delegate object.

For more information about the methods that you can implement in your delegate object, see [UIPopoverPresentationControllerDelegate](../uipopoverpresentationcontrollerdelegate.md).

## See Also

### Customizing the popover behavior

- [UIPopoverPresentationControllerDelegate](../uipopoverpresentationcontrollerdelegate.md): The interface for a popover presentation delegate, which lets you customize the behavior of a popover-based presentation.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The delegate that handles popover-related messages.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIPopoverPresentationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

At various points during the presentation process, the popover presentation controller calls methods of its delegate to give that object a chance to respond. You might use a delegate to further configure the popover presentation controller or to respond to user-initiated actions relating to the popover. For example, immediately prior to displaying the popover, the presentation controller calls the [prepareForPopoverPresentation:](../uipopoverpresentationcontrollerdelegate/prepareforpopoverpresentation%28__%29.md) method of the delegate object.

For more information about the methods that you can implement in your delegate object, see [UIPopoverPresentationControllerDelegate](../uipopoverpresentationcontrollerdelegate.md).

## See Also

### Customizing the popover behavior

- [UIPopoverPresentationControllerDelegate](../uipopoverpresentationcontrollerdelegate.md): The interface for a popover presentation delegate, which lets you customize the behavior of a popover-based presentation.
