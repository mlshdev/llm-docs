> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/needstobeupdated(frompath:)](https://developer.apple.com/documentation/foundation/filewrapper/needstobeupdated(frompath:))

# needsToBeUpdated(fromPath:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Indicates whether the file wrapper needs to be updated to match a given file-system node.

> Use [matchesContents(of:)](matchescontents%28of_%29.md) instead.

## Declaration

```swift
func needsToBeUpdated(fromPath path: String) -> Bool
```

## Parameters

- `path`: File-System node with which to compare the file wrapper.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) when the file wrapper needs to be updated to match `node`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This table describes which attributes of the file wrapper and `node` are compared to determine whether the file wrapper needs to be updated:

| File-wrapper type | Comparison determinants |
| --- | --- |
| Regular file | Modification date and access permissions. |
| Directory | Member hierarchy (recursive). |
| Symbolic link | Destination pathname. |

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [matchesContents(of:)](matchescontents%28of_%29.md).

## See Also

### Related Documentation

- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Updating File Wrappers

- [matchesContents(of:)](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [update(fromPath:)](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.

# needsToBeUpdatedFromPath: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Indicates whether the file wrapper needs to be updated to match a given file-system node.

> Use [matchesContentsOfURL:](matchescontents%28of_%29.md) instead.

## Declaration

```objectivec
- (BOOL) needsToBeUpdatedFromPath:(NSString *) path;
```

## Parameters

- `path`: File-System node with which to compare the file wrapper.

<a id="return-value"></a>

## Return Value

[false](https://developer.apple.com/documentation/swift/false) when the file wrapper needs to be updated to match `node`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

This table describes which attributes of the file wrapper and `node` are compared to determine whether the file wrapper needs to be updated:

| File-wrapper type | Comparison determinants |
| --- | --- |
| Regular file | Modification date and access permissions. |
| Directory | Member hierarchy (recursive). |
| Symbolic link | Destination pathname. |

<a id="Special-Considerations"></a>

### Special Considerations

Beginning with OS X v10.6, the preferred method of referring to files is with a `file://` URL. Therefore, this method has been deprecated in favor of [matchesContentsOfURL:](matchescontents%28of_%29.md).

## See Also

### Related Documentation

- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Updating File Wrappers

- [matchesContentsOfURL:](matchescontents%28of_%29.md): Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.
- [updateFromPath:](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
