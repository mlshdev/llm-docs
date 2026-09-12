> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/cinterop/stat(_:_:)](https://developer.apple.com/documentation/system/cinterop/stat(_:_:))

# stat(\_:\_:)

**Framework:** System  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Calls the C `stat()` function.

## Declaration

```swift
static func stat(_ path: UnsafePointer<CChar>, _ s: inout CInterop.Stat) -> Int32
```

## Parameters

- `path`: A null-terminated C string representing the file path.
- `s`: An `inout` reference to a `CInterop.Stat` struct to populate.

<a id="return-value"></a>

## Return Value

0 on success, -1 on error (check `Errno.current`).

<a id="discussion"></a>

## Discussion

This is a direct wrapper around the C `stat()` system call. For a more ergonomic Swift API, use `Stat` instead.

> **Warning**

> This API is primarily intended for migration purposes when supporting older deployment targets. If your deployment target supports it, prefer using the `Stat` API introduced in SYS-0006, which provides type-safe, ergonomic access to file metadata in Swift.
