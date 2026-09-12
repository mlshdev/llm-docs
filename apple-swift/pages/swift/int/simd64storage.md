> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/int/simd64storage](https://developer.apple.com/documentation/swift/int/simd64storage)

# Int.SIMD64Storage

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage for a vector of 64 integers.

## Declaration

```swift
@frozen struct SIMD64Storage
```

## Topics

### Initializers

- [init()](simd64storage/init%28%29.md): Creates a vector with zero in all lanes.

### Instance Properties

- [scalarCount](simd64storage/scalarcount.md): The number of scalars, or elements, in the vector.

### Subscripts

- [subscript(\_:)](simd64storage/subscript%28__%29.md): Accesses the element at the specified index.

### Type Aliases

- [Int.SIMD64Storage.Scalar](simd64storage/scalar.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [SIMDStorage](../simdstorage.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### SIMD-Supporting Types

- [Int.SIMDMaskScalar](simdmaskscalar.md)
- [Int.SIMD2Storage](simd2storage.md): Storage for a vector of two integers.
- [Int.SIMD4Storage](simd4storage.md): Storage for a vector of four integers.
- [Int.SIMD8Storage](simd8storage.md): Storage for a vector of eight integers.
- [Int.SIMD16Storage](simd16storage.md): Storage for a vector of 16 integers.
- [Int.SIMD32Storage](simd32storage.md): Storage for a vector of 32 integers.
