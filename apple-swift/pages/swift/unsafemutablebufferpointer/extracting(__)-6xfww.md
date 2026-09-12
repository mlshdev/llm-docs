> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/unsafemutablebufferpointer/extracting(_:)-6xfww](https://developer.apple.com/documentation/swift/unsafemutablebufferpointer/extracting(_:)-6xfww)

# extracting(\_:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Extracts and returns a copy of the entire buffer.

## Declaration

```swift
func extracting(_ bounds: UnboundedRange) -> UnsafeMutableBufferPointer<Element>
```

<a id="return-value"></a>

## Return Value

The same buffer as `self`.

<a id="discussion"></a>

## Discussion

When `Element` is copyable, the `extracting` operation is equivalent to slicing the buffer then rebasing the resulting buffer slice:

```swift
let a = buffer
let b = buffer.extracting(...)
let c = UnsafeBufferPointer(rebasing: buffer[...])
// `a`, `b` and `c` are now all referring to the same buffer
```

Note that unlike slicing, the `extracting` operation remains available even if `Element` happens to be noncopyable.
