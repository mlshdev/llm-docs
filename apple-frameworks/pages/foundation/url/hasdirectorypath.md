> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/hasdirectorypath](https://developer.apple.com/documentation/foundation/url/hasdirectorypath)

# hasDirectoryPath

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Boolean that is true if the URL path represents a directory.

## Declaration

```swift
var hasDirectoryPath: Bool { get }
```

## See Also

### Working with file URLs

- [isFileURL](isfileurl.md): A Boolean that is true if the scheme is `file:`.
- [withUnsafeFileSystemRepresentation(\_:)](withunsafefilesystemrepresentation%28__%29.md): Passes the URL’s path in the file system representation to a closure.
- [resolveSymlinksInPath()](resolvesymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
- [resolvingSymlinksInPath()](resolvingsymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
- [standardize()](standardize%28%29.md): Standardizes the path of a file URL.
