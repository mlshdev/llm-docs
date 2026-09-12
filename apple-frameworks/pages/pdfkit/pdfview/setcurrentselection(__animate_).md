> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfview/setcurrentselection(_:animate:)](https://developer.apple.com/documentation/pdfkit/pdfview/setcurrentselection(_:animate:))

# setCurrentSelection(\_:animate:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the current selection, in an animated way, if desired.

## Declaration

```swift
func setCurrentSelection(_ selection: PDFSelection?, animate: Bool)
```

<a id="Discussion"></a>

## Discussion

This method behaves as `setCurrentSelection(_:)`, but with the addition of animation, if `animate` is [true](https://developer.apple.com/documentation/swift/true). The animation serves to draw the user’s attention to the new selection, which can be useful when implementing search.

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [selectAll(\_:)](selectall%28__%29.md): Selects all text in the document.
- [clearSelection()](clearselection%28%29.md): Clears the selection.
- [copy(\_:)](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible(\_:)](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.

# setCurrentSelection:animate: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Sets the current selection, in an animated way, if desired.

## Declaration

```objectivec
- (void) setCurrentSelection:(PDFSelection *) selection animate:(BOOL) animate;
```

<a id="Discussion"></a>

## Discussion

This method behaves as `setCurrentSelection(_:)`, but with the addition of animation, if `animate` is [true](https://developer.apple.com/documentation/swift/true). The animation serves to draw the user’s attention to the new selection, which can be useful when implementing search.

## See Also

### Handling Selections

- [currentSelection](currentselection.md): The current selection.
- [selectAll:](selectall%28__%29.md): Selects all text in the document.
- [clearSelection](clearselection%28%29.md): Clears the selection.
- [copy:](copy%28__%29.md): Copies the text in the selection, if any, to the Pasteboard.
- [scrollSelectionToVisible:](scrollselectiontovisible%28__%29.md): Scrolls the view until the selection is visible.
- [highlightedSelections](highlightedselections.md): Returns the array of selections that are highlighted using `setHighlightedSelections`.
