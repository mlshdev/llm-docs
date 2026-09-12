> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/selectall(_:)](https://developer.apple.com/documentation/pdfkit/pdfview/selectall(_:))

# selectAll(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Selects all text in the document.

## Declaration

```swift
@IBAction func selectAll(_ sender: Any?)
```

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection(\_:animate:)](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [clearSelection()](clearselection%28%29.md): Clears the selection.
- [copy(\_:)](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

# selectAll: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Selects all text in the document.

## Declaration

```objectivec
- (void) selectAll:(id) sender;
```

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection:animate:](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [clearSelection](clearselection%28%29.md): Clears the selection.
- [copy:](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.
