> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartscontainer/merge(partdata:into:)](https://developer.apple.com/documentation/assignables/mergeablepartscontainer/merge(partdata:into:))

# merge(partData:into:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Merges an individual part into the specified part of this object.

## Declaration

```swift
mutating func merge(partData: MergeablePartData, into partID: Self.PartID) async throws -> Bool
```

## Parameters

- `partData`: The part data to merge into this object.
- `partID`: The part ID of the part that the incoming data should be merged in.

<a id="return-value"></a>

## Return Value

`true`, if the merge caused a mutation.
