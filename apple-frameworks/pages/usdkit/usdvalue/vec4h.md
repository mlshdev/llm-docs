> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec4h](https://developer.apple.com/documentation/usdkit/usdvalue/vec4h)

# USDValue.Vec4h

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4-component half-precision vector.

## Declaration

```swift
@frozen struct Vec4h
```

## Topics

### Initializers

- [init()](vec4h/init%28%29.md): Creates a zero vector.
- [init(\_:\_:\_:\_:)](vec4h/init%28________%29.md): Creates a vector with the given components.

### Instance Properties

- [simd](vec4h/simd.md): The vector as a `SIMD4<Float16>`.
- [w](vec4h/w.md)
- [x](vec4h/x.md)
- [y](vec4h/y.md)
- [z](vec4h/z.md)

### Subscripts

- [subscript(\_:)](vec4h/subscript%28__%29.md): Accesses the component at the specified index.

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
