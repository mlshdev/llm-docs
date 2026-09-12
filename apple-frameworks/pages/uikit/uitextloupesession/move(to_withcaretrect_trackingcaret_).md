> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextloupesession/move(to:withcaretrect:trackingcaret:)](https://developer.apple.com/documentation/uikit/uitextloupesession/move(to:withcaretrect:trackingcaret:))

# move(to:withCaretRect:trackingCaret:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Moves the loupe to the specified point in the session’s associated view.

## Declaration

```swift
func move(to point: CGPoint, withCaretRect caretRect: CGRect, trackingCaret tracksCaret: Bool)
```

## Parameters

- `point`: The new location you want to magnify with the loupe. When creating the loupe with a gesture recognizer, specify the location of the gesture.
- `caretRect`: The current position of the caret handle. Specify [CGRectNull](../../coregraphics/cgrectnull.md) if the view doesn’t contain a selection or the caret isn’t visible.
- `tracksCaret`: `true` if you want the loupe to track the movements of the caret. If you specify `true`, provide a valid rectangle in the `caretRect` parameter. Specify `false` to continue tracking the location of touch events.

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method repeatedly from a gesture recognizer when the touch location changes.

## See Also

### Updating the loupe during the session

- [invalidate()](invalidate%28%29.md): Hides the loupe and cleans up any session-related state.

# moveToPoint:withCaretRect:trackingCaret: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+

Moves the loupe to the specified point in the session’s associated view.

## Declaration

```objectivec
- (void) moveToPoint:(CGPoint) point withCaretRect:(CGRect) caretRect trackingCaret:(BOOL) tracksCaret;
```

## Parameters

- `point`: The new location you want to magnify with the loupe. When creating the loupe with a gesture recognizer, specify the location of the gesture.
- `caretRect`: The current position of the caret handle. Specify [CGRectNull](../../coregraphics/cgrectnull.md) if the view doesn’t contain a selection or the caret isn’t visible.
- `tracksCaret`: `true` if you want the loupe to track the movements of the caret. If you specify `true`, provide a valid rectangle in the `caretRect` parameter. Specify `false` to continue tracking the location of touch events.

## Mentioned In

- [Adopting system selection UI in custom text views](../adopting-system-selection-ui-in-custom-text-views.md)

<a id="Discussion"></a>

## Discussion

Call this method repeatedly from a gesture recognizer when the touch location changes.

## See Also

### Updating the loupe during the session

- [invalidate](invalidate%28%29.md): Hides the loupe and cleans up any session-related state.
