> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(_:isdirectory:)](https://developer.apple.com/documentation/foundation/url/init(_:isdirectory:))

# init(\_:isDirectory:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · watchOS 7.0+ (deprecated in 9.0)

Creates a file URL that references the local file or directory at the file path you specify.

> Use init?(filePath:directoryHint:) instead

## Declaration

```swift
init?(_ path: FilePath, isDirectory: Bool)
```

## Parameters

- `path`: The location in the file system.
- `isDirectory`: A Boolean value that indicates whether the location is a directory.

<a id="Discussion"></a>

## Discussion

> **Note**

>  This method avoids file system I/O to determine if the path is to a directory. When you know that information, prefer this method to initializers without the parameter.

## See Also

### Creating a file URL from a file path

- [init(\_:)](init%28__%29.md): Deprecated. Creates a file URL that references the local file or directory at the file path you specify.
- [FilePath](../../system/filepath.md): Represents a location in the file system.
