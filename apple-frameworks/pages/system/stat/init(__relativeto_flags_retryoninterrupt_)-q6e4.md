> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/init(_:relativeto:flags:retryoninterrupt:)-q6e4](https://developer.apple.com/documentation/system/stat/init(_:relativeto:flags:retryoninterrupt:)-q6e4)

# init(\_:relativeTo:flags:retryOnInterrupt:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a `Stat` struct from a `FilePath` and `Flags`, including a `FileDescriptor` to resolve a relative path.

## Declaration

```swift
init(_ path: FilePath, relativeTo fd: FileDescriptor, flags: Stat.Flags, retryOnInterrupt: Bool = true) throws(Errno)
```

<a id="discussion"></a>

## Discussion

If `path` is absolute (starts with a forward slash), then `fd` is ignored. If `path` is relative, it is resolved against the directory given by `fd`.

The corresponding C function is `fstatat()`.
