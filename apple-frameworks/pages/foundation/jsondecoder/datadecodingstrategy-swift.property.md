> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datadecodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsondecoder/datadecodingstrategy-swift.property)

# dataDecodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that a decoder uses to decode raw data.

## Declaration

```swift
var dataDecodingStrategy: JSONDecoder.DataDecodingStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default strategy is the [JSONDecoder.DataDecodingStrategy.base64](datadecodingstrategy-swift.enum/base64.md) strategy.

## See Also

### Decoding Raw Data

- [JSONDecoder.DataDecodingStrategy](datadecodingstrategy-swift.enum.md): The strategies for decoding raw data.
