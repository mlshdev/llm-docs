> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pdfkit/pdfselection/extend(atend:)](https://developer.apple.com/documentation/pdfkit/pdfselection/extend(atend:))

# extend(atEnd:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Extends the selection from its end toward the end of the document.

## Declaration

```swift
func extend(atEnd succeed: Int)
```

<a id="Discussion"></a>

## Discussion

The selection may be extended by any amount, up to and including the end of the document.

## See Also

### Modifying a Selection

- [add(\_:)](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [add(\_:)](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extend(atStart:)](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.

# extendSelectionAtEnd: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Extends the selection from its end toward the end of the document.

## Declaration

```objectivec
- (void) extendSelectionAtEnd:(NSInteger) succeed;
```

<a id="Discussion"></a>

## Discussion

The selection may be extended by any amount, up to and including the end of the document.

## See Also

### Modifying a Selection

- [addSelection:](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [addSelections:](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extendSelectionAtStart:](extend%28atstart_%29.md): Extends the selection from its start toward the beginning of the document.
