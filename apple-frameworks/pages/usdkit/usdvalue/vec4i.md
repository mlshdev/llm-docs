> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec4i](https://developer.apple.com/documentation/usdkit/usdvalue/vec4i)

# USDValue.Vec4i

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 4-component 32-bit integer vector.

## Declaration

```swift
@frozen struct Vec4i
```

## Topics

### Initializers

- [init()](vec4i/init%28%29.md): Creates a zero vector.
- [init(\_:)](vec4i/init%28__%29.md): Creates a vector from a `SIMD4<Int32>`.
- [init(\_:\_:\_:\_:)](vec4i/init%28________%29-5ou3l.md): Creates a vector with the given components.
- [init(\_:\_:\_:\_:)](vec4i/init%28________%29-80hw8.md)

### Instance Properties

- [simd](vec4i/simd.md): The vector as a `SIMD4<Int32>`.
- [w](vec4i/w.md)
- [x](vec4i/x.md)
- [y](vec4i/y.md)
- [z](vec4i/z.md)

### Subscripts

- [subscript(\_:)](vec4i/subscript%28__%29.md): Accesses the component at the specified index.

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
