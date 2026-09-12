> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/updatefloatingcursor(at:)](https://developer.apple.com/documentation/uikit/uitextinput/updatefloatingcursor(at:))

# updateFloatingCursor(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object that the floating cursor moved to a new location.

## Declaration

```swift
optional func updateFloatingCursor(at point: CGPoint)
```

## Parameters

- `point`: The new touch point in the underlying view. This point is in the coordinate space of the view in the [textInputView](textinputview.md) property.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the touch location changes for the two-finger pan gesture used to move the cursor. You can use this method to update the visual state of your text view. For example, you might use this method to display custom visual feedback for cursor movements.This method may be called multiple times while the user’s fingers are moving, so your implementation should be fast. If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [beginFloatingCursor(at:)](beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [endFloatingCursor()](endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.

# updateFloatingCursorAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object that the floating cursor moved to a new location.

## Declaration

```objectivec
- (void) updateFloatingCursorAtPoint:(CGPoint) point;
```

## Parameters

- `point`: The new touch point in the underlying view. This point is in the coordinate space of the view in the [textInputView](textinputview.md) property.

<a id="Discussion"></a>

## Discussion

UIKit calls this method when the touch location changes for the two-finger pan gesture used to move the cursor. You can use this method to update the visual state of your text view. For example, you might use this method to display custom visual feedback for cursor movements.This method may be called multiple times while the user’s fingers are moving, so your implementation should be fast. If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [beginFloatingCursorAtPoint:](beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [endFloatingCursor](endfloatingcursor%28%29.md): Tells the object when the gesture that the system uses to manipulate the cursor ends.
