> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mutableref/init(unsafeaddress:mutating:)](https://developer.apple.com/documentation/swift/mutableref/init(unsafeaddress:mutating:))

# init(unsafeAddress:mutating:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Unsafely initializes an instance of `MutableRef` using the given ‘unsafeAddress’ as the mutable reference based on the mutating lifetime of the given ‘owner’ argument.

## Declaration

```swift
init<Owner>(unsafeAddress pointer: UnsafeMutablePointer<Value>, mutating owner: inout Owner) where Owner : ~Copyable, Owner : ~Escapable
```

## Parameters

- `pointer`: The address to use to mutably reference an instance of type `Value`.
- `owner`: The owning instance that this `MutableRef` instance’s lifetime is based on.
