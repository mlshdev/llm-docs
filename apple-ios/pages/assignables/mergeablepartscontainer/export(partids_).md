> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartscontainer/export(partids:)](https://developer.apple.com/documentation/assignables/mergeablepartscontainer/export(partids:))

# export(partIDs:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Given a set of part identifiers, return a dictionary of part ID to URL to the part data file for the requested parts.

> Use exportParts(identifiedBy:)

## Declaration

```swift
func export(partIDs: [Self.PartID]) async throws -> [Self.PartID : URL]
```

## Parameters

- `partIDs`: An array of part IDs to export. This is treated as a set.

<a id="return-value"></a>

## Return Value

A dictionary of part ID to URL to the part data file for the requested parts.
