> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/export(partids:)](https://developer.apple.com/documentation/assignables/assignabledocument/export(partids:))

# export(partIDs:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Given a set of part identifiers, return a dictionary of part ID to data objects for the requested layers.

> Use exportParts(identifiedBy:)

## Declaration

```swift
func export(partIDs: [AssignableDocument.PartID]) async throws -> [AssignableDocument.PartID : URL]
```

## Parameters

- `partIDs`: An array of part IDs to export. This is treated as a set.

<a id="return-value"></a>

## Return Value

A dictionary of part ID to URLs of the data stored on disk for the requested parts.

## See Also

### Exporting the parts

- [exportBaseAsPDF()](exportbaseaspdf%28%29.md): Exports the base part of this document to a `PDFDocument`.
- [exportParts(identifiedBy:)](exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
