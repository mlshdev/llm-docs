> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdvalue/quatf](https://developer.apple.com/documentation/usdkit/usdvalue/quatf)

# USDValue.Quatf

**Framework:** USDKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@frozen struct Quatf
```

## Topics

### Initializers

- [init()](quatf/init%28%29.md): Creates a zero quaternion.
- [init(real:imaginary:)](quatf/init%28real_imaginary_%29.md): Creates a quaternion from real and imaginary components.

### Instance Properties

- [imaginary](quatf/imaginary.md): The imaginary (vector) component.
- [real](quatf/real.md): The real (scalar) component.

### Type Properties

- [identity](quatf/identity.md): The identity quaternion `(real: 1, imaginary: (0, 0, 0))`.
- [zero](quatf/zero.md): The zero quaternion `(0, 0, 0, 0)`.

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
