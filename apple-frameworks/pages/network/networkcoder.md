> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/networkcoder](https://developer.apple.com/documentation/network/networkcoder)

# NetworkCoder

**Framework:** Network  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
protocol NetworkCoder : Sendable
```

## Topics

### Associated Types

- [Decoder](networkcoder/decoder.md)
- [Encoder](networkcoder/encoder.md)

### Initializers

- [init()](networkcoder/init%28%29.md)

### Instance Methods

- [makeDecoder()](networkcoder/makedecoder%28%29.md): Returns an instance of NetworkDecoder
- [makeEncoder()](networkcoder/makeencoder%28%29.md): Returns an instance of NetworkEncoder

### Type Properties

- [json](networkcoder/json.md): Conforms when `Self` is `NetworkJSONCoder`.
- [propertyList](networkcoder/propertylist.md): Conforms when `Self` is `NetworkPropertyListCoder`.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [NetworkJSONCoder](networkjsoncoder.md)
- [NetworkPropertyListCoder](networkpropertylistcoder.md)
