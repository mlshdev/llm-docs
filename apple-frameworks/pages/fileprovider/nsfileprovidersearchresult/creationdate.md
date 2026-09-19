> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchresult/creationdate

# creationDate (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s creation date.

## Declaration

```swift
var creationDate: Date? { get }
```

## See Also

### Accessing file metadata

- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](lastuseddate.md): The result file’s last-used date.
- [contentType](contenttype.md): The result file’s content type.
- [documentSize](documentsize.md): The result file’s size.

# creationDate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s creation date.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * creationDate;
```

## See Also

### Accessing file metadata

- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [lastUsedDate](lastuseddate.md): The result file’s last-used date.
- [contentType](contenttype.md): The result file’s content type.
- [documentSize](documentsize.md): The result file’s size.
