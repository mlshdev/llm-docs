> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/alignment](https://developer.apple.com/documentation/appkit/nsstackview/alignment)

# alignment (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The view alignment within the stack view.

## Declaration

```swift
var alignment: NSLayoutConstraint.Attribute { get set }
```

<a id="Discussion"></a>

## Discussion

The default value for this property depends on whether the stack view is horizontal or vertical:

- *Horizontal*: The default value is [NSLayoutConstraint.Attribute.centerY](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centery).
- *Vertical*: The default value is [NSLayoutConstraint.Attribute.centerX](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centerx).

These constants are described as part of the [NSLayoutConstraint.Attribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute) enumeration in [NSLayoutConstraint](https://developer.apple.com/documentation/uikit/nslayoutconstraint); see that enumeration for the other possible alignment values.

> **Note**

>  Using certain values in this property can result in unexpected behavior:
>
> - Specifying the [NSLayoutConstraint.Attribute.notAnAttribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/notanattribute) constant can result in an ambiguous layout.
> - A value inappropriate for the layout direction is ignored; for example, the system ignores a value of [NSLayoutConstraint.Attribute.centerX](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centerx) for the horizontal layout.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](distribution-swift.enum.md)

# alignment (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The view alignment within the stack view.

## Declaration

```objectivec
@property NSLayoutAttribute alignment;
```

<a id="Discussion"></a>

## Discussion

The default value for this property depends on whether the stack view is horizontal or vertical:

- *Horizontal*: The default value is [NSLayoutAttributeCenterY](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centery).
- *Vertical*: The default value is [NSLayoutAttributeCenterX](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centerx).

These constants are described as part of the [NSLayoutAttribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute) enumeration in [NSLayoutConstraint](https://developer.apple.com/documentation/uikit/nslayoutconstraint); see that enumeration for the other possible alignment values.

> **Note**

>  Using certain values in this property can result in unexpected behavior:
>
> - Specifying the [NSLayoutAttributeNotAnAttribute](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/notanattribute) constant can result in an ambiguous layout.
> - A value inappropriate for the layout direction is ignored; for example, the system ignores a value of [NSLayoutAttributeCenterX](https://developer.apple.com/documentation/uikit/nslayoutconstraint/attribute/centerx) for the horizontal layout.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](distribution-swift.enum.md)
