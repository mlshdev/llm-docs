> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/assignables/mergeablepartdata](https://developer.apple.com/documentation/assignables/mergeablepartdata)

# MergeablePartData

**Framework:** Assignables  
**Kind:** Enumeration  
**Availability:** iOS 17.5+ · iPadOS 17.5+ · Mac Catalyst 17.5+ · visionOS

## Declaration

```swift
enum MergeablePartData
```

## Topics

### Enumeration Cases

- [MergeablePartData.data(\_:)](mergeablepartdata/data%28__%29.md): Part data exported as a `Data` object.
- [MergeablePartData.fileURL(\_:)](mergeablepartdata/fileurl%28__%29.md): Part data exported as a file URL to a part data archive.

## See Also

### Creating an assignable document

- [init(pdfURL:id:)](assignabledocument/init%28pdfurl_id_%29.md): Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
- [init(id:partData:)](assignabledocument/init%28id_partdata_%29-8gf6g.md): Construct an instance of this object with the parts data passed in.
- [init(id:partData:)](assignabledocument/init%28id_partdata_%29-4am19.md): Deprecated. Construct an instance of this object with the parts data passed in.
- [init(pdfURL:authors:id:)](assignabledocument/init%28pdfurl_authors_id_%29.md): Deprecated. Initializes a new assessment document that is based on the PDF located at the provided URL. If the file located at the URL provided cannot be accessed, this initializer throws.
