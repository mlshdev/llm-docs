> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/dataencodingstrategy-swift.enum](https://developer.apple.com/documentation/foundation/jsonencoder/dataencodingstrategy-swift.enum)

# JSONEncoder.DataEncodingStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategies for encoding raw data.

## Declaration

```swift
enum DataEncodingStrategy
```

## Topics

### Base64 Encoding

- [JSONEncoder.DataEncodingStrategy.base64](dataencodingstrategy-swift.enum/base64.md): The strategy that encodes data using Base 64 encoding.

### Custom Encoding

- [JSONEncoder.DataEncodingStrategy.custom(\_:)](dataencodingstrategy-swift.enum/custom%28__%29.md): The strategy that encodes data using a user-defined function.

### Data Encoding

- [JSONEncoder.DataEncodingStrategy.deferredToData](dataencodingstrategy-swift.enum/deferredtodata.md): The strategy that encodes data using the encoding specified by the data instance itself.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Encoding Raw Data

- [dataEncodingStrategy](dataencodingstrategy-swift.property.md): The strategy that an encoder uses to encode raw data.
