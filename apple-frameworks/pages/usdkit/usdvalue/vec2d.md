> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec2d](https://developer.apple.com/documentation/usdkit/usdvalue/vec2d)

# USDValue.Vec2d

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 2-component double-precision vector.

## Declaration

```swift
@frozen struct Vec2d
```

## Topics

### Initializers

- [init()](vec2d/init%28%29.md): Creates a zero vector.
- [init(\_:)](vec2d/init%28__%29.md): Creates a vector from a `SIMD2<Double>`.
- [init(\_:\_:)](vec2d/init%28____%29.md): Creates a vector with the given components.

### Instance Properties

- [simd](vec2d/simd.md): The vector as a `SIMD2<Double>`.
- [x](vec2d/x.md)
- [y](vec2d/y.md)

### Subscripts

- [subscript(\_:)](vec2d/subscript%28__%29.md): Accesses the component at the specified index.

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
