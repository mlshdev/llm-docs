> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection](https://developer.apple.com/documentation/pdfkit/pdfselection)

# PDFSelection (Swift)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

## Declaration

```swift
class PDFSelection
```

## Topics

### Initializing a Selection

- [init(document:)](pdfselection/init%28document_%29.md): Returns an empty `PDFSelection` object.

### Getting Information About a Selection

- [pages](pdfselection/pages.md): Returns the array of pages contained in the selection.
- [string](pdfselection/string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](pdfselection/attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [bounds(for:)](pdfselection/bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine()](pdfselection/selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](pdfselection/color.md): Sets the color used for the drawing of a selection in both active and inactive states.

### Modifying a Selection

- [add(\_:)](pdfselection/add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [add(\_:)](pdfselection/add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extend(atEnd:)](pdfselection/extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extend(atStart:)](pdfselection/extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.

### Managing Selection Drawing

- [draw(for:active:)](pdfselection/draw%28for_active_%29.md): Calls [draw(for:with:active:)](pdfselection/draw%28for_with_active_%29.md) with a default value for box parameter.
- [draw(for:with:active:)](pdfselection/draw%28for_with_active_%29.md): Draws the selection relative to the origin of the specified box in page space.
- [color](pdfselection/color.md): Sets the color used for the drawing of a selection in both active and inactive states.

### Instance Methods

- [extendForLineBoundaries()](pdfselection/extendforlineboundaries%28%29.md)
- [numberOfTextRanges(on:)](pdfselection/numberoftextranges%28on_%29.md)
- [range(at:on:)](pdfselection/range%28at_on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFPage](pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.
- [PDFOutline](pdfoutline.md): A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.

# PDFSelection (Objective-C)

**Framework:** PDFKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

## Declaration

```objectivec
@interface PDFSelection : NSObject
```

## Topics

### Initializing a Selection

- [initWithDocument:](pdfselection/init%28document_%29.md): Returns an empty `PDFSelection` object.

### Getting Information About a Selection

- [pages](pdfselection/pages.md): Returns the array of pages contained in the selection.
- [string](pdfselection/string.md): Returns an `NSString` object representing the text contained in the selection (may contain linefeed characters).
- [attributedString](pdfselection/attributedstring.md): Returns an `NSAttributedString` object representing the text contained in the selection (may contain linefeed characters).
- [boundsForPage:](pdfselection/bounds%28for_%29.md): Returns the bounds of the selection on the specified page.
- [selectionsByLine](pdfselection/selectionsbyline%28%29.md): Returns an array of selections, one for each line of text covered by the receiver.
- [color](pdfselection/color.md): Sets the color used for the drawing of a selection in both active and inactive states.

### Modifying a Selection

- [addSelection:](pdfselection/add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [addSelections:](pdfselection/add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extendSelectionAtEnd:](pdfselection/extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extendSelectionAtStart:](pdfselection/extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.

### Managing Selection Drawing

- [drawForPage:active:](pdfselection/draw%28for_active_%29.md): Calls [drawForPage:withBox:active:](pdfselection/draw%28for_with_active_%29.md) with a default value for box parameter.
- [drawForPage:withBox:active:](pdfselection/draw%28for_with_active_%29.md): Draws the selection relative to the origin of the specified box in page space.
- [color](pdfselection/color.md): Sets the color used for the drawing of a selection in both active and inactive states.

### Instance Methods

- [extendSelectionForLineBoundaries](pdfselection/extendforlineboundaries%28%29.md)
- [numberOfTextRangesOnPage:](pdfselection/numberoftextranges%28on_%29.md)
- [rangeAtIndex:onPage:](pdfselection/range%28at_on_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Content Model

- [PDFDocument](pdfdocument.md): An object that represents PDF data or a PDF file and defines methods for writing, searching, and selecting PDF data.
- [PDFPage](pdfpage.md): `PDFPage`, a subclass of `NSObject`, defines methods used to render PDF pages and work with annotations, text, and selections.
- [PDFOutline](pdfoutline.md): A `PDFOutline` object is an element in a tree-structured hierarchy that can represent the structure of a PDF document.
