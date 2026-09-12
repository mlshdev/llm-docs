> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/asyncstream/continuation/bufferingpolicy](https://developer.apple.com/documentation/swift/asyncstream/continuation/bufferingpolicy)

# AsyncStream.Continuation.BufferingPolicy

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A strategy that handles exhaustion of a buffer’s capacity.

## Declaration

```swift
enum BufferingPolicy
```

## Topics

### Buffering Policies

- [AsyncStream.Continuation.BufferingPolicy.unbounded](bufferingpolicy/unbounded.md): Continue to add to the buffer, without imposing a limit on the number of buffered elements.
- [AsyncStream.Continuation.BufferingPolicy.bufferingOldest(\_:)](bufferingpolicy/bufferingoldest%28__%29.md): When the buffer is full, discard the newly received element.
- [AsyncStream.Continuation.BufferingPolicy.bufferingNewest(\_:)](bufferingpolicy/bufferingnewest%28__%29.md): When the buffer is full, discard the oldest element in the buffer.

## Relationships

### Conforms To

- [Sendable](../../sendable.md)
- [SendableMetatype](../../sendablemetatype.md)

## See Also

### Creating a Continuation-Based Stream

- [init(\_:bufferingPolicy:\_:)](../init%28__bufferingpolicy___%29.md): Constructs an asynchronous stream for an element type, using the specified buffering policy and element-producing closure.
- [AsyncStream.Continuation](../continuation.md): A mechanism to interface between synchronous code and an asynchronous stream.
