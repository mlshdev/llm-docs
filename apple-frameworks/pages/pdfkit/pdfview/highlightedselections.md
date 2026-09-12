> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/highlightedselections](https://developer.apple.com/documentation/pdfkit/pdfview/highlightedselections)

# highlightedSelections (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the array of selections that are highlighted using `setHighlightedSelections`.

## Declaration

```swift
var highlightedSelections: [PDFSelection]? { get set }
```

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection(\_:animate:)](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll(\_:)](selectall%28__%29.md): Selects all text in the document.
- [clearSelection()](clearselection%28%29.md): Clears the selection.
- [copy(\_:)](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.

# highlightedSelections (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Returns the array of selections that are highlighted using `setHighlightedSelections`.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<PDFSelection *> * highlightedSelections;
```

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection:animate:](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll:](selectall%28__%29.md): Selects all text in the document.
- [clearSelection](clearselection%28%29.md): Clears the selection.
- [copy:](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
