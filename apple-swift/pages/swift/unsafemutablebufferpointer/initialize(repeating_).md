> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/initialize(repeating:)](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/initialize(repeating:))

# initialize(repeating:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes every element in this buffer’s memory to a copy of the given value.

## Declaration

```swift
func initialize(repeating repeatedValue: Element)
```

## Parameters

- `repeatedValue`: The instance to initialize this buffer’s memory with.

<a id="discussion"></a>

## Discussion

The destination memory must be uninitialized or the buffer’s `Element` must be a trivial type. After a call to `initialize(repeating:)`, the entire region of memory referenced by this buffer is initialized.
