> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/makepart(for:)](https://developer.apple.com/documentation/assignables/assignedworkdocument/makepart(for:))

# makePart(for:)

**Framework:** Assignables  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS

Creates data for the part with the given identifier.

## Declaration

```swift
func makePart(for partID: AssignedWorkDocument.PartID) throws -> MergeablePartData?
```

## Parameters

- `partID`: The identifier for the part you want to create.

<a id="return-value"></a>

## Return Value

Part data for the `partID` provided, if possible. Otherwise, `nil`.

<a id="discussion"></a>

## Discussion

In cases where this document is a partial one, i.e. it is missing some parts, you use this method to create data for the missing part. You then use [merge(partData:into:)](merge%28partdata_into_%29.md) to merge the newly created data into this document.
