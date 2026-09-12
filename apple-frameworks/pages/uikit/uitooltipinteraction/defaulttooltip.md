> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipinteraction/defaulttooltip](https://developer.apple.com/documentation/uikit/uitooltipinteraction/defaulttooltip)

# defaultToolTip (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The text that appears in a tooltip by default.

## Declaration

```swift
var defaultToolTip: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the default text to display in the tooltip.

If you set the [delegate](delegate.md) property to an object that conforms to the [UIToolTipInteractionDelegate](../uitooltipinteractiondelegate.md) protocol and implements the [toolTipInteraction(\_:configurationAt:)](../uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md) method, then the return value of the delegate method determines the text that appears in the tooltip.

## See Also

### Managing the interaction

- [isEnabled](isenabled.md): A Boolean value that indicates whether the tooltip interaction is in the enabled state.

# defaultToolTip (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The text that appears in a tooltip by default.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * defaultToolTip;
```

<a id="Discussion"></a>

## Discussion

Set this property to the default text to display in the tooltip.

If you set the [delegate](delegate.md) property to an object that conforms to the [UIToolTipInteractionDelegate](../uitooltipinteractiondelegate.md) protocol and implements the [toolTipInteraction:configurationAtPoint:](../uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md) method, then the return value of the delegate method determines the text that appears in the tooltip.

## See Also

### Managing the interaction

- [enabled](isenabled.md): A Boolean value that indicates whether the tooltip interaction is in the enabled state.
