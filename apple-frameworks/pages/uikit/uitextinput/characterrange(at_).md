> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/characterrange(at:)](https://developer.apple.com/documentation/uikit/uitextinput/characterrange(at:))

# characterRange(at:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the character or range of characters that is at a specified point in a document.

## Declaration

```swift
func characterRange(at point: CGPoint) -> UITextRange?
```

## Parameters

- `point`: A point in the view that is drawing a document’s text.

<a id="return-value"></a>

## Return Value

An object representing a range that encloses a character (or characters) at `point`.

## See Also

### Working with geometry and hit-testing

- [firstRect(for:)](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPosition(to:)](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRects(for:)](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPosition(to:within:)](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.

# characterRangeAtPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the character or range of characters that is at a specified point in a document.

## Declaration

```objectivec
- (UITextRange *) characterRangeAtPoint:(CGPoint) point;
```

## Parameters

- `point`: A point in the view that is drawing a document’s text.

<a id="return-value"></a>

## Return Value

An object representing a range that encloses a character (or characters) at `point`.

## See Also

### Working with geometry and hit-testing

- [firstRectForRange:](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPositionToPoint:](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRectsForRange:](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [closestPositionToPoint:withinRange:](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
