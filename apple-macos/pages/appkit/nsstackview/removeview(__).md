> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/removeview(_:)](https://developer.apple.com/documentation/appkit/nsstackview/removeview(_:))

# removeView(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a specified view from the stack view.

## Declaration

```swift
func removeView(_ view: NSView)
```

## Parameters

- `view`: The view you want to remove from the stack view.

  > **Important**

  >  If you attempt to remove a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

This method removes a view from a stack view whether the view is attached or detached. For an attached view only, you can alternatively call the [removeFromSuperview()](https://developer.apple.com/documentation/uikit/uiview/removefromsuperview%28%29) method on the view.

## See Also

### Managing Views in Gravity Areas

- [addView(\_:in:)](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView(\_:at:in:)](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews(\_:in:)](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [NSStackView.Gravity](gravity.md): The gravity areas available in a stack view.

# removeView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes a specified view from the stack view.

## Declaration

```objectivec
- (void) removeView:(NSView *) view;
```

## Parameters

- `view`: The view you want to remove from the stack view.

  > **Important**

  >  If you attempt to remove a view that is not in the stack view, the system raises an exception.

<a id="Discussion"></a>

## Discussion

This method removes a view from a stack view whether the view is attached or detached. For an attached view only, you can alternatively call the [removeFromSuperview](https://developer.apple.com/documentation/uikit/uiview/removefromsuperview%28%29) method on the view.

## See Also

### Managing Views in Gravity Areas

- [addView:inGravity:](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView:atIndex:inGravity:](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [setViews:inGravity:](setviews%28__in_%29.md): Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.
- [NSStackViewGravity](gravity.md): The gravity areas available in a stack view.
