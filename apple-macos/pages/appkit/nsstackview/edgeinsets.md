> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/edgeinsets](https://developer.apple.com/documentation/appkit/nsstackview/edgeinsets)

# edgeInsets (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The geometric padding, in points, inside the stack view, surrounding its views.

## Declaration

```swift
var edgeInsets: NSEdgeInsets { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `(0, 0, 0, 0)`. Edge insets remain as they are if you change the value of a stack view’s [orientation](orientation.md) property or the value of its inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](distribution-swift.enum.md)

# edgeInsets (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The geometric padding, in points, inside the stack view, surrounding its views.

## Declaration

```objectivec
@property NSEdgeInsets edgeInsets;
```

<a id="Discussion"></a>

## Discussion

The default value is `(0, 0, 0, 0)`. Edge insets remain as they are if you change the value of a stack view’s [orientation](orientation.md) property or the value of its inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property.

## See Also

### Configuring the Stack View Layout

- [orientation](orientation.md): The horizontal or vertical layout direction of the stack view.
- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](distribution-swift.enum.md)
