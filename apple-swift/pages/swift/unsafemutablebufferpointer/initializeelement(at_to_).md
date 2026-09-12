> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/initializeelement(at:to:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/initializeelement(at:to:))

# initializeElement(at:to:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes the element at `index` to the given value.

## Declaration

```swift
func initializeElement(at index: UnsafeMutableBufferPointer<Element>.Index, to value: consuming Element)
```

## Parameters

- `index`: The index of the element to initialize
- `value`: The value used to initialize the buffer element’s memory.

<a id="discussion"></a>

## Discussion

The memory underlying the destination element must be uninitialized, or `Element` must be a trivial type. After a call to `initialize(to:)`, the memory underlying this element of the buffer is initialized.
