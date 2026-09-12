> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/init(id:partdata:)-4am19](https://developer.apple.com/documentation/assignables/assignabledocument/init(id:partdata:)-4am19)

# init(id:partData:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Construct an instance of this object with the parts data passed in.

> Use async init(id:partData:)

## Declaration

```swift
init(id: AssignableDocument.ID, partData: [AssignableDocument.PartID : URL]) throws
```

## Parameters

- `id`: The ID of this document.
- `partData`: A dictionary of part IDs to `URL` objects that contain the serialized parts data.

## See Also

### Creating an assignable document

- [init(pdfURL:id:)](init%28pdfurl_id_%29.md): Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
- [init(id:partData:)](init%28id_partdata_%29-8gf6g.md): Construct an instance of this object with the parts data passed in.
- [MergeablePartData](../mergeablepartdata.md)
- [init(pdfURL:authors:id:)](init%28pdfurl_authors_id_%29.md): Deprecated. Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
