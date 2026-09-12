> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datedecodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsondecoder/datedecodingstrategy-swift.property)

# dateDecodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy used when decoding dates from part of a JSON object.

## Declaration

```swift
var dateDecodingStrategy: JSONDecoder.DateDecodingStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default strategy is the [JSONDecoder.DateDecodingStrategy.deferredToDate](datedecodingstrategy-swift.enum/deferredtodate.md) strategy.

## See Also

### Decoding Dates

- [JSONDecoder.DateDecodingStrategy](datedecodingstrategy-swift.enum.md): The strategies available for formatting dates when decoding them from JSON.
