> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/closestposition(to:within:)](https://developer.apple.com/documentation/uikit/uitextinput/closestposition(to:within:))

# closestPosition(to:within:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the position in a document that is closest to a specified point in a specified range.

## Declaration

```swift
func closestPosition(to point: CGPoint, within range: UITextRange) -> UITextPosition?
```

## Parameters

- `point`: A point in the view that is drawing a document’s text.
- `range`: An object representing a range in a document’s text.

<a id="return-value"></a>

## Return Value

An object representing the character position in `range` that is closest to `point`.

## See Also

### Working with geometry and hit-testing

- [firstRect(for:)](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPosition(to:)](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRects(for:)](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [characterRange(at:)](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.

# closestPositionToPoint:withinRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the position in a document that is closest to a specified point in a specified range.

## Declaration

```objectivec
- (UITextPosition *) closestPositionToPoint:(CGPoint) point withinRange:(UITextRange *) range;
```

## Parameters

- `point`: A point in the view that is drawing a document’s text.
- `range`: An object representing a range in a document’s text.

<a id="return-value"></a>

## Return Value

An object representing the character position in `range` that is closest to `point`.

## See Also

### Working with geometry and hit-testing

- [firstRectForRange:](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPositionToPoint:](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [selectionRectsForRange:](selectionrects%28for_%29.md): Returns an array of selection rects corresponding to the range of text.
- [characterRangeAtPoint:](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.
