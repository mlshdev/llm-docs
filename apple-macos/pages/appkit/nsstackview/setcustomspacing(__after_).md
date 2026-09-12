> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/setcustomspacing(_:after:)](https://developer.apple.com/documentation/appkit/nsstackview/setcustomspacing(_:after:))

# setCustomSpacing(\_:after:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.

## Declaration

```swift
func setCustomSpacing(_ spacing: CGFloat, after view: NSView)
```

## Parameters

- `spacing`: The custom trailing space to use between the `aView` view and the one that follows it, in points.

  Default value is [useDefaultSpacing](usedefaultspacing.md), which indicates that the view does not use custom spacing.
- `view`: The view whose trailing spacing you are setting.

  > **Important**

  >  If you attempt to set custom spacing for a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

For a horizontal stack view, this method sets custom spacing between a specified view and the view to its right when the user interface direction is left to right. (See the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property for information on layout direction.) For a vertical stack view, this method sets custom spacing below a specified view.

If you set custom spacing for a view, it overrides the stack view’s default spacing for that view, as set in the [spacing](spacing.md) property.

A stack view retains custom spacing across layout updates. Custom spacing for a view is lost if you remove the view from the stack view or specify a new value.

## See Also

### Related Documentation

- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.

### Configuring Views in a Stack View

- [customSpacing(after:)](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [visibilityPriority(for:)](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackView.VisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [useDefaultSpacing](usedefaultspacing.md)

# setCustomSpacing:afterView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.

## Declaration

```objectivec
- (void) setCustomSpacing:(CGFloat) spacing afterView:(NSView *) view;
```

## Parameters

- `spacing`: The custom trailing space to use between the `aView` view and the one that follows it, in points.

  Default value is [NSStackViewSpacingUseDefault](usedefaultspacing.md), which indicates that the view does not use custom spacing.
- `view`: The view whose trailing spacing you are setting.

  > **Important**

  >  If you attempt to set custom spacing for a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

For a horizontal stack view, this method sets custom spacing between a specified view and the view to its right when the user interface direction is left to right. (See the inherited [userInterfaceLayoutDirection](../nsview/userinterfacelayoutdirection.md) property for information on layout direction.) For a vertical stack view, this method sets custom spacing below a specified view.

If you set custom spacing for a view, it overrides the stack view’s default spacing for that view, as set in the [spacing](spacing.md) property.

A stack view retains custom spacing across layout updates. Custom spacing for a view is lost if you remove the view from the stack view or specify a new value.

## See Also

### Related Documentation

- [spacing](spacing.md): The minimum spacing, in points, between adjacent views in the stack view.

### Configuring Views in a Stack View

- [customSpacingAfterView:](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [visibilityPriorityForView:](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackViewVisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
