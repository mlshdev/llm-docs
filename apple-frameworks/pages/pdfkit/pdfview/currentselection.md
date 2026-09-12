> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/currentselection](https://developer.apple.com/documentation/pdfkit/pdfview/currentselection)

# currentSelection (Swift)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The current selection.

## Declaration

```swift
var currentSelection: PDFSelection? { get set }
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no selection exists.

Note that this method returns the actual instance of the current `PDFSelection` object. Therefore, if you want to modify it, you should make a copy of the returned selection and modify that, instead.

## See Also

### Handling Selections

- [setCurrentSelection(\_:animate:)](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll(\_:)](selectall%28__%29.md): Selects all text in the document.
- [clearSelection()](clearselection%28%29.md): Clears the selection.
- [copy(\_:)](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

# currentSelection (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

The current selection.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PDFSelection * currentSelection;
```

<a id="Discussion"></a>

## Discussion

Returns `NULL` if no selection exists.

Note that this method returns the actual instance of the current `PDFSelection` object. Therefore, if you want to modify it, you should make a copy of the returned selection and modify that, instead.

## See Also

### Handling Selections

- [setCurrentSelection:animate:](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll:](selectall%28__%29.md): Selects all text in the document.
- [clearSelection](clearselection%28%29.md): Clears the selection.
- [copy:](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.
