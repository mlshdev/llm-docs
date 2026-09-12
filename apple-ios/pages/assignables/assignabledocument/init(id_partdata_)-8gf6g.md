> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/init(id:partdata:)-8gf6g](https://developer.apple.com/documentation/assignables/assignabledocument/init(id:partdata:)-8gf6g)

# init(id:partData:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

Construct an instance of this object with the parts data passed in.

## Declaration

```swift
init(id: AssignableDocument.ID, partData: [AssignableDocument.PartID : MergeablePartData]) async throws
```

## Parameters

- `id`: The ID of this document.
- `partData`: A dictionary of part IDs to [MergeablePartData](../mergeablepartdata.md) objects that contain the parts data.

## See Also

### Creating an assignable document

- [init(pdfURL:id:)](init%28pdfurl_id_%29.md): Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
- [MergeablePartData](../mergeablepartdata.md)
- [init(id:partData:)](init%28id_partdata_%29-4am19.md): Deprecated. Construct an instance of this object with the parts data passed in.
- [init(pdfURL:authors:id:)](init%28pdfurl_authors_id_%29.md): Deprecated. Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
