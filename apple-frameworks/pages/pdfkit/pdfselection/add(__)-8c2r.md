> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/add(_:)-8c2r](https://developer.apple.com/documentation/pdfkit/pdfselection/add(_:)-8c2r)

# add(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Adds the specified selection to the receiving selection.

## Declaration

```swift
func add(_ selection: PDFSelection)
```

<a id="Discussion"></a>

## Discussion

Selections do not have to be contiguous. If the selection to be added overlaps with the receiving selection, the overlap is removed in a process called normalization.

## See Also

### Modifying a Selection

- [add(\_:)](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extend(atEnd:)](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extend(atStart:)](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.

# addSelection: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Adds the specified selection to the receiving selection.

## Declaration

```objectivec
- (void) addSelection:(PDFSelection *) selection;
```

<a id="Discussion"></a>

## Discussion

Selections do not have to be contiguous. If the selection to be added overlaps with the receiving selection, the overlap is removed in a process called normalization.

## See Also

### Modifying a Selection

- [addSelections:](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extendSelectionAtEnd:](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extendSelectionAtStart:](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.
