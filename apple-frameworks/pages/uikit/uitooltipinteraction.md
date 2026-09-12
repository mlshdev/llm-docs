> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitooltipinteraction](https://developer.apple.com/documentation/uikit/uitooltipinteraction)

# UIToolTipInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An interaction object that makes it possible to show a tooltip when hovering a pointer over a view or control.

## Declaration

```swift
@MainActor class UIToolTipInteraction
```

<a id="overview"></a>

## Overview

To show a tooltip when the pointer hovers over a view, add a [UIToolTipInteraction](uitooltipinteraction.md) object to the view. For example, the following code listings shows how to add a tooltip to a label:

```swift
let label = UILabel()
label.text = "Label with a tooltip"

let tooltipInteraction = UIToolTipInteraction(defaultToolTip: "The label's tooltip.")
label.addInteraction(tooltipInteraction)
```

If you want your app to determine the tooltip text at a later time — for instance, to reflect the current state of your app — set the interaction’s [delegate](uitooltipinteraction/delegate.md) property to an object that conforms to the [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md) protocol.

To add a tooltip to a control derived from [UIControl](uicontrol.md), use the convenience property [toolTip](uicontrol/tooltip.md); for example, to add a tooltip to the button:

```swift
let button = UIButton(configuration: configuration, primaryAction: action)
button.toolTip = "Click to buy this item. You'll have a chance to change your mind before confirming your purchase."
```

Setting the [toolTip](uicontrol/tooltip.md) property creates a tooltip interaction for the control, which you can retrieve from the [toolTipInteraction](uicontrol/tooltipinteraction.md) property.

> **Note**

>  Tooltips appear when your app runs in macOS or visionOS. To show a tooltip in macOS, your app must be an iPhone or iPad app running on a Mac with Apple silicon, or built with Mac Catalyst.

## Topics

### Creating a tooltip interaction

- [init()](uitooltipinteraction/init%28%29.md): Creates a tooltip interaction object.
- [init(defaultToolTip:)](uitooltipinteraction/init%28defaulttooltip_%29.md): Creates a tooltip interaction object and sets the default tooltip text.

### Managing the interaction

- [isEnabled](uitooltipinteraction/isenabled.md): A Boolean value that indicates whether the tooltip interaction is in the enabled state.
- [defaultToolTip](uitooltipinteraction/defaulttooltip.md): The text that appears in a tooltip by default.

### Providing tooltip configurations

- [delegate](uitooltipinteraction/delegate.md): An object that provides text that a tooltip displays instead of the default text.
- [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md): An interface that provides tooltip settings to an interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Tooltips

- [Showing help tags for views and controls using tooltip interactions](showing-help-tags-for-views-and-controls-using-tooltip-interactions.md): Explain the purpose of interface elements by showing a tooltip when a person positions the pointer over the element.
- [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md): An interface that provides tooltip settings to an interaction.

# UIToolTipInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

An interaction object that makes it possible to show a tooltip when hovering a pointer over a view or control.

## Declaration

```objectivec
@interface UIToolTipInteraction : NSObject
```

<a id="overview"></a>

## Overview

To show a tooltip when the pointer hovers over a view, add a [UIToolTipInteraction](uitooltipinteraction.md) object to the view. For example, the following code listings shows how to add a tooltip to a label:

```swift
let label = UILabel()
label.text = "Label with a tooltip"

let tooltipInteraction = UIToolTipInteraction(defaultToolTip: "The label's tooltip.")
label.addInteraction(tooltipInteraction)
```

If you want your app to determine the tooltip text at a later time — for instance, to reflect the current state of your app — set the interaction’s [delegate](uitooltipinteraction/delegate.md) property to an object that conforms to the [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md) protocol.

To add a tooltip to a control derived from [UIControl](uicontrol.md), use the convenience property [toolTip](uicontrol/tooltip.md); for example, to add a tooltip to the button:

```swift
let button = UIButton(configuration: configuration, primaryAction: action)
button.toolTip = "Click to buy this item. You'll have a chance to change your mind before confirming your purchase."
```

Setting the [toolTip](uicontrol/tooltip.md) property creates a tooltip interaction for the control, which you can retrieve from the [toolTipInteraction](uicontrol/tooltipinteraction.md) property.

> **Note**

>  Tooltips appear when your app runs in macOS or visionOS. To show a tooltip in macOS, your app must be an iPhone or iPad app running on a Mac with Apple silicon, or built with Mac Catalyst.

## Topics

### Creating a tooltip interaction

- [init](uitooltipinteraction/init%28%29.md): Creates a tooltip interaction object.
- [initWithDefaultToolTip:](uitooltipinteraction/init%28defaulttooltip_%29.md): Creates a tooltip interaction object and sets the default tooltip text.

### Managing the interaction

- [enabled](uitooltipinteraction/isenabled.md): A Boolean value that indicates whether the tooltip interaction is in the enabled state.
- [defaultToolTip](uitooltipinteraction/defaulttooltip.md): The text that appears in a tooltip by default.

### Providing tooltip configurations

- [delegate](uitooltipinteraction/delegate.md): An object that provides text that a tooltip displays instead of the default text.
- [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md): An interface that provides tooltip settings to an interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Tooltips

- [Showing help tags for views and controls using tooltip interactions](showing-help-tags-for-views-and-controls-using-tooltip-interactions.md): Explain the purpose of interface elements by showing a tooltip when a person positions the pointer over the element.
- [UIToolTipInteractionDelegate](uitooltipinteractiondelegate.md): An interface that provides tooltip settings to an interaction.
