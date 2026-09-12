> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/url/init(_:)](https://developer.apple.com/documentation/foundation/url/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 14.0+ (deprecated in 16.0) · iPadOS 14.0+ (deprecated in 16.0) · Mac Catalyst 14.0+ (deprecated in 16.0) · macOS 11.0+ (deprecated in 13.0) · tvOS 14.0+ (deprecated in 16.0) · watchOS 7.0+ (deprecated in 9.0)

Creates a file URL that references the local file or directory at the file path you specify.

## Declaration

```swift
init?(_ path: FilePath)
```

## Parameters

- `path`: The location in the file system.

<a id="Discussion"></a>

## Discussion

This method may perform file system I/O to determine if the path is to a directory. If you know the path is to a directory, use [init(\_:isDirectory:)](init%28__isdirectory_%29.md) to avoid the file system I/O.

## See Also

### Creating a file URL from a file path

- [init(\_:isDirectory:)](init%28__isdirectory_%29.md): Deprecated. Creates a file URL that references the local file or directory at the file path you specify.
- [FilePath](../../system/filepath.md): Represents a location in the file system.
