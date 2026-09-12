> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec4d](https://developer.apple.com/documentation/usdkit/usdvalue/vec4d)

# USDValue.Vec4d

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4-component double-precision vector.

## Declaration

```swift
@frozen struct Vec4d
```

## Topics

### Initializers

- [init()](vec4d/init%28%29.md): Creates a zero vector.
- [init(\_:)](vec4d/init%28__%29.md): Creates a vector from a `SIMD4<Double>`.
- [init(\_:\_:\_:\_:)](vec4d/init%28________%29.md): Creates a vector with the given components.

### Instance Properties

- [simd](vec4d/simd.md): The vector as a `SIMD4<Double>`.
- [w](vec4d/w.md)
- [x](vec4d/x.md)
- [y](vec4d/y.md)
- [z](vec4d/z.md)

### Subscripts

- [subscript(\_:)](vec4d/subscript%28__%29.md): Accesses the component at the specified index.

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
