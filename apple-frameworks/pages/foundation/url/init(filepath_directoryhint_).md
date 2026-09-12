> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(filepath:directoryhint:)](https://developer.apple.com/documentation/foundation/url/init(filepath:directoryhint:))

# init(filePath:directoryHint:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a file URL that references a file path.

## Declaration

```swift
init?(filePath path: FilePath, directoryHint: URL.DirectoryHint = .inferFromPath)
```

## Parameters

- `path`: The location in the file system.
- `directoryHint`: A hint to the initializer to indicate whether the path is a directory, or to instruct the initializer to make this determination.

## See Also

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [URL.DirectoryHint](directoryhint.md): A hint to URL file APIs for handling paths that may reference directories.
- [init(fileURLWithPath:)](init%28fileurlwithpath_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(fileReferenceLiteralResourceName:)](init%28filereferenceliteralresourcename_%29.md): Creates a URL from a playground file literal.
