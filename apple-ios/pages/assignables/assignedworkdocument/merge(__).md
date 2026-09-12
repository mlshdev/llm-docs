> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/merge(_:)](https://developer.apple.com/documentation/assignables/assignedworkdocument/merge(_:))

# merge(\_:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Merge another object of this type into this object.

## Declaration

```swift
@discardableResult mutating func merge(_ other: AssignedWorkDocument) async throws -> Bool
```

## Parameters

- `other`: The other object to merge into this one.

<a id="return-value"></a>

## Return Value

`true`, if the merge caused a mutation.

## See Also

### Merging the parts

- [merge(partData:into:)](merge%28partdata_into_%29.md): Merges an individual part into the specified part of this object.
- [merge(other:)](merge%28other_%29.md): Deprecated. Merge another object of this type into this object.
- [merge(partID:partDataURL:)](merge%28partid_partdataurl_%29.md): Deprecated. Merges an individual part’s data into the specified part of this object.
