> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdataiterator](https://developer.apple.com/documentation/dispatch/dispatchdataiterator)

# DispatchDataIterator

**Framework:** Dispatch  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A byte-by-byte iterator over the contents of a dispatch data object.

## Declaration

```swift
struct DispatchDataIterator
```

## Topics

### Iterating Over a Sequence’s Elements

- [next()](dispatchdataiterator/next%28%29.md)

## Relationships

### Conforms To

- [IteratorProtocol](https://developer.apple.com/documentation/swift/iteratorprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### System Event Monitoring

- [DispatchSource](dispatchsource.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [Dispatch Source](dispatch-source.md): An object that coordinates the processing of specific low-level system events, such as file-system events, timers, and UNIX signals.
- [DispatchIO](dispatchio.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [DispatchData](dispatchdata.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [Dispatch I/O](dispatch-i-o.md): An object that manages operations on a file descriptor using either stream-based or random-access semantics.
- [Dispatch Data](dispatch-data.md): An object that manages a memory-based data buffer and exposes it as a contiguous block of memory.
- [DispatchSourceProtocol](dispatchsourceprotocol.md): Defines a common set of properties and methods that are shared with all dispatch source types.
