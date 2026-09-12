> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/minmaxscaler/transformer](https://developer.apple.com/documentation/createmlcomponents/minmaxscaler/transformer)

# MinMaxScaler.Transformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that scales the input values so that they all lie in a closed range.

## Declaration

```swift
struct Transformer
```

## Topics

### Creating a transformer

- [init(desiredRange:fittedRange:)](transformer/init%28desiredrange_fittedrange_%29.md): Creates a minmax scaling transformer.

### Getting the properties

- [desiredRange](transformer/desiredrange.md): The desired range of transformed values.
- [fittedRange](transformer/fittedrange.md): The fitted range derived by the estimator when fitting.

### Performing the transformation

- [applied(to:eventHandler:)](transformer/applied%28to_eventhandler_%29.md): Scales the input values so that they all lie in the closed range `[minimum, maximum]`.

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
