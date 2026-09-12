> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipresentationcontroller/delegate](https://developer.apple.com/documentation/uikit/uipresentationcontroller/delegate)

# delegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate object for managing adaptive presentations.

## Declaration

```swift
weak var delegate: (any UIAdaptivePresentationControllerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

When the app’s size changes, the presentation controller works with this delegate object to determine an appropriate response. View controllers presented using the [UIModalPresentationStyle.formSheet](../uimodalpresentationstyle/formsheet.md), [UIModalPresentationStyle.popover](../uimodalpresentationstyle/popover.md), or [UIModalPresentationStyle.custom](../uimodalpresentationstyle/custom.md) style must change to use one of the full-screen presentation styles instead. The delegate can also opt to change the presented view controller entirely.

The object you assign to this property must conform to the [UIAdaptivePresentationControllerDelegate](../uiadaptivepresentationcontrollerdelegate.md) protocol.

## See Also

### Adapting your presentations dynamically

- [UIAdaptivePresentationControllerDelegate](../uiadaptivepresentationcontrollerdelegate.md): A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.

# delegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate object for managing adaptive presentations.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<UIAdaptivePresentationControllerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

When the app’s size changes, the presentation controller works with this delegate object to determine an appropriate response. View controllers presented using the [UIModalPresentationFormSheet](../uimodalpresentationstyle/formsheet.md), [UIModalPresentationPopover](../uimodalpresentationstyle/popover.md), or [UIModalPresentationCustom](../uimodalpresentationstyle/custom.md) style must change to use one of the full-screen presentation styles instead. The delegate can also opt to change the presented view controller entirely.

The object you assign to this property must conform to the [UIAdaptivePresentationControllerDelegate](../uiadaptivepresentationcontrollerdelegate.md) protocol.

## See Also

### Adapting your presentations dynamically

- [UIAdaptivePresentationControllerDelegate](../uiadaptivepresentationcontrollerdelegate.md): A set of methods that, in conjunction with a presentation controller, determine how to respond to trait changes in your app.
