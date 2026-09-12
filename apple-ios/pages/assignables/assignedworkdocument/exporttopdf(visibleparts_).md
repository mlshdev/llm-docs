> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/exporttopdf(visibleparts:)](https://developer.apple.com/documentation/assignables/assignedworkdocument/exporttopdf(visibleparts:))

# exportToPDF(visibleParts:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Exports the indicated layers of this document into a single `PDFDocument`.

## Declaration

```swift
func exportToPDF(visibleParts: [MergeablePartsContainerPartID]) async -> PDFDocument
```

## Parameters

- `visibleParts`: The lDs of layers that should be included in the thumbnail.
