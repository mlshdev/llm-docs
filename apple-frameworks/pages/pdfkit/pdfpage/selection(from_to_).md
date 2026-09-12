> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfpage/selection(from:to:)](https://developer.apple.com/documentation/pdfkit/pdfpage/selection(from:to:))

# selection(from:to:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text between the two specified points in page space.

## Declaration

```swift
func selection(from startPoint: CGPoint, to endPoint: CGPoint) -> PDFSelection?
```

```swift
func selection(from startPoint: NSPoint, to endPoint: NSPoint) -> PDFSelection?
```

<a id="Discussion"></a>

## Discussion

Either point may be the one closer to the start of the page. In determining the selection, the points are sorted first top to bottom and then left to right.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

To visualize the selection, picture the rectangle defined by `startPoint` and `endPoint`. The selection begins at the first character fully within the defined rectangle and closest to its upper-left corner. The selection ends at the last character fully within the defined rectangle and closest to its lower-right corner.

## See Also

### Working with Selections

- [selection(for:)](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWord(at:)](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLine(at:)](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selection(for:)](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.

# selectionFromPoint:toPoint: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the text between the two specified points in page space.

## Declaration

```objectivec
- (PDFSelection *) selectionFromPoint:(CGPoint) startPoint toPoint:(CGPoint) endPoint;
```

```objectivec
- (PDFSelection *) selectionFromPoint:(NSPoint) startPoint toPoint:(NSPoint) endPoint;
```

<a id="Discussion"></a>

## Discussion

Either point may be the one closer to the start of the page. In determining the selection, the points are sorted first top to bottom and then left to right.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

To visualize the selection, picture the rectangle defined by `startPoint` and `endPoint`. The selection begins at the first character fully within the defined rectangle and closest to its upper-left corner. The selection ends at the last character fully within the defined rectangle and closest to its lower-right corner.

## See Also

### Working with Selections

- [selectionForRect:](selection%28for_%29-2ckpi.md): Returns the text enclosed within the specified rectangle, expressed in page (user) coordinates.
- [selectionForWordAtPoint:](selectionforword%28at_%29.md): Returns the whole word that includes the specified point.
- [selectionForLineAtPoint:](selectionforline%28at_%29.md): Returns the whole line of text that includes the specified point.
- [selectionForRange:](selection%28for_%29-20y9d.md): Returns the text contained within the specified range.
