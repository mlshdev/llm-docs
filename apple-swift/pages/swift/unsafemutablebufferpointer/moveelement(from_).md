> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/moveelement(from:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/moveelement(from:))

# moveElement(from:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves and returns the element at `index`, leaving that element’s underlying memory uninitialized.

## Declaration

```swift
func moveElement(from index: UnsafeMutableBufferPointer<Element>.Index) -> Element
```

## Parameters

- `index`: The index of the buffer element to retrieve and deinitialize.

<a id="return-value"></a>

## Return Value

The instance referenced by this index in this buffer.

<a id="discussion"></a>

## Discussion

The memory underlying the element at `index` must be initialized. After calling `moveElement(from:)`, the memory underlying this element of the buffer is uninitialized, and still bound to type `Element`.
