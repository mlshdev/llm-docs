> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/dateencodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsonencoder/dateencodingstrategy-swift.property)

# dateEncodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy used when encoding dates as part of a JSON object.

## Declaration

```swift
var dateEncodingStrategy: JSONEncoder.DateEncodingStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default strategy is the [JSONEncoder.DateEncodingStrategy.deferredToDate](dateencodingstrategy-swift.enum/deferredtodate.md) strategy.

## See Also

### Encoding Dates

- [JSONEncoder.DateEncodingStrategy](dateencodingstrategy-swift.enum.md): The formatting strategies available for formatting dates when encoding a date as JSON.
