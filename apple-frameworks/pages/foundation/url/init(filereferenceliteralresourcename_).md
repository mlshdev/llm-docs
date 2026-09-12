> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(filereferenceliteralresourcename:)](https://developer.apple.com/documentation/foundation/url/init(filereferenceliteralresourcename:))

# init(fileReferenceLiteralResourceName:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a URL from a playground file literal.

## Declaration

```swift
init(fileReferenceLiteralResourceName name: String)
```

## Parameters

- `name`: The playground file literal name, as a string.

## See Also

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [URL.DirectoryHint](directoryhint.md): A hint to URL file APIs for handling paths that may reference directories.
- [init(fileURLWithPath:)](init%28fileurlwithpath_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(filePath:directoryHint:)](init%28filepath_directoryhint_%29.md): Creates a file URL that references a file path.
