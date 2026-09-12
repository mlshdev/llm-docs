> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsaferawbufferpointer/init(_:)-rrzw](https://developer.apple.com/documentation/swift/unsaferawbufferpointer/init(_:)-rrzw)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a raw buffer over the contiguous bytes in the given typed buffer.

## Declaration

```swift
init<T>(_ buffer: UnsafeMutableBufferPointer<T>) where T : ~Copyable
```

## Parameters

- `buffer`: The typed buffer to convert to a raw buffer. The buffer’s type `T` must be a trivial type.
