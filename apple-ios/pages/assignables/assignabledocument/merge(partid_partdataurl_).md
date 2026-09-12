> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/merge(partid:partdataurl:)](https://developer.apple.com/documentation/assignables/assignabledocument/merge(partid:partdataurl:))

# merge(partID:partDataURL:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Merges an individual part’s data into the specified part of this object.

> Use merge(partData:into:)

## Declaration

```swift
@discardableResult mutating func merge(partID: AssignableDocument.PartID, partDataURL: URL) throws -> Bool
```

## Parameters

- `partID`: The part ID to merge in.
- `partDataURL`: The URL to the part data to merge in.

## See Also

### Merging the parts

- [merge(\_:)](merge%28__%29.md): Merge another object of this type into this object.
- [merge(partData:into:)](merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.
- [merge(other:)](merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
