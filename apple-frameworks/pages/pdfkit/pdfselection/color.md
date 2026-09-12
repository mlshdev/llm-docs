> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/color](https://developer.apple.com/documentation/pdfkit/pdfselection/color)

# color (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the color used for the drawing of a selection in both active and inactive states.

## Declaration

```swift
@NSCopying var color: UIColor? { get set }
```

```swift
@NSCopying var color: NSColor? { get set }
```

<a id="Discussion"></a>

## Discussion

When no color has been specified for the `PDFSelection` objects in a document, the selections are drawn using `[NSColor selectedTextBackgroundColor]` for the active state and `[NSColor secondarySelectedControlColor]` for the inactive state. Use the `setColor` method to supply a color you want to be used for the drawing of both active and inactive selections.

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine()](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.

# color (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the color used for the drawing of a selection in both active and inactive states.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIColor * color;
```

```objectivec
@property (nonatomic, copy, nullable) NSColor * color;
```

<a id="Discussion"></a>

## Discussion

When no color has been specified for the `PDFSelection` objects in a document, the selections are drawn using `[NSColor selectedTextBackgroundColor]` for the active state and `[NSColor secondarySelectedControlColor]` for the inactive state. Use the `setColor` method to supply a color you want to be used for the drawing of both active and inactive selections.

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Getting Information About a Selection

- [pages](pages.md): Returns the array of pages contained in the selection.
- [string](string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine](selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
