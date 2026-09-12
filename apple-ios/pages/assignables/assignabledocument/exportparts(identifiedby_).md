> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/exportparts(identifiedby:)](https://developer.apple.com/documentation/assignables/assignabledocument/exportparts(identifiedby:))

# exportParts(identifiedBy:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Given a set of part identifiers, return a dictionary of part ID to part data.

## Declaration

```swift
func exportParts(identifiedBy partIDs: [AssignableDocument.PartID]) async throws -> [AssignableDocument.PartID : MergeablePartData]
```

## Parameters

- `partIDs`: An array of part IDs to export. This is treated as a set.

<a id="return-value"></a>

## Return Value

A dictionary of part ID to part data file for the requested parts.

## See Also

### Exporting the parts

- [exportBaseAsPDF()](exportbaseaspdf%28%29.md): Exports the base part of this document to a `PDFDocument`.
- [export(partIDs:)](export%28partids_%29.md): Deprecated. Given a set of part identifiers, return a dictionary of part ID to data objects for the requested layers.
