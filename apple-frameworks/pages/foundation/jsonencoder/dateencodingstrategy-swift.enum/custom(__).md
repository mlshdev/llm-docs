> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/dateencodingstrategy-swift.enum/custom(_:)](https://developer.apple.com/documentation/foundation/jsonencoder/dateencodingstrategy-swift.enum/custom(_:))

# JSONEncoder.DateEncodingStrategy.custom(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that formats custom dates by calling a user-defined function.

## Declaration

```swift
@preconcurrency case custom(@Sendable (Date, any Encoder) throws -> Void)
```

## Parameters

- `custom`: A closure that receives the data to encode and the encoder instance to encode to.

<a id="Discussion"></a>

## Discussion

If the user-defined function throws, the error propagates upward.

If the user-defined function doesn’t perform any encoding at all, the encoder produces an empty JSON object instead.

## See Also

### Custom Formats

- [JSONEncoder.DateEncodingStrategy.formatted(\_:)](formatted%28__%29.md): The strategy that defers formatting settings to a supplied date formatter.
