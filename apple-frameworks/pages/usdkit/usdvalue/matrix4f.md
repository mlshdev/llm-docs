> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/matrix4f](https://developer.apple.com/documentation/usdkit/usdvalue/matrix4f)

# USDValue.Matrix4f

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4x4 matrix of single-precision floating-point values.

## Declaration

```swift
@frozen struct Matrix4f
```

## Topics

### Initializers

- [init(\_:)](matrix4f/init%28__%29.md): Creates a matrix from a Spatial projective transform (single-precision).
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](matrix4f/init%28________________________________%29.md): Creates a matrix from individual element values in row-major order.
- [init(diagonal:)](matrix4f/init%28diagonal_%29.md): Creates a diagonal matrix with `s` on the diagonal and zeros elsewhere.

### Instance Properties

- [projectiveTransform](matrix4f/projectivetransform.md): The matrix as a Spatial projective transform.

### Subscripts

- [subscript(\_:)](matrix4f/subscript%28__%29.md): Accesses the row at the specified index.
- [subscript(column:)](matrix4f/subscript%28column_%29.md): Accesses the column at the specified index.

### Type Aliases

- [USDValue.Matrix4f.VectorType](matrix4f/vectortype.md)

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
- [USDValueProtocol](../usdvalueprotocol.md)
