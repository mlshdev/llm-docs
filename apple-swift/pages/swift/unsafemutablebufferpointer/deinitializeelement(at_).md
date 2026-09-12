> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/deinitializeelement(at:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/deinitializeelement(at:))

# deinitializeElement(at:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Deinitializes the memory underlying the element at `index`.

## Declaration

```swift
func deinitializeElement(at index: UnsafeMutableBufferPointer<Element>.Index)
```

## Parameters

- `index`: The index of the buffer element to deinitialize.

<a id="discussion"></a>

## Discussion

The memory underlying the element at `index` must be initialized. After calling `deinitializeElement()`, the memory underlying this element of the buffer is uninitialized, and still bound to type `Element`.
