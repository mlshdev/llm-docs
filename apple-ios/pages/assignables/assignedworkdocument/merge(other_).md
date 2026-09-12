> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/merge(other:)](https://developer.apple.com/documentation/assignables/assignedworkdocument/merge(other:))

# merge(other:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Merge another object of this type into this object.

> Use merge(\_:)

## Declaration

```swift
@discardableResult mutating func merge(other: AssignedWorkDocument) throws -> Bool
```

## Parameters

- `other`: The other object to merge into this one.

## See Also

### Merging the parts

- [merge(\_:)](merge%28__%29.md): Merge another object of this type into this object.
- [merge(partData:into:)](merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.
- [merge(partID:partDataURL:)](merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part’s data into the specified part of this object.
