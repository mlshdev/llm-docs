> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/visibilitypriority(for:)](https://developer.apple.com/documentation/appkit/nsstackview/visibilitypriority(for:))

# visibilityPriority(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the visibility priority for a specified view in the stack view.

## Declaration

```swift
func visibilityPriority(for view: NSView) -> NSStackView.VisibilityPriority
```

## Parameters

- `view`: The view that you are getting the visibility priority for.

<a id="return-value"></a>

## Return Value

The visibility priority for the specified view.

<a id="Discussion"></a>

## Discussion

Visibility priority is the Auto Layout priority for a view to remain attached to a stack view when Auto Layout reduces the stack view’s size (such as when a user reduces the enclosing window’s size).

## See Also

### Configuring Views in a Stack View

- [customSpacing(after:)](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackView.VisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [useDefaultSpacing](usedefaultspacing.md)

# visibilityPriorityForView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.9+

Returns the visibility priority for a specified view in the stack view.

## Declaration

```objectivec
- (NSStackViewVisibilityPriority) visibilityPriorityForView:(NSView *) view;
```

## Parameters

- `view`: The view that you are getting the visibility priority for.

<a id="return-value"></a>

## Return Value

The visibility priority for the specified view.

<a id="Discussion"></a>

## Discussion

Visibility priority is the Auto Layout priority for a view to remain attached to a stack view when Auto Layout reduces the stack view’s size (such as when a user reduces the enclosing window’s size).

## See Also

### Configuring Views in a Stack View

- [customSpacingAfterView:](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackViewVisibilityPriority](visibilitypriority.md): The various Auto Layout priorities for a view in the stack view to remain attached.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
