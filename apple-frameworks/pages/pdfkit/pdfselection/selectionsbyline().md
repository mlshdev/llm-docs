> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/selectionsbyline()](https://developer.apple.com/documentation/pdfkit/pdfselection/selectionsbyline())

# selectionsByLine() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of selections, one for each line of text covered by the receiver.

## Declaration

```swift
func selectionsByLine() -> [PDFSelection]
```

<a id="Discussion"></a>

## Discussion

If you call this method on a `PDFSelection` object that represents a paragraph, for example, `selectionsByLine` returns an array that contains one `PDFSelection` object for each line of text in the paragraph.

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# selectionsByLine (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns an array of selections, one for each line of text covered by the receiver.

## Declaration

```objectivec
- (NSArray<PDFSelection *> *) selectionsByLine;
```

<a id="Discussion"></a>

## Discussion

If you call this method on a `PDFSelection` object that represents a paragraph, for example, `selectionsByLine` returns an array that contains one `PDFSelection` object for each line of text in the paragraph.

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
