> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/matrix4d](https://developer.apple.com/documentation/usdkit/usdvalue/matrix4d)

# USDValue.Matrix4d

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4x4 matrix of double-precision floating-point values.

## Declaration

```swift
@frozen struct Matrix4d
```

## Topics

### Initializers

- [init(\_:)](matrix4d/init%28__%29-6b27q.md): Creates a matrix from a Spatial projective transform (double-precision).
- [init(\_:)](matrix4d/init%28__%29-9y0w7.md): Creates a matrix from a Spatial projective transform (single-precision).
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](matrix4d/init%28________________________________%29.md): Creates a matrix from individual element values in row-major order.
- [init(diagonal:)](matrix4d/init%28diagonal_%29.md): Creates a diagonal matrix with `s` on the diagonal and zeros elsewhere.

### Instance Properties

- [projectiveTransform](matrix4d/projectivetransform.md): The matrix as a Spatial projective transform.

### Subscripts

- [subscript(\_:)](matrix4d/subscript%28__%29.md): Accesses the row at the specified index.
- [subscript(column:)](matrix4d/subscript%28column_%29.md): Accesses the column at the specified index.

### Type Aliases

- [USDValue.Matrix4d.VectorType](matrix4d/vectortype.md)

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
