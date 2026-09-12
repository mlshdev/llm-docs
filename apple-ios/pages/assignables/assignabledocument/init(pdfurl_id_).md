> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/assignabledocument/init(pdfurl:id:)](https://developer.apple.com/documentation/assignables/assignabledocument/init(pdfurl:id:))

# init(pdfURL:id:)

**Framework:** Assignables  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.

## Declaration

```swift
init(pdfURL: URL, id: String? = nil) throws
```

## Parameters

- `pdfURL`: A URL to the PDF document that is the basis of this assessment document.
- `id`: An optional ID to use for this document. if one is not provided, a random UUID string will be used.

## See Also

### Creating an assignable document

- [init(id:partData:)](init%28id_partdata_%29-8gf6g.md): Construct an instance of this object with the parts data passed in.
- [MergeablePartData](../mergeablepartdata.md)
- [init(id:partData:)](init%28id_partdata_%29-4am19.md): Deprecated. Construct an instance of this object with the parts data passed in.
- [init(pdfURL:authors:id:)](init%28pdfurl_authors_id_%29.md): Deprecated. Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
