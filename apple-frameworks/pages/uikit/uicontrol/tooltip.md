> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontrol/tooltip](https://developer.apple.com/documentation/uikit/uicontrol/tooltip)

# toolTip (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The default text to display in the control’s tooltip.

## Declaration

```swift
var toolTip: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to the text that should appear in the tooltip. If you want your app to determine the tooltip text at a later time — for instance, to determine the text based on the current state of your app — set the [delegate](../uitooltipinteraction/delegate.md) property of [toolTipInteraction](tooltipinteraction.md) after setting [toolTip](tooltip.md) with the default text. For example, the following code listing sets the tooltip’s default text and delegate for a shopping cart button:

```swift
let button = UIButton(configuration: configuration, primaryAction: action)
button.toolTip = "Click to add the item to your cart. Your cart is empty."
button.toolTipInteraction?.delegate = self
```

If the delegate implements the method [toolTipInteraction(\_:configurationAt:)](../uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md), the tooltip ignores the default text set in the [toolTip](tooltip.md) property. For more information, see [toolTipInteraction](tooltipinteraction.md).

## See Also

### Showing tooltips

- [toolTipInteraction](tooltipinteraction.md): The tooltip interaction associated with the control.

# toolTip (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The default text to display in the control’s tooltip.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * toolTip;
```

<a id="Discussion"></a>

## Discussion

Set this property to the text that should appear in the tooltip. If you want your app to determine the tooltip text at a later time — for instance, to determine the text based on the current state of your app — set the [delegate](../uitooltipinteraction/delegate.md) property of [toolTipInteraction](tooltipinteraction.md) after setting [toolTip](tooltip.md) with the default text. For example, the following code listing sets the tooltip’s default text and delegate for a shopping cart button:

```swift
let button = UIButton(configuration: configuration, primaryAction: action)
button.toolTip = "Click to add the item to your cart. Your cart is empty."
button.toolTipInteraction?.delegate = self
```

If the delegate implements the method [toolTipInteraction:configurationAtPoint:](../uitooltipinteractiondelegate/tooltipinteraction%28__configurationat_%29.md), the tooltip ignores the default text set in the [toolTip](tooltip.md) property. For more information, see [toolTipInteraction](tooltipinteraction.md).

## See Also

### Showing tooltips

- [toolTipInteraction](tooltipinteraction.md): The tooltip interaction associated with the control.
