> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/normalizationscaler/transformer](https://developer.apple.com/documentation/createmlcomponents/normalizationscaler/transformer)

# NormalizationScaler.Transformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that scales the input using a normalization strategy.

## Declaration

```swift
struct Transformer
```

## Topics

### Creating a transformer

- [init(scale:)](transformer/init%28scale_%29.md): Creates a normalization scaling transformer.

### Getting the scale

- [scale](transformer/scale.md): The normalization scale used to scale the input.

### Performing the transformation

- [applied(to:eventHandler:)](transformer/applied%28to_eventhandler_%29.md): Scales the input values using the calculation `input / scale`.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](../transformer.md)
