> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/orientation](https://developer.apple.com/documentation/appkit/nsstackview/orientation)

# orientation (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The horizontal or vertical layout direction of the stack view.

## Declaration

```swift
var orientation: NSUserInterfaceLayoutOrientation { get set }
```

<a id="Discussion"></a>

## Discussion

Default value is [NSUserInterfaceLayoutOrientation.horizontal](../nsuserinterfacelayoutorientation/horizontal.md). For values that apply to this property, see [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md).

## See Also

### Configuring the Stack View Layout

- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [useDefaultSpacing](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackView.Distribution](distribution-swift.enum.md)

# orientation (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

The horizontal or vertical layout direction of the stack view.

## Declaration

```objectivec
@property NSUserInterfaceLayoutOrientation orientation;
```

<a id="Discussion"></a>

## Discussion

Default value is [NSUserInterfaceLayoutOrientationHorizontal](../nsuserinterfacelayoutorientation/horizontal.md). For values that apply to this property, see [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md).

## See Also

### Configuring the Stack View Layout

- [NSUserInterfaceLayoutOrientation](../nsuserinterfacelayoutorientation.md): The stack view layout directions, and user interface axes for hugging priority and clipping resistance.
- [alignment](alignment.md): The view alignment within the stack view.
- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
- [edgeInsets](edgeinsets.md): The geometric padding, in points, inside the stack view, surrounding its views.
- [hasEqualSpacing](hasequalspacing.md): Deprecated. A Boolean value that indicates whether the spacing between adjacent views should be equal to each other.
- [distribution](distribution-swift.property.md): The spacing and sizing distribution of stacked views along the primary axis.
- [NSStackViewDistribution](distribution-swift.enum.md)
