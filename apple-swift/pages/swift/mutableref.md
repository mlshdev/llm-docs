> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutableref](https://developer.apple.com/documentation/swift/mutableref)

# MutableRef

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A safe mutable reference allowing in-place mutation to an exclusive value.

## Declaration

```swift
@frozen struct MutableRef<Value> where Value : ~Copyable
```

## Topics

### Initializers

- [init(\_:)](mutableref/init%28__%29.md): Initializes an instance of `MutableRef` with the given mutable value. This creates a mutable reference to that value preventing writes to the original value while this mutable reference is still active.
- [init(unsafeAddress:mutating:)](mutableref/init%28unsafeaddress_mutating_%29.md): Unsafely initializes an instance of `MutableRef` using the given ‘unsafeAddress’ as the mutable reference based on the mutating lifetime of the given ‘owner’ argument.

### Instance Properties

- [value](mutableref/value.md): Dereferences the mutable reference allowing for in-place reads and writes to the underlying value.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Borrowing

- [Ref](ref.md): A safe reference allowing in-place reads to a shared value.
