> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/synchronization](https://developer.apple.com/documentation/synchronization)

# Synchronization

**Framework:** Synchronization  
**Kind:** Framework  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Build synchronization constructs using low-level, primitive operations.

## Topics

### Atomic Values

- [Atomic](synchronization/atomic.md): An atomic value.
- [AtomicLazyReference](synchronization/atomiclazyreference.md): A lazily initializable atomic strong reference.
- [WordPair](synchronization/wordpair.md): A pair of two word sized `UInt`s.
- [AtomicRepresentable](synchronization/atomicrepresentable.md): A type that supports atomic operations through a separate atomic storage representation.
- [AtomicOptionalRepresentable](synchronization/atomicoptionalrepresentable.md): An atomic value that also supports atomic operations when wrapped in an `Optional`. Atomic optional representable types come with a standalone atomic representation for their optional-wrapped variants.

### Memory Ordering Semantics

- [AtomicLoadOrdering](synchronization/atomicloadordering.md): Specifies the memory ordering semantics of an atomic load operation.
- [AtomicStoreOrdering](synchronization/atomicstoreordering.md): Specifies the memory ordering semantics of an atomic store operation.
- [AtomicUpdateOrdering](synchronization/atomicupdateordering.md): Specifies the memory ordering semantics of an atomic read-modify-write operation.
- [atomicMemoryFence(ordering:)](synchronization/atomicmemoryfence%28ordering_%29.md): Establishes a memory ordering without associating it with a particular atomic operation.

### Structures

- [Mutex](synchronization/mutex.md): A synchronization primitive that protects shared mutable state via mutual exclusion.
