> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/add(_:)-3fyld](https://developer.apple.com/documentation/pdfkit/pdfselection/add(_:)-3fyld)

# add(\_:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Adds the specified array of selections to the receiving selection.

## Declaration

```swift
func add(_ selections: [PDFSelection])
```

<a id="Discussion"></a>

## Discussion

This method provides better performance than multiple calls to `addSelection` if you need to add several selections to an existing selection. This is because the normalization of the selection (the removal of any overlaps between selections) occurs only once, after all selections have been added.

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Modifying a Selection

- [add(\_:)](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [extend(atEnd:)](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extend(atStart:)](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.

# addSelections: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 11.0+ · visionOS 1.0+

Adds the specified array of selections to the receiving selection.

## Declaration

```objectivec
- (void) addSelections:(NSArray<PDFSelection *> *) selections;
```

<a id="Discussion"></a>

## Discussion

This method provides better performance than multiple calls to `addSelection` if you need to add several selections to an existing selection. This is because the normalization of the selection (the removal of any overlaps between selections) occurs only once, after all selections have been added.

## See Also

### Related Documentation

- [PDFSelection](../pdfselection.md): A `PDFSelection` object identifies a contiguous or noncontiguous selection of text in a PDF document.

### Modifying a Selection

- [addSelection:](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [extendSelectionAtEnd:](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
- [extendSelectionAtStart:](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.
