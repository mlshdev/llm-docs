> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/pages](https://developer.apple.com/documentation/pdfkit/pdfselection/pages)

# pages (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the array of pages contained in the selection.

## Declaration

```swift
var pages: [PDFPage] { get }
```

<a id="Discussion"></a>

## Discussion

Pages are sorted by index number.

## See Also

### Getting Information About a Selection

- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine()](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# pages (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns the array of pages contained in the selection.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<PDFPage *> * pages;
```

<a id="Discussion"></a>

## Discussion

Pages are sorted by index number.

## See Also

### Getting Information About a Selection

- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
