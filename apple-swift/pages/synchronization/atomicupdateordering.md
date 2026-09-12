> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization/atomicupdateordering](https://developer.apple.com/documentation/synchronization/atomicupdateordering)

# AtomicUpdateOrdering

**Framework:** Synchronization  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies the memory ordering semantics of an atomic read-modify-write operation.

## Declaration

```swift
@frozen struct AtomicUpdateOrdering
```

## Topics

### Type Properties

- [acquiring](atomicupdateordering/acquiring.md): An acquiring update synchronizes with a releasing operation whose value its reads. It ensures that the releasing and acquiring threads agree that all subsequent variable accesses on the acquiring thread happen after the atomic operation itself.
- [acquiringAndReleasing](atomicupdateordering/acquiringandreleasing.md): An acquiring-and-releasing operation is a combination of `.acquiring` and `.releasing` operation on the same variable.
- [relaxed](atomicupdateordering/relaxed.md): Guarantees the atomicity of the specific operation on which it is applied, but imposes no ordering constraints on any other variable accesses.
- [releasing](atomicupdateordering/releasing.md): A releasing update synchronizes with acquiring operations that read the value it stores. It ensures that the releasing and acquiring threads agree that all preceding variable accesses on the releasing thread happen before the atomic operation itself.
- [sequentiallyConsistent](atomicupdateordering/sequentiallyconsistent.md): A sequentially consistent update performs an acquiring-and-releasing update and also guarantees that it and all other sequentially consistent atomic operations (loads, stores, updates) appear to be executed in a single, total sequential ordering.

## Relationships

### Conforms To

- [BitwiseCopyable](../swift/bitwisecopyable.md)
- [Copyable](../swift/copyable.md)
- [CustomStringConvertible](../swift/customstringconvertible.md)
- [Equatable](../swift/equatable.md)
- [Escapable](../swift/escapable.md)
- [Hashable](../swift/hashable.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Memory Ordering Semantics

- [AtomicLoadOrdering](atomicloadordering.md): Specifies the memory ordering semantics of an atomic load operation.
- [AtomicStoreOrdering](atomicstoreordering.md): Specifies the memory ordering semantics of an atomic store operation.
- [atomicMemoryFence(ordering:)](atomicmemoryfence%28ordering_%29.md): Establishes a memory ordering without associating it with a particular atomic operation.
