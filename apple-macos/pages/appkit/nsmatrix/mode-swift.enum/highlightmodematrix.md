> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mode-swift.enum/highlightmodematrix](https://developer.apple.com/documentation/appkit/nsmatrix/mode-swift.enum/highlightmodematrix)

# NSMatrix.Mode.highlightModeMatrix (Swift)

**Framework:** AppKit  
**Kind:** Case  
**Availability:** macOS

An [NSCell](../../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.

## Declaration

```swift
case highlightModeMatrix
```

## See Also

### Constants

- [NSMatrix.Mode.trackModeMatrix](trackmodematrix.md): The [NSCell](../../nscell.md) objects are asked to track the mouse with [trackMouse(with:in:of:untilMouseUp:)](../../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSMatrix.Mode.radioModeMatrix](radiomodematrix.md): Selects no more than one [NSCell](../../nscell.md) at a time.
- [NSMatrix.Mode.listModeMatrix](listmodematrix.md): [NSCell](../../nscell.md) objects are highlighted, but don’t track the mouse.

# NSHighlightModeMatrix (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

An [NSCell](../../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.

## Declaration

```objectivec
NSHighlightModeMatrix
```

## See Also

### Constants

- [NSTrackModeMatrix](trackmodematrix.md): The [NSCell](../../nscell.md) objects are asked to track the mouse with [trackMouse:inRect:ofView:untilMouseUp:](../../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSRadioModeMatrix](radiomodematrix.md): Selects no more than one [NSCell](../../nscell.md) at a time.
- [NSListModeMatrix](listmodematrix.md): [NSCell](../../nscell.md) objects are highlighted, but don’t track the mouse.
