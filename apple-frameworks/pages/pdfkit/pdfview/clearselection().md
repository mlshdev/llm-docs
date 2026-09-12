> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/clearselection()](https://developer.apple.com/documentation/pdfkit/pdfview/clearselection())

# clearSelection() (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Clears the selection.

## Declaration

```swift
func clearSelection()
```

<a id="Discussion"></a>

## Discussion

The view redraws as necessary but does not scroll. This call is equivalent to calling `[PDFView setCurrentSelection:NULL].`

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection(\_:animate:)](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll(\_:)](selectall%28__%29.md): Selects all text in the document.
- [copy(\_:)](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

# clearSelection (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Clears the selection.

## Declaration

```objectivec
- (void) clearSelection;
```

<a id="Discussion"></a>

## Discussion

The view redraws as necessary but does not scroll. This call is equivalent to calling `[PDFView setCurrentSelection:NULL].`

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [setCurrentSelection:animate:](setcurrentselection%28__animate_%29.md): Sets the current selection, in an animated way, if desired.
- [selectAll:](selectall%28__%29.md): Selects all text in the document.
- [copy:](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.
