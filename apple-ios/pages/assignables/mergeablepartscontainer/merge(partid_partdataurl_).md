> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartscontainer/merge(partid:partdataurl:)](https://developer.apple.com/documentation/assignables/mergeablepartscontainer/merge(partid:partdataurl:))

# merge(partID:partDataURL:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Merges an individual part into the specified part of this object.

> Use merge(partData:into:)

## Declaration

```swift
mutating func merge(partID: Self.PartID, partDataURL: URL) throws -> Bool
```

## Parameters

- `partID`: The part ID to merge in.
- `partDataURL`: The URL to the part data file to merge in.

## See Also

### Merging the parts

- [merge(other:)](merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
