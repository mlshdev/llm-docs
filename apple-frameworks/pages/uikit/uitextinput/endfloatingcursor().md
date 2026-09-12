> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/endfloatingcursor()](https://developer.apple.com/documentation/uikit/uitextinput/endfloatingcursor())

# endFloatingCursor() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when the gesture that the system uses to manipulate the cursor ends.

## Declaration

```swift
optional func endFloatingCursor()
```

<a id="Discussion"></a>

## Discussion

UIKit calls this method at the end of the two-finger pan gesture used to pick up the cursor. You can use this method to clean up the visual state of your text view.

If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [beginFloatingCursor(at:)](beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [updateFloatingCursor(at:)](updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.

# endFloatingCursor (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Tells the object when the gesture that the system uses to manipulate the cursor ends.

## Declaration

```objectivec
- (void) endFloatingCursor;
```

<a id="Discussion"></a>

## Discussion

UIKit calls this method at the end of the two-finger pan gesture used to pick up the cursor. You can use this method to clean up the visual state of your text view.

If you do not implement this method, UIKit provides visual feedback only when the selection changes.

## See Also

### Managing the floating cursor

- [beginFloatingCursorAtPoint:](beginfloatingcursor%28at_%29.md): Tells the object when the gesture that the system uses to manipulate the cursor begins.
- [updateFloatingCursorAtPoint:](updatefloatingcursor%28at_%29.md): Tells the object that the floating cursor moved to a new location.
