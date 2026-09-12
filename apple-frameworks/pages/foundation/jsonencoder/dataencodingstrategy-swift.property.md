> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/dataencodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsonencoder/dataencodingstrategy-swift.property)

# dataEncodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that an encoder uses to encode raw data.

## Declaration

```swift
var dataEncodingStrategy: JSONEncoder.DataEncodingStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default strategy is the [JSONEncoder.DataEncodingStrategy.base64](dataencodingstrategy-swift.enum/base64.md) strategy.

## See Also

### Encoding Raw Data

- [JSONEncoder.DataEncodingStrategy](dataencodingstrategy-swift.enum.md): The strategies for encoding raw data.
