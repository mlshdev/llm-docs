> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec4f](https://developer.apple.com/documentation/usdkit/usdvalue/vec4f)

# USDValue.Vec4f

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4-component single-precision vector.

## Declaration

```swift
@frozen struct Vec4f
```

## Topics

### Initializers

- [init()](vec4f/init%28%29.md): Creates a zero vector.
- [init(\_:)](vec4f/init%28__%29.md): Creates a vector from a `SIMD4<Float>`.
- [init(\_:\_:\_:\_:)](vec4f/init%28________%29.md): Creates a vector with the given components.

### Instance Properties

- [simd](vec4f/simd.md): The vector as a `SIMD4<Float>`.
- [w](vec4f/w.md)
- [x](vec4f/x.md)
- [y](vec4f/y.md)
- [z](vec4f/z.md)

### Subscripts

- [subscript(\_:)](vec4f/subscript%28__%29.md): Accesses the component at the specified index.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [USDPrim.Attribute.Value](../usdprim/attribute/value.md)
- [USDStage.Object.MetadataValue](../usdstage/object/metadatavalue.md)
- [USDValueProtocol](../usdvalueprotocol.md)
