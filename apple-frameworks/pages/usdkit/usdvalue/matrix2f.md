> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/matrix2f](https://developer.apple.com/documentation/usdkit/usdvalue/matrix2f)

# USDValue.Matrix2f

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 2x2 matrix of single-precision floating-point values.

## Declaration

```swift
@frozen struct Matrix2f
```

## Topics

### Initializers

- [init(\_:\_:\_:\_:)](matrix2f/init%28________%29.md): Creates a matrix from individual element values in row-major order.
- [init(diagonal:)](matrix2f/init%28diagonal_%29.md): Creates a diagonal matrix with `s` on the diagonal and zeros elsewhere.

### Subscripts

- [subscript(\_:)](matrix2f/subscript%28__%29.md): Accesses the row at the specified index.
- [subscript(column:)](matrix2f/subscript%28column_%29.md): Accesses the column at the specified index.

### Type Aliases

- [USDValue.Matrix2f.VectorType](matrix2f/vectortype.md)

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
