> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/export(partids:)](https://developer.apple.com/documentation/assignables/assignedworkdocument/export(partids:))

# export(partIDs:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Given a set of part identifiers, return a dictionary of part ID to data objects for the requested parts.

> Use exportParts(identifiedBy:)

## Declaration

```swift
func export(partIDs: [AssignedWorkDocument.PartID]) async throws -> [AssignedWorkDocument.PartID : URL]
```

## Parameters

- `partIDs`: An array of part IDs to export. This is treated as a set.

<a id="return-value"></a>

## Return Value

A dictionary of part ID to URLs of the data for the requested parts.

## See Also

### Exporting the parts

- [exportParts(identifiedBy:)](exportparts%28identifiedby_%29.md): Given a set of part identifiers, return a dictionary of part ID to part data.
