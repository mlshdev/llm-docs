> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(fileurlwithpath:isdirectory:relativeto:)](https://developer.apple.com/documentation/foundation/url/init(fileurlwithpath:isdirectory:relativeto:))

# init(fileURLWithPath:isDirectory:relativeTo:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.0) · iPadOS 8.0+ (deprecated in 27.0) · Mac Catalyst 8.0+ (deprecated in 27.0) · macOS 10.10+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a file URL that references the local file or directory at the given path, relative to a base URL.

> Use [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md) instead.

## Declaration

```swift
init(fileURLWithPath path: String, isDirectory: Bool, relativeTo base: URL?)
```

## Parameters

- `path`: The location in the file system.
- `isDirectory`: A Boolean value that indicates whether the location is a directory.
- `base`: A URL that provides a file system location that the path extends.

<a id="Discussion"></a>

## Discussion

If the path is an empty string, the system interprets it as “.”.

> **Note**

>  This method avoids file system I/O to determine if the path is to a directory. When you know that information, prefer this method to initializers without the parameter.

## See Also

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [URL.DirectoryHint](directoryhint.md): A hint to URL file APIs for handling paths that may reference directories.
- [init(fileURLWithPath:)](init%28fileurlwithpath_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(fileReferenceLiteralResourceName:)](init%28filereferenceliteralresourcename_%29.md): Creates a URL from a playground file literal.
- [init(filePath:directoryHint:)](init%28filepath_directoryhint_%29.md): Creates a file URL that references a file path.
