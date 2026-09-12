> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/exporttopdf(visibleparts:)](https://developer.apple.com/documentation/assignables/assignabledocument/exporttopdf(visibleparts:))

# exportToPDF(visibleParts:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Exports the indicated parts of this document into a single `PDFDocument`.

## Declaration

```swift
func exportToPDF(visibleParts: [MergeablePartsContainerPartID]) async -> PDFDocument
```

## Parameters

- `visibleParts`: The lDs of parts that should be included in the exported PDF.
