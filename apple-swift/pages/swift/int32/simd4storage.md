> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int32/simd4storage](https://developer.apple.com/documentation/swift/int32/simd4storage)

# Int32.SIMD4Storage

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage for a vector of four integers.

## Declaration

```swift
@frozen struct SIMD4Storage
```

## Topics

### Initializers

- [init()](simd4storage/init%28%29.md): Creates a vector with zero in all lanes.

### Instance Properties

- [scalarCount](simd4storage/scalarcount.md): The number of scalars, or elements, in the vector.

### Subscripts

- [subscript(\_:)](simd4storage/subscript%28__%29.md): Accesses the element at the specified index.

### Type Aliases

- [Int32.SIMD4Storage.Scalar](simd4storage/scalar.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [SIMDStorage](../simdstorage.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
