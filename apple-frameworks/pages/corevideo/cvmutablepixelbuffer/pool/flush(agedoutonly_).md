> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/flush(agedoutonly:)](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/flush(agedoutonly:))

# flush(agedOutOnly:)

**Framework:** Core Video  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Frees as many buffers from the pool as possible.

## Declaration

```swift
final func flush(agedOutOnly: Bool = true)
```

## Parameters

- `agedOutOnly`: Only free backings that are waiting to be aged out. If false, all unused backings are flushed regardless of age.
