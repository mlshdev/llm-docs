> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datedecodingstrategy-swift.enum/custom(_:)](https://developer.apple.com/documentation/foundation/jsondecoder/datedecodingstrategy-swift.enum/custom(_:))

# JSONDecoder.DateDecodingStrategy.custom(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that formats custom dates by calling a user-defined function.

## Declaration

```swift
@preconcurrency case custom(@Sendable (any Decoder) throws -> Date)
```

## See Also

### Custom Formats

- [JSONDecoder.DateDecodingStrategy.formatted(\_:)](formatted%28__%29.md): The strategy that defers formatting settings to a supplied date formatter.
