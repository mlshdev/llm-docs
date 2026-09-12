> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/vec3h](https://developer.apple.com/documentation/usdkit/usdvalue/vec3h)

# USDValue.Vec3h

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A 3-component half-precision vector.

## Declaration

```swift
@frozen struct Vec3h
```

## Topics

### Initializers

- [init()](vec3h/init%28%29.md): Creates a zero vector.
- [init(\_:\_:\_:)](vec3h/init%28______%29.md): Creates a vector with the given components.

### Instance Properties

- [simd](vec3h/simd.md): The vector as a `SIMD3<Float16>`.
- [x](vec3h/x.md)
- [y](vec3h/y.md)
- [z](vec3h/z.md)

### Subscripts

- [subscript(\_:)](vec3h/subscript%28__%29.md): Accesses the component at the specified index.

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
