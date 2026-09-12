> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/datadecodingstrategy-swift.enum/custom(_:)](https://developer.apple.com/documentation/foundation/jsondecoder/datadecodingstrategy-swift.enum/custom(_:))

# JSONDecoder.DataDecodingStrategy.custom(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that decodes data using a user-defined function.

## Declaration

```swift
@preconcurrency case custom(@Sendable (any Decoder) throws -> Data)
```
