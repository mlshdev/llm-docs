> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/onehotencoder/transformer](https://developer.apple.com/documentation/createmlcomponents/onehotencoder/transformer)

# OneHotEncoder.Transformer

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

A transformer that encodes a category as an array of integers.

## Declaration

```swift
struct Transformer
```

## Topics

### Creating a transformer

- [init(categories:)](transformer/init%28categories_%29.md): Creates a one-hot encoder.

### Getting the categories

- [categories](transformer/categories.md): Unique values to encode
- [category(at:)](transformer/category%28at_%29.md): Retrieves the category at the one-hot encoding index.

### Performing the transformation

- [applied(\_:eventHandler:)](transformer/applied%28__eventhandler_%29.md): Performs a one-hot encoding on a sequence of inputs.
- [applied(to:eventHandler:)](transformer/applied%28to_eventhandler_%29.md): Performs a one-hot encoding on a single input.

### Default Implementations

- [Decodable Implementations](transformer/decodable-implementations.md)
- [Encodable Implementations](transformer/encodable-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](../transformer.md)
