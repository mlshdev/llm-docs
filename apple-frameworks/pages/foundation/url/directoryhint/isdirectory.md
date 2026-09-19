> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/url/directoryhint/isdirectory

# URL.DirectoryHint.isDirectory

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A hint that specifies that a given path is a directory.

## Declaration

```swift
case isDirectory
```

## See Also

### Hints

- [URL.DirectoryHint.notDirectory](notdirectory.md): A hint that specifies that a given path isn’t a directory.
- [URL.DirectoryHint.checkFileSystem](checkfilesystem.md): A hint that directs a URL call to consult the file system to determine whether the path references a directory.
- [URL.DirectoryHint.inferFromPath](inferfrompath.md): A hint that directs a URL call to infer whether a path references a directory based on whether it has a trailing slash.
