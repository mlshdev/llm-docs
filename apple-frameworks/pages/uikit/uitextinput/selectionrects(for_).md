> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/selectionrects(for:)](https://developer.apple.com/documentation/uikit/uitextinput/selectionrects(for:))

# selectionRects(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of selection rects corresponding to the range of text.

## Declaration

```swift
func selectionRects(for range: UITextRange) -> [UITextSelectionRect]
```

## Parameters

- `range`: An object representing a range in a document’s text.

<a id="return-value"></a>

## Return Value

An array of [UITextSelectionRect](../uitextselectionrect.md) objects that encompass the selection.

## See Also

### Working with geometry and hit-testing

- [firstRect(for:)](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPosition(to:)](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [closestPosition(to:within:)](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRange(at:)](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.

# selectionRectsForRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns an array of selection rects corresponding to the range of text.

## Declaration

```objectivec
- (NSArray<UITextSelectionRect *> *) selectionRectsForRange:(UITextRange *) range;
```

## Parameters

- `range`: An object representing a range in a document’s text.

<a id="return-value"></a>

## Return Value

An array of [UITextSelectionRect](../uitextselectionrect.md) objects that encompass the selection.

## See Also

### Working with geometry and hit-testing

- [firstRectForRange:](firstrect%28for_%29.md): Returns the first rectangle that encloses a range of text in a document.
- [closestPositionToPoint:](closestposition%28to_%29.md): Returns the position in a document that is closest to a specified point.
- [closestPositionToPoint:withinRange:](closestposition%28to_within_%29.md): Returns the position in a document that is closest to a specified point in a specified range.
- [characterRangeAtPoint:](characterrange%28at_%29.md): Returns the character or range of characters that is at a specified point in a document.
