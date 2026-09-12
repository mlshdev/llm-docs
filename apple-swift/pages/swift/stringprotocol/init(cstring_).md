> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/stringprotocol/init(cstring:)](https://developer.apple.com/documentation/swift/stringprotocol/init(cstring:))

# init(cString:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a string from the null-terminated, UTF-8 encoded sequence of bytes at the given pointer.

## Declaration

```swift
init(cString nullTerminatedUTF8: UnsafePointer<CChar>)
```

## Parameters

- `nullTerminatedUTF8`: A pointer to a sequence of contiguous, UTF-8 encoded bytes ending just before the first zero byte.
