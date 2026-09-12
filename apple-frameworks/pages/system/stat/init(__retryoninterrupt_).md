> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/stat/init(_:retryoninterrupt:)](https://developer.apple.com/documentation/system/stat/init(_:retryoninterrupt:))

# init(\_:retryOnInterrupt:)

**Framework:** System  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a `Stat` struct from a `FileDescriptor`.

## Declaration

```swift
init(_ fd: FileDescriptor, retryOnInterrupt: Bool = true) throws(Errno)
```

<a id="discussion"></a>

## Discussion

The corresponding C function is `fstat()`.
