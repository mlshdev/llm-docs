> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/pointerargument/baseaddress](https://developer.apple.com/documentation/accelerate/bnnsgraph/pointerargument/baseaddress)

# baseAddress

**Framework:** Accelerate  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

A pointer to the first element of the buffer.

## Declaration

```swift
var baseAddress: UnsafeMutablePointer<Self.Element>? { get }
```

## See Also

### Querying a pointer argument’s properties

- [count](count.md): The number of elements in the buffer.
