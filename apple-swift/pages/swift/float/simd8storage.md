> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float/simd8storage](https://developer.apple.com/documentation/swift/float/simd8storage)

# Float.SIMD8Storage

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Storage for a vector of eight floating-point values.

## Declaration

```swift
@frozen struct SIMD8Storage
```

## Topics

### Initializers

- [init()](simd8storage/init%28%29.md): Creates a vector with zero in all lanes.

### Instance Properties

- [scalarCount](simd8storage/scalarcount.md): The number of scalars, or elements, in the vector.

### Subscripts

- [subscript(\_:)](simd8storage/subscript%28__%29.md): Accesses the element at the specified index.

### Type Aliases

- [Float.SIMD8Storage.Scalar](simd8storage/scalar.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [SIMDStorage](../simdstorage.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)

## See Also

### SIMD-Supporting Types

- [Float.SIMDMaskScalar](simdmaskscalar.md)
- [Float.SIMD2Storage](simd2storage.md): Storage for a vector of two floating-point values.
- [Float.SIMD4Storage](simd4storage.md): Storage for a vector of four floating-point values.
- [Float.SIMD16Storage](simd16storage.md): Storage for a vector of 16 floating-point values.
- [Float.SIMD32Storage](simd32storage.md): Storage for a vector of 32 floating-point values.
- [Float.SIMD64Storage](simd64storage.md): Storage for a vector of 64 floating-point values.
