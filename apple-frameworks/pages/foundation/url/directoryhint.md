> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/directoryhint](https://developer.apple.com/documentation/foundation/url/directoryhint)

# URL.DirectoryHint

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A hint to URL file APIs for handling paths that may reference directories.

## Declaration

```swift
enum DirectoryHint
```

## Topics

### Hints

- [URL.DirectoryHint.isDirectory](directoryhint/isdirectory.md): A hint that specifies that a given path is a directory.
- [URL.DirectoryHint.notDirectory](directoryhint/notdirectory.md): A hint that specifies that a given path isn’t a directory.
- [URL.DirectoryHint.checkFileSystem](directoryhint/checkfilesystem.md): A hint that directs a URL call to consult the file system to determine whether the path references a directory.
- [URL.DirectoryHint.inferFromPath](directoryhint/inferfrompath.md): A hint that directs a URL call to infer whether a path references a directory based on whether it has a trailing slash.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [init(fileURLWithPath:)](init%28fileurlwithpath_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(fileReferenceLiteralResourceName:)](init%28filereferenceliteralresourcename_%29.md): Creates a URL from a playground file literal.
- [init(filePath:directoryHint:)](init%28filepath_directoryhint_%29.md): Creates a file URL that references a file path.
