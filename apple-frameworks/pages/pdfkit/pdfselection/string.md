> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/string](https://developer.apple.com/documentation/pdfkit/pdfselection/string)

# string (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).

## Declaration

```swift
var string: String? { get }
```

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine()](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# string (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * string;
```

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
