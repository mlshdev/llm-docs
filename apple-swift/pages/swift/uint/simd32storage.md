> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/uint/simd32storage](https://developer.apple.com/documentation/swift/uint/simd32storage)

# UInt.SIMD32Storage

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage for a vector of 32 integers.

## Declaration

```swift
@frozen struct SIMD32Storage
```

## Topics

### Initializers

- [init()](simd32storage/init%28%29.md): Creates a vector with zero in all lanes.

### Instance Properties

- [scalarCount](simd32storage/scalarcount.md): The number of scalars, or elements, in the vector.

### Subscripts

- [subscript(\_:)](simd32storage/subscript%28__%29.md): Accesses the element at the specified index.

### Type Aliases

- [UInt.SIMD32Storage.Scalar](simd32storage/scalar.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [SIMDStorage](../simdstorage.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
