> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/estimatorencoder/encodeoptimizer(_:)](https://developer.apple.com/documentation/createmlcomponents/estimatorencoder/encodeoptimizer(_:))

# encodeOptimizer(\_:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Encodes an estimator optimizer.

## Declaration

```swift
mutating func encodeOptimizer<T>(_ value: T) throws where T : Encodable
```

<a id="discussion"></a>

## Discussion

Optimizers are used when fitting an estimator and usually contain state information such as momentum. This method encodes the optimizer state separately from model parameters.

## See Also

### Encoding values

- [encode(\_:)](encode%28__%29.md): Encodes a value.
