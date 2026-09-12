> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchresult/contenttype](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchresult/contenttype)

# contentType (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s content type.

## Declaration

```swift
@NSCopying var contentType: UTType { get }
```

## See Also

### Accessing file metadata

- [creationDate](creationdate.md): The result file’s creation date.
- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](lastuseddate.md): The result file’s last-used date.
- [documentSize](documentsize.md): The result file’s size.

# contentType (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s content type.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) UTType * contentType;
```

## See Also

### Accessing file metadata

- [creationDate](creationdate.md): The result file’s creation date.
- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](lastuseddate.md): The result file’s last-used date.
- [documentSize](documentsize.md): The result file’s size.
