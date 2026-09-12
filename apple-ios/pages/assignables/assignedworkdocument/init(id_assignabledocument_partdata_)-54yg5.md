> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignedworkdocument/init(id:assignabledocument:partdata:)-54yg5](https://developer.apple.com/documentation/assignables/assignedworkdocument/init(id:assignabledocument:partdata:)-54yg5)

# init(id:assignableDocument:partData:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Construct an instance of this object with the parts data passed in.

> Use async init(id:assignableDocument:partData:)

## Declaration

```swift
init(id: AssignedWorkDocument.ID, assignableDocument: AssignableDocument, partData: [AssignedWorkDocument.PartID : URL]) throws
```

## Parameters

- `id`: The ID of the document.
- `assignableDocument`: The assignable document that this work document is based on.
- `partData`: A dictionary of part ID to URLs of the data stored on disk for the requested parts.

## See Also

### Creating an assigned work document

- [init(id:assignableDocument:partData:)](init%28id_assignabledocument_partdata_%29-8eh38.md): Construct an instance of this object with the parts data passed in.
