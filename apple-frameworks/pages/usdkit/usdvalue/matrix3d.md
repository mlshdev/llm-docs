> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/matrix3d](https://developer.apple.com/documentation/usdkit/usdvalue/matrix3d)

# USDValue.Matrix3d

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 3x3 matrix of double-precision floating-point values.

## Declaration

```swift
@frozen struct Matrix3d
```

## Topics

### Initializers

- [init(\_:)](matrix3d/init%28__%29.md): Creates a matrix from a SIMD `double3x3` matrix.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](matrix3d/init%28__________________%29.md): Creates a matrix from individual element values in row-major order.
- [init(diagonal:)](matrix3d/init%28diagonal_%29.md): Creates a diagonal matrix with `s` on the diagonal and zeros elsewhere.

### Instance Properties

- [matrix](matrix3d/matrix.md): The matrix as a SIMD `double3x3`.

### Subscripts

- [subscript(\_:)](matrix3d/subscript%28__%29.md): Accesses the row at the specified index.
- [subscript(column:)](matrix3d/subscript%28column_%29.md): Accesses the column at the specified index.

### Type Aliases

- [USDValue.Matrix3d.VectorType](matrix3d/vectortype.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDPrim.Attribute.Value](../usdprim/attribute/value.md)
- [USDStage.Object.MetadataValue](../usdstage/object/metadatavalue.md)
- [USDValueProtocol](../usdvalueprotocol.md)
