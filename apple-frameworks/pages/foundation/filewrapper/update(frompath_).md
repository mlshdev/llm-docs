> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/update(frompath:)](https://developer.apple.com/documentation/foundation/filewrapper/update(frompath:))

# update(fromPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Updates the file wrapper to match a given file-system node.

> Use [read(from:options:)](read%28from_options_%29.md) instead.

## Declaration

```swift
func update(fromPath path: String) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the update is carried out, [false](https://developer.apple.com/documentation/swift/false) if it isn’t needed.

<a id="Discussion"></a>

## Discussion

For a directory file wrapper, the contained file wrappers are also sent [update(fromPath:)](update%28frompath_%29.md) messages. If nodes in the corresponding directory on the file system have been added or removed, corresponding file wrappers are released or created as needed.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [read(from:options:)](read%28from_options_%29.md).

## See Also

### Related Documentation

- [updateAttachments(fromPath:)](../nsmutableattributedstring/updateattachments%28frompath_%29.md): Updates all attachments based on files contained in the RTFD file package at the specified file path.

### Updating File Wrappers

- [needsToBeUpdated(fromPath:)](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContents(of:)](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.

# updateFromPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Updates the file wrapper to match a given file-system node.

> Use [readFromURL:options:error:](read%28from_options_%29.md) instead.

## Declaration

```objectivec
- (BOOL) updateFromPath:(NSString *) path;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the update is carried out, [false](https://developer.apple.com/documentation/swift/false) if it isn’t needed.

<a id="Discussion"></a>

## Discussion

For a directory file wrapper, the contained file wrappers are also sent [updateFromPath:](update%28frompath_%29.md) messages. If nodes in the corresponding directory on the file system have been added or removed, corresponding file wrappers are released or created as needed.

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [readFromURL:options:error:](read%28from_options_%29.md).

## See Also

### Related Documentation

- [updateAttachmentsFromPath:](../nsmutableattributedstring/updateattachments%28frompath_%29.md): Updates all attachments based on files contained in the RTFD file package at the specified file path.

### Updating File Wrappers

- [needsToBeUpdatedFromPath:](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [matchesContentsOfURL:](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
