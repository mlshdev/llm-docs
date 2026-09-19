> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pdfkit/pdfselection/extend(atstart:)

# extend(atStart:) (Swift)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Extends the selection from its start toward the beginning of the document.

## Declaration

```swift
func extend(atStart precede: Int)
```

<a id="Discussion"></a>

## Discussion

The selection may be extended by any amount, up to and including the beginning of the document.

## See Also

### Modifying a Selection

- [add(\_:)](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [add(\_:)](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extend(atEnd:)](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.

# extendSelectionAtStart: (Objective-C)

**Framework:** PDFKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 11.0+ · visionOS 1.0+

Extends the selection from its start toward the beginning of the document.

## Declaration

```objectivec
- (void) extendSelectionAtStart:(NSInteger) precede;
```

<a id="Discussion"></a>

## Discussion

The selection may be extended by any amount, up to and including the beginning of the document.

## See Also

### Modifying a Selection

- [addSelection:](add%28__%29-8c2r.md): Adds the specified selection to the receiving selection.
- [addSelections:](add%28__%29-3fyld.md): Adds the specified array of selections to the receiving selection.
- [extendSelectionAtEnd:](extend%28atend_%29.md): Extends the selection from its end toward the end of the document.
