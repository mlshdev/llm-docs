> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/selection(for:)-2ckpi](https://developer.apple.com/documentation/pdfkit/pdfpage/selection(for:)-2ckpi)

# selection(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.

## Declaration

```swift
func selection(for rect: CGRect) -> PDFSelection?
```

```swift
func selection(for rect: NSRect) -> PDFSelection?
```

## See Also

### Working with Selections

- [selectionForWord(at:)](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLine(at:)](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selection(from:to:)](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selection(for:)](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

# selectionForRect: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.

## Declaration

```objectivec
- (PDFSelection *) selectionForRect:(CGRect) rect;
```

```objectivec
- (PDFSelection *) selectionForRect:(NSRect) rect;
```

## See Also

### Working with Selections

- [selectionForWordAtPoint:](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLineAtPoint:](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selectionFromPoint:toPoint:](selection%28from_to_%29.md): Returns the text between the two specified points in page space.
- [selectionForRange:](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.
