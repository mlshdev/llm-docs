> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/attributedstring](https://developer.apple.com/documentation/pdfkit/pdfselection/attributedstring)

# attributedString (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).

## Declaration

```swift
var attributedString: NSAttributedString? { get }
```

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine()](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.

# attributedString (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSAttributedString * attributedString;
```

## See Also

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](color.md): Sets the color used for the drawing of a selection in both active and inactive states.
