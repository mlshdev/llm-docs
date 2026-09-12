> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsmatrix/mode-swift.enum](https://developer.apple.com/documentation/appkit/nsmatrix/mode-swift.enum)

# NSMatrix.Mode (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants determine how [NSCell](../nscell.md) objects behave when an [NSMatrix](../nsmatrix.md) object is tracking the mouse.

## Declaration

```swift
enum Mode
```

## Topics

### Constants

- [NSMatrix.Mode.trackModeMatrix](mode-swift.enum/trackmodematrix.md): The [NSCell](../nscell.md) objects are asked to track the mouse with [trackMouse(with:in:of:untilMouseUp:)](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSMatrix.Mode.highlightModeMatrix](mode-swift.enum/highlightmodematrix.md): An [NSCell](../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.
- [NSMatrix.Mode.radioModeMatrix](mode-swift.enum/radiomodematrix.md): Selects no more than one [NSCell](../nscell.md) at a time.
- [NSMatrix.Mode.listModeMatrix](mode-swift.enum/listmodematrix.md): [NSCell](../nscell.md) objects are highlighted, but don’t track the mouse.

### Initializers

- [init(rawValue:)](mode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSMatrixMode (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

These constants determine how [NSCell](../nscell.md) objects behave when an [NSMatrix](../nsmatrix.md) object is tracking the mouse.

## Declaration

```objectivec
enum NSMatrixMode : NSUInteger;
```

## Topics

### Constants

- [NSTrackModeMatrix](mode-swift.enum/trackmodematrix.md): The [NSCell](../nscell.md) objects are asked to track the mouse with [trackMouse:inRect:ofView:untilMouseUp:](../nscell/trackmouse%28with_in_of_untilmouseup_%29.md) whenever the cursor is inside their bounds. No highlighting is performed.
- [NSHighlightModeMatrix](mode-swift.enum/highlightmodematrix.md): An [NSCell](../nscell.md) is highlighted before it’s asked to track the mouse, then unhighlighted when it’s done tracking.
- [NSRadioModeMatrix](mode-swift.enum/radiomodematrix.md): Selects no more than one [NSCell](../nscell.md) at a time.
- [NSListModeMatrix](mode-swift.enum/listmodematrix.md): [NSCell](../nscell.md) objects are highlighted, but don’t track the mouse.
