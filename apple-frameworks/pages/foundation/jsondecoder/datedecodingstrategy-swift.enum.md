> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datedecodingstrategy-swift.enum](https://developer.apple.com/documentation/foundation/jsondecoder/datedecodingstrategy-swift.enum)

# JSONDecoder.DateDecodingStrategy

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategies available for formatting dates when decoding them from JSON.

## Declaration

```swift
enum DateDecodingStrategy
```

## Topics

### Default Formats

- [JSONDecoder.DateDecodingStrategy.deferredToDate](datedecodingstrategy-swift.enum/deferredtodate.md): The strategy that uses formatting from the Date structure.

### Standard Formats

- [JSONDecoder.DateDecodingStrategy.iso8601](datedecodingstrategy-swift.enum/iso8601.md): The strategy that formats dates according to the ISO 8601 standard.

### Custom Formats

- [JSONDecoder.DateDecodingStrategy.formatted(\_:)](datedecodingstrategy-swift.enum/formatted%28__%29.md): The strategy that defers formatting settings to a supplied date formatter.
- [JSONDecoder.DateDecodingStrategy.custom(\_:)](datedecodingstrategy-swift.enum/custom%28__%29.md): The strategy that formats custom dates by calling a user-defined function.

### Epoch Formats

- [JSONDecoder.DateDecodingStrategy.millisecondsSince1970](datedecodingstrategy-swift.enum/millisecondssince1970.md): The strategy that decodes dates in terms of milliseconds since midnight UTC on January 1st, 1970.
- [JSONDecoder.DateDecodingStrategy.secondsSince1970](datedecodingstrategy-swift.enum/secondssince1970.md): The strategy that decodes dates in terms of seconds since midnight UTC on January 1st, 1970.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Decoding Dates

- [dateDecodingStrategy](datedecodingstrategy-swift.property.md): The strategy used when decoding dates from part of a JSON object.
