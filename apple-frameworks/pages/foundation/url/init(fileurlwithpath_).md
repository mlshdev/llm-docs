> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/init(fileurlwithpath:)

# init(fileURLWithPath:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 27.2) · iPadOS 8.0+ (deprecated in 27.2) · Mac Catalyst 8.0+ (deprecated in 27.2) · macOS 10.10+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 2.0+ (deprecated in 27.2)

Creates a file URL that references the local file or directory at the given path.

> Use [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md) instead.

## Declaration

```swift
init(fileURLWithPath path: String)
```

## Parameters

- `path`: The location in the file system.

<a id="Discussion"></a>

## Discussion

If the path is an empty string, the system interprets it as “.”.

## See Also

### Creating a file URL from a string path

- [init(filePath:directoryHint:relativeTo:)](init%28filepath_directoryhint_relativeto_%29.md): Creates a file URL that references a path you specify as a string.
- [URL.DirectoryHint](directoryhint.md): A hint to URL file APIs for handling paths that may reference directories.
- [init(fileURLWithPath:isDirectory:)](init%28fileurlwithpath_isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path.
- [init(fileURLWithPath:relativeTo:)](init%28fileurlwithpath_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithPath:isDirectory:relativeTo:)](init%28fileurlwithpath_isdirectory_relativeto_%29.md): Deprecated. Creates a file URL that references the local file or directory at the given path, relative to a base URL.
- [init(fileURLWithFileSystemRepresentation:isDirectory:relativeTo:)](init%28fileurlwithfilesystemrepresentation_isdirectory_relativeto_%29.md): Creates a file URL that references the local file or directory for the file system representation of the path.
- [init(fileReferenceLiteralResourceName:)](init%28filereferenceliteralresourcename_%29.md): Creates a URL from a playground file literal.
- [init(filePath:directoryHint:)](init%28filepath_directoryhint_%29.md): Creates a file URL that references a file path.
