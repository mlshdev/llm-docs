> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/standardscaler/transformer](https://developer.apple.com/documentation/createmlcomponents/standardscaler/transformer)

# StandardScaler.Transformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that standardizes the input by removing the mean and scaling to unit variance.

## Declaration

```swift
struct Transformer
```

## Topics

### Creating a transformer

- [init(mean:standardDeviation:)](transformer/init%28mean_standarddeviation_%29.md): Creates a standard scaling transformer.

### Getting the properties

- [mean](transformer/mean.md): The mean used for offsetting.
- [standardDeviation](transformer/standarddeviation.md): The standard deviation used for scaling.

### Performing the transformation

- [applied(to:eventHandler:)](transformer/applied%28to_eventhandler_%29.md): Scales the input values using the calculation `(input - mean) / standardDeviation`.

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
