> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsonencoder/dataencodingstrategy-swift.enum/custom(_:)](https://developer.apple.com/documentation/foundation/jsonencoder/dataencodingstrategy-swift.enum/custom(_:))

# JSONEncoder.DataEncodingStrategy.custom(\_:)

**Framework:** Foundation  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy that encodes data using a user-defined function.

## Declaration

```swift
@preconcurrency case custom(@Sendable (Data, any Encoder) throws -> Void)
```

## Parameters

- `custom`: A closure that receives the data to encode and the encoder instance to encode to.

<a id="Discussion"></a>

## Discussion

If the user-defined function throws, the encoder uses an empty container in place of the data.
