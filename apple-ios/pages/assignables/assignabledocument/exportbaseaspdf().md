> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/exportbaseaspdf()](https://developer.apple.com/documentation/assignables/assignabledocument/exportbaseaspdf())

# exportBaseAsPDF()

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Exports the base part of this document to a `PDFDocument`.

## Declaration

```swift
func exportBaseAsPDF() async -> PDFDocument
```

<a id="return-value"></a>

## Return Value

The base part of this document as a `PDFDocument`.

## See Also

### Exporting the parts

- [exportParts(identifiedBy:)](exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
- [export(partIDs:)](export%28partids_%29.md): Deprecated. Given a set of part identifiers, return a dictionary of part ID to data objects for the requested layers.
