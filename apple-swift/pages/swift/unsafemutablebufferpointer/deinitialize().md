> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/deinitialize()](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/deinitialize())

# deinitialize()

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deinitializes every instance in this buffer.

## Declaration

```swift
@discardableResult func deinitialize() -> UnsafeMutableRawBufferPointer
```

<a id="return-value"></a>

## Return Value

A raw buffer to the same range of memory as this buffer. The range of memory is still bound to `Element`.

<a id="discussion"></a>

## Discussion

The region of memory underlying this buffer must be fully initialized. After calling `deinitialize(count:)`, the memory is uninitialized, but still bound to the `Element` type.

> **Note**

> All buffer elements must already be initialized.
