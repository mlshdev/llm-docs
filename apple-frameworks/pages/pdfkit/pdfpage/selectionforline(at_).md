> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/selectionforline(at:)](https://developer.apple.com/documentation/pdfkit/pdfpage/selectionforline(at:))

# selectionForLine(at:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the whole line of text that includes the specified point.

## Declaration

```swift
func selectionForLine(at point: CGPoint) -> PDFSelection?
```

```swift
func selectionForLine(at point: NSPoint) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no line of text contains `point`.

Use this method to respond to a triple-click.

## See Also

### Working with Selections

- [selection(for:)](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWord(at:)](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selection(from:to:)](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selection(for:)](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

# selectionForLineAtPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the whole line of text that includes the specified point.

## Declaration

```objectivec
- (PDFSelection *) selectionForLineAtPoint:(CGPoint) point;
```

```objectivec
- (PDFSelection *) selectionForLineAtPoint:(NSPoint) point;
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no line of text contains `point`.

Use this method to respond to a triple-click.

## See Also

### Working with Selections

- [selectionForRect:](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWordAtPoint:](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionFromPoint:toPoint:](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selectionForRange:](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.
