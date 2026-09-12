> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/bounds(for:)](https://developer.apple.com/documentation/pdfkit/pdfselection/bounds(for:))

# bounds(for:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds of the selection on the specified page.

## Declaration

```swift
func bounds(for page: PDFPage) -> CGRect
```

```swift
func bounds(for page: PDFPage) -> NSRect
```

<a id="Discussion"></a>

## Discussion

The selection rectangle is given in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [selectionsByLine()](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# boundsForPage: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the bounds of the selection on the specified page.

## Declaration

```objectivec
- (CGRect) boundsForPage:(PDFPage *) page;
```

```objectivec
- (NSRect) boundsForPage:(PDFPage *) page;
```

<a id="Discussion"></a>

## Discussion

The selection rectangle is given in page space.

Page space is a 72 dpi coordinate system with the origin at the lower-left corner of the current page.

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [selectionsByLine](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
