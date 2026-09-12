> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/ref](https://developer.apple.com/documentation/swift/ref)

# Ref

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A safe reference allowing in-place reads to a shared value.

## Declaration

```swift
@frozen struct Ref<Value> where Value : ~Copyable
```

## Topics

### Initializers

- [init(\_:)](ref/init%28__%29.md): Initializes an instance of `Ref` with the given borrowed value. This creates a constant reference to that value preventing writes on the original value while this reference is still active.
- [init(unsafeAddress:borrowing:)](ref/init%28unsafeaddress_borrowing_%29.md): Unsafely initializes an instance of `Ref` using the given ‘unsafeAddress’ as the reference based on the borrowed lifetime of the given ‘owner’ argument.

### Instance Properties

- [value](ref/value.md): Dereferences the constant reference allowing for in-place reads to the underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [Copyable](copyable.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Borrowing

- [MutableRef](mutableref.md): A safe mutable reference allowing in-place mutation to an exclusive value.
