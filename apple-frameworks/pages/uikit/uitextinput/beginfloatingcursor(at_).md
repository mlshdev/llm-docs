> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/beginfloatingcursor(at:)](https://developer.apple.com/documentation/uikit/uitextinput/beginfloatingcursor(at:))

# beginFloatingCursor(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when the gesture that the system uses to manipulate the cursor begins.

## Declaration

```swift
optional func beginFloatingCursor(at point: CGPoint)
```

## Parameters

- `point`: The point at which the gesture occurred in your view. This point is in the coordinate space of the view in the [textInputView](textinputview.md) property.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user begins to perform a two-finger pan gesture to pick up the cursor. You can use this method to update the visual state of your text view. For example, you might use this method to display custom visual feedback for cursor movements.

If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [updateFloatingCursor(at:)](updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.
- [endFloatingCursor()](endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.

# beginFloatingCursorAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when the gesture that the system uses to manipulate the cursor begins.

## Declaration

```objectivec
- (void) beginFloatingCursorAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The point at which the gesture occurred in your view. This point is in the coordinate space of the view in the [textInputView](textinputview.md) property.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the user begins to perform a two-finger pan gesture to pick up the cursor. You can use this method to update the visual state of your text view. For example, you might use this method to display custom visual feedback for cursor movements.

If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [updateFloatingCursorAtPoint:](updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.
- [endFloatingCursor](endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.
