> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float16/simd64storage](https://developer.apple.com/documentation/swift/float16/simd64storage)

# Float16.SIMD64Storage

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Storage for a vector of 64 floating-point values.

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

- [Float16.SIMD64Storage.Scalar](simd64storage/scalar.md)

## Relationships

### Conforms To

- [BitwiseCopyable](../bitwisecopyable.md)
- [SIMDStorage](../simdstorage.md)
- [Sendable](../sendable.md)
- [SendableMetatype](../sendablemetatype.md)
