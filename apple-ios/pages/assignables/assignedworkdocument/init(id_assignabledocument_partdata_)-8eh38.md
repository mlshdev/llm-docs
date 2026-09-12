> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/init(id:assignabledocument:partdata:)-8eh38](https://developer.apple.com/documentation/assignables/assignedworkdocument/init(id:assignabledocument:partdata:)-8eh38)

# init(id:assignableDocument:partData:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Construct an instance of this object with the parts data passed in.

## Declaration

```swift
init(id: AssignedWorkDocument.ID, assignableDocument: AssignableDocument, partData: [AssignedWorkDocument.PartID : MergeablePartData]) async throws
```

## Parameters

- `id`: The ID of this document.
- `partData`: A dictionary of part IDs to [MergeablePartData](../mergeablepartdata.md) objects that contain the parts data.

## See Also

### Creating an assigned work document

- [init(id:assignableDocument:partData:)](init%28id_assignabledocument_partdata_%29-54yg5.md): Deprecated. Construct an instance of this object with the parts data passed in.
