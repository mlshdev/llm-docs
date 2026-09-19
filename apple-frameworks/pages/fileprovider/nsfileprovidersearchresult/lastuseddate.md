> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchresult/lastuseddate

# lastUsedDate (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s last-used date.

## Declaration

```swift
var lastUsedDate: Date? { get }
```

## See Also

### Accessing file metadata

- [creationDate](creationdate.md): The result file’s creation date.
- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [contentType](contenttype.md): The result file’s content type.
- [documentSize](documentsize.md): The result file’s size.

# lastUsedDate (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The result file’s last-used date.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * lastUsedDate;
```

## See Also

### Accessing file metadata

- [creationDate](creationdate.md): The result file’s creation date.
- [contentModificationDate](contentmodificationdate.md): The result file’s content modification date.
- [contentType](contenttype.md): The result file’s content type.
- [documentSize](documentsize.md): The result file’s size.
