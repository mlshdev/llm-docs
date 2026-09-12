> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/matchescontents(of:)](https://developer.apple.com/documentation/foundation/filewrapper/matchescontents(of:))

# matchesContents(of:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.

## Declaration

```swift
func matchesContents(of url: URL) -> Bool
```

## Parameters

- `url`: URL of the file-system node with which to compare the file wrapper.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the contents of the file wrapper match the contents of `url`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The contents of files are not compared; matching of regular files is based on file modification dates. For a directory, children are compared against the files in the directory, recursively.

Because children of directory file wrappers are not read immediately by the [init(url:options:)](init%28url_options_%29-70161.md) method unless the `NSFileWrapperReadingImmediate` reading option is used, even a newly-created directory file wrapper might not have the same contents as the directory on disk. You can use this method to determine whether the file wrapper’s contents in memory need to be updated.

If the file wrapper needs updating, use the [read(from:options:)](read%28from_options_%29.md) method with the `NSFileWrapperReadingImmediate` reading option.

This table describes which attributes of the file wrapper and file-system node are compared to determine whether the file wrapper matches the node on disk:

| File-wrapper type | Comparison determinants |
| --- | --- |
| Regular file | Modification date and access permissions. |
| Directory | Children (recursive). |
| Symbolic link | Destination pathname. |

## See Also

### Related Documentation

- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Updating File Wrappers

- [needsToBeUpdated(fromPath:)](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [update(fromPath:)](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [read(from:options:)](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.

# matchesContentsOfURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Indicates whether the contents of a file wrapper matches a directory, regular file, or symbolic link on disk.

## Declaration

```objectivec
- (BOOL) matchesContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: URL of the file-system node with which to compare the file wrapper.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) when the contents of the file wrapper match the contents of `url`, [false](https://developer.apple.com/documentation/swift/false) otherwise.

<a id="Discussion"></a>

## Discussion

The contents of files are not compared; matching of regular files is based on file modification dates. For a directory, children are compared against the files in the directory, recursively.

Because children of directory file wrappers are not read immediately by the [initWithURL:options:error:](init%28url_options_%29-70161.md) method unless the `NSFileWrapperReadingImmediate` reading option is used, even a newly-created directory file wrapper might not have the same contents as the directory on disk. You can use this method to determine whether the file wrapper’s contents in memory need to be updated.

If the file wrapper needs updating, use the [readFromURL:options:error:](read%28from_options_%29.md) method with the `NSFileWrapperReadingImmediate` reading option.

This table describes which attributes of the file wrapper and file-system node are compared to determine whether the file wrapper matches the node on disk:

| File-wrapper type | Comparison determinants |
| --- | --- |
| Regular file | Modification date and access permissions. |
| Directory | Children (recursive). |
| Symbolic link | Destination pathname. |

## See Also

### Related Documentation

- [fileAttributes](fileattributes.md): A dictionary of file attributes.

### Updating File Wrappers

- [needsToBeUpdatedFromPath:](needstobeupdated%28frompath_%29.md): Deprecated. Indicates whether the file wrapper needs to be updated to match a given file-system node.
- [updateFromPath:](update%28frompath_%29.md): Deprecated. Updates the file wrapper to match a given file-system node.
- [readFromURL:options:error:](read%28from_options_%29.md): Recursively rereads the entire contents of a file wrapper from the specified location on disk.
