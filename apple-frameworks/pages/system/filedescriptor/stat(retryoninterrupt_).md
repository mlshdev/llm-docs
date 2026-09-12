> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filedescriptor/stat(retryoninterrupt:)](https://developer.apple.com/documentation/system/filedescriptor/stat(retryoninterrupt:))

# stat(retryOnInterrupt:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a `Stat` struct for the file referenced by this `FileDescriptor`.

## Declaration

```swift
func stat(retryOnInterrupt: Bool = true) throws(Errno) -> Stat
```

<a id="discussion"></a>

## Discussion

The corresponding C function is `fstat()`.
