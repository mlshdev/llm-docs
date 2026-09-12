> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mode-swift.enum/radiomodematrix](https://developer.apple.com/documentation/appkit/nsmatrix/mode-swift.enum/radiomodematrix)

# NSMatrix.Mode.radioModeMatrix (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

Selects no more than one [NSCell](../../nscell.md) at a time.

## Declaration

```swift
case radioModeMatrix
```

<a id="Discussion"></a>

## Discussion

Any time an [NSCell](../../nscell.md) is selected, the previously selected [NSCell](../../nscell.md) is unselected.

## See Also

### Constants

- [NSMatrix.Mode.trackModeMatrix](trackmodematrix.md): The [NSCell](../../nscell.md) objects are asked to track the mouse with [trackMouse(with:in:of:untilMouseUp:)](../../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSMatrix.Mode.highlightModeMatrix](highlightmodematrix.md): An [NSCell](../../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.
- [NSMatrix.Mode.listModeMatrix](listmodematrix.md): [NSCell](../../nscell.md) objects are highlighted, but don’t track the mouse.

# NSRadioModeMatrix (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Selects no more than one [NSCell](../../nscell.md) at a time.

## Declaration

```objectivec
NSRadioModeMatrix
```

<a id="Discussion"></a>

## Discussion

Any time an [NSCell](../../nscell.md) is selected, the previously selected [NSCell](../../nscell.md) is unselected.

## See Also

### Constants

- [NSTrackModeMatrix](trackmodematrix.md): The [NSCell](../../nscell.md) objects are asked to track the mouse with [trackMouse:inRect:ofView:untilMouseUp:](../../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSHighlightModeMatrix](highlightmodematrix.md): An [NSCell](../../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.
- [NSListModeMatrix](listmodematrix.md): [NSCell](../../nscell.md) objects are highlighted, but don’t track the mouse.
