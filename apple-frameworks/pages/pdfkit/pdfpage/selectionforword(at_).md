> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/selectionforword(at:)](https://developer.apple.com/documentation/pdfkit/pdfpage/selectionforword(at:))

# selectionForWord(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the whole word that includes the specified point.

## Declaration

```swift
func selectionForWord(at point: CGPoint) -> PDFSelection?
```

```swift
func selectionForWord(at point: NSPoint) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no word contains `point`.

Use this method to respond to a double-click.

## See Also

### Working with Selections

- [selection(for:)](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForLine(at:)](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selection(from:to:)](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selection(for:)](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

# selectionForWordAtPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the whole word that includes the specified point.

## Declaration

```objectivec
- (PDFSelection *) selectionForWordAtPoint:(CGPoint) point;
```

```objectivec
- (PDFSelection *) selectionForWordAtPoint:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no word contains `point`.

Use this method to respond to a double-click.

## See Also

### Working with Selections

- [selectionForRect:](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForLineAtPoint:](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selectionFromPoint:toPoint:](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selectionForRange:](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.
