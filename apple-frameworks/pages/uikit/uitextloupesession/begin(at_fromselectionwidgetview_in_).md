> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextloupesession/begin(at:fromselectionwidgetview:in:)](https://developer.apple.com/documentation/uikit/uitextloupesession/begin(at:fromselectionwidgetview:in:))

# begin(at:fromSelectionWidgetView:in:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Creates a new loupe session and displays the loupe at the specified location in your view.

## Declaration

```swift
class func begin(at point: CGPoint, fromSelectionWidgetView selectionWidget: UIView?, in interactionView: UIView) -> Self?
```

## Parameters

- `point`: The point in your view’s coordinate system that you want to magnify using the loupe. When creating the loupe with a gesture recognizer, specify the location of the gesture.
- `selectionWidget`: The view associated with the insertion point. When using a [UITextSelectionDisplayInteraction](../uitextselectiondisplayinteraction.md) object to display selections in your view, specify the view in the interaction object’s [cursorView](../uitextselectiondisplayinteraction/cursorview.md) property for this parameter.
- `interactionView`: The view in which to display the loupe. Specify all coordinate values relative to this view.

<a id="return-value"></a>

## Return Value

A new loupe session for the specified view. The method returns `nil` if showing the loupe is inappropriate in the current context.

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method to animate the appearance of the loupe at the specified `point` in `interactionView`.  Store a strong reference to this returned session and use it to update the position of the loupe. To hide the loupe again, call [invalidate()](invalidate%28%29.md) and then remove your reference to the session.

# beginLoupeSessionAtPoint:fromSelectionWidgetView:inView: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Creates a new loupe session and displays the loupe at the specified location in your view.

## Declaration

```objectivec
+ (instancetype) beginLoupeSessionAtPoint:(CGPoint) point fromSelectionWidgetView:(UIView *) selectionWidget inView:(UIView *) interactionView;
```

## Parameters

- `point`: The point in your view’s coordinate system that you want to magnify using the loupe. When creating the loupe with a gesture recognizer, specify the location of the gesture.
- `selectionWidget`: The view associated with the insertion point. When using a [UITextSelectionDisplayInteraction](../uitextselectiondisplayinteraction.md) object to display selections in your view, specify the view in the interaction object’s [cursorView](../uitextselectiondisplayinteraction/cursorview.md) property for this parameter.
- `interactionView`: The view in which to display the loupe. Specify all coordinate values relative to this view.

<a id="return-value"></a>

## Return Value

A new loupe session for the specified view. The method returns `nil` if showing the loupe is inappropriate in the current context.

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method to animate the appearance of the loupe at the specified `point` in `interactionView`.  Store a strong reference to this returned session and use it to update the position of the loupe. To hide the loupe again, call [invalidate](invalidate%28%29.md) and then remove your reference to the session.
