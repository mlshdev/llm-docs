> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datadecodingstrategy-swift.enum](https://developer.apple.com/documentation/foundation/jsondecoder/datadecodingstrategy-swift.enum)

# JSONDecoder.DataDecodingStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategies for decoding raw data.

## Declaration

```swift
enum DataDecodingStrategy
```

## Topics

### Base64 Decoding

- [JSONDecoder.DataDecodingStrategy.base64](datadecodingstrategy-swift.enum/base64.md): The strategy that decodes data using Base 64 decoding.

### Custom Decoding

- [JSONDecoder.DataDecodingStrategy.custom(\_:)](datadecodingstrategy-swift.enum/custom%28__%29.md): The strategy that decodes data using a user-defined function.

### Data Decoding

- [JSONDecoder.DataDecodingStrategy.deferredToData](datadecodingstrategy-swift.enum/deferredtodata.md): The strategy that encodes data using the encoding specified by the data instance itself.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Decoding Raw Data

- [dataDecodingStrategy](datadecodingstrategy-swift.property.md): The strategy that a decoder uses to decode raw data.
