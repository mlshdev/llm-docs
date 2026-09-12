> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/firstrect(for:)](https://developer.apple.com/documentation/uikit/uitextinput/firstrect(for:))

# firstRect(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the first rectangle that encloses a range of text in a document.

## Declaration

```swift
func firstRect(for range: UITextRange) -> CGRect
```

## Parameters

- `range`: An object that represents a range of text in a document.

<a id="return-value"></a>

## Return Value

The first rectangle in a `range` of text. You might use this rectangle to draw a correction rectangle. The “first” in the name refers the rectangle enclosing the first line when the range encompasses multiple lines of text.

## See Also

### Related Documentation

- [caretRect(for:)](caretrect%28for_%29.md): Returns a rectangle to draw the caret at a specified insertion point.

### Working with geometry and hit-testing

- [closestPosition(to:)](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRects(for:)](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPosition(to:within:)](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRange(at:)](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.

# firstRectForRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the first rectangle that encloses a range of text in a document.

## Declaration

```objectivec
- (CGRect) firstRectForRange:(UITextRange *) range;
```

## Parameters

- `range`: An object that represents a range of text in a document.

<a id="return-value"></a>

## Return Value

The first rectangle in a `range` of text. You might use this rectangle to draw a correction rectangle. The “first” in the name refers the rectangle enclosing the first line when the range encompasses multiple lines of text.

## See Also

### Related Documentation

- [caretRectForPosition:](caretrect%28for_%29.md): Returns a rectangle to draw the caret at a specified insertion point.

### Working with geometry and hit-testing

- [closestPositionToPoint:](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRectsForRange:](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPositionToPoint:withinRange:](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRangeAtPoint:](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.
