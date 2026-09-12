> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/withaaencodeddata(_:)](https://developer.apple.com/documentation/applearchive/archiveheader/withaaencodeddata(_:))

# withAAEncodedData(\_:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Executes a closure with encoded data.

## Declaration

```swift
func withAAEncodedData<R>(_ body: (UnsafeBufferPointer<UInt8>) throws -> R) rethrows -> R
```

## Parameters

- `body`: The closure the function executes.
