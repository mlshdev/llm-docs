> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/system/filepath/stat(flags:retryoninterrupt:)](https://developer.apple.com/documentation/system/filepath/stat(flags:retryoninterrupt:))

# stat(flags:retryOnInterrupt:)

**Framework:** System  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a `Stat` struct for the file referenced by this `FilePath` using the given `Flags`.

## Declaration

```swift
func stat(flags: Stat.Flags, retryOnInterrupt: Bool = true) throws(Errno) -> Stat
```

<a id="discussion"></a>

## Discussion

If `path` is relative, it is resolved against the current working directory.

The corresponding C function is `fstatat()`.
