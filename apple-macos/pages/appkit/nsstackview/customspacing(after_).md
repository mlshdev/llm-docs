> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/customspacing(after:)](https://developer.apple.com/documentation/appkit/nsstackview/customspacing(after:))

# customSpacing(after:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.

## Declaration

```swift
func customSpacing(after view: NSView) -> CGFloat
```

## Parameters

- `view`: The view whose trailing spacing you are getting.

<a id="return-value"></a>

## Return Value

The number of points between the trailing edge of the specified view and the one that follows it (that is, the one with the next highest index order).

<a id="Discussion"></a>

## Discussion

If you set custom spacing for a view using the [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md) method, it overrides the stack view’s default spacing as set in the [spacing](spacing.md) property.

A stack view retains custom spacing across layout updates. Custom spacing for a view is lost if you remove the view from the stack view or specify a new value.

## See Also

### Configuring Views in a Stack View

- [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriority(for:)](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackView.VisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [useDefaultSpacing](usedefaultspacing.md)

# customSpacingAfterView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.

## Declaration

```objectivec
- (CGFloat) customSpacingAfterView:(NSView *) view;
```

## Parameters

- `view`: The view whose trailing spacing you are getting.

<a id="return-value"></a>

## Return Value

The number of points between the trailing edge of the specified view and the one that follows it (that is, the one with the next highest index order).

<a id="Discussion"></a>

## Discussion

If you set custom spacing for a view using the [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md) method, it overrides the stack view’s default spacing as set in the [spacing](spacing.md) property.

A stack view retains custom spacing across layout updates. Custom spacing for a view is lost if you remove the view from the stack view or specify a new value.

## See Also

### Configuring Views in a Stack View

- [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriorityForView:](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackViewVisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
