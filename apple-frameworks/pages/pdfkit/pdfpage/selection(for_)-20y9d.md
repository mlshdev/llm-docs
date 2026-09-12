> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/selection(for:)-20y9d](https://developer.apple.com/documentation/pdfkit/pdfpage/selection(for:)-20y9d)

# selection(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text contained within the specified range.

## Declaration

```swift
func selection(for range: NSRange) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if the range length is `0` or if either end of the range is outside the range of characters on the page.

## See Also

### Working with Selections

- [selection(for:)](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWord(at:)](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLine(at:)](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selection(from:to:)](selection%28from_to_%29.md): Returns the text between the two specified points in page space.

# selectionForRange: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text contained within the specified range.

## Declaration

```objectivec
- (PDFSelection *) selectionForRange:(NSRange) range;
```

<a id="Discussion"></a>

## Discussion

This method raises an exception if the range length is `0` or if either end of the range is outside the range of characters on the page.

## See Also

### Working with Selections

- [selectionForRect:](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWordAtPoint:](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLineAtPoint:](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selectionFromPoint:toPoint:](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
