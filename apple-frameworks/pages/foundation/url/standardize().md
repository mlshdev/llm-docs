> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/standardize()](https://developer.apple.com/documentation/foundation/url/standardize())

# standardize()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Standardizes the path of a file URL.

## Declaration

```swift
mutating func standardize()
```

<a id="Discussion"></a>

## Discussion

If the `isFileURL` is false, this method does nothing.

## See Also

### Working with file URLs

- [isFileURL](isfileurl.md): A Boolean that is true if the scheme is `file:`.
- [hasDirectoryPath](hasdirectorypath.md): A Boolean that is true if the URL path represents a directory.
- [withUnsafeFileSystemRepresentation(\_:)](withunsafefilesystemrepresentation%28__%29.md): Passes the URL’s path in the file system representation to a closure.
- [resolveSymlinksInPath()](resolvesymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
- [resolvingSymlinksInPath()](resolvingsymlinksinpath%28%29.md): Resolves any symlinks in the path of a file URL.
