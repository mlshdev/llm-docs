> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/setviews(_:in:)](https://developer.apple.com/documentation/appkit/nsstackview/setviews(_:in:))

# setViews(\_:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.

## Declaration

```swift
func setViews(_ views: [NSView], in gravity: NSStackView.Gravity)
```

## Parameters

- `views`: The array of views you are specifying for the gravity area.
- `gravity`: The gravity area that you’re specifying the array of views for.  Valid values are those in the [NSStackView.Gravity](gravity.md) enumeration, according to the stack view’s layout direction.

<a id="Discussion"></a>

## Discussion

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Managing Views in Gravity Areas

- [addView(\_:in:)](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView(\_:at:in:)](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [removeView(\_:)](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackView.Gravity](gravity.md): The gravity areas available in a stack view.

# setViews:inGravity: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Specifies an array of views for a specified gravity area in the stack view, replacing any previous views in that area.

## Declaration

```objectivec
- (void) setViews:(NSArray<NSView *> *) views inGravity:(NSStackViewGravity) gravity;
```

## Parameters

- `views`: The array of views you are specifying for the gravity area.
- `gravity`: The gravity area that you’re specifying the array of views for.  Valid values are those in the [NSStackViewGravity](gravity.md) enumeration, according to the stack view’s layout direction.

<a id="Discussion"></a>

## Discussion

Calling this method updates the stack view’s layout, which can change the stack view size. As a result, views could detach or clip according to the clipping resistance of the stack view and the visibility priorities of its views.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory. To respond to detachment and reattachment of views, implement an [NSStackViewDelegate](../nsstackviewdelegate.md) object and assign it to the [delegate](delegate.md) property.

## See Also

### Managing Views in Gravity Areas

- [addView:inGravity:](addview%28__in_%29.md): Adds a view to the end of the stack view gravity area.
- [insertView:atIndex:inGravity:](insertview%28__at_in_%29.md): Adds a view to a stack view gravity area at a specified index position.
- [removeView:](removeview%28__%29.md): Removes a specified view from the stack view.
- [NSStackViewGravity](gravity.md): The gravity areas available in a stack view.
