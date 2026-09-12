> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/nonconformingfloatdecodingstrategy-swift.property](https://developer.apple.com/documentation/foundation/jsondecoder/nonconformingfloatdecodingstrategy-swift.property)

# nonConformingFloatDecodingStrategy

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The strategy used by a decoder when it encounters exceptional floating-point values.

## Declaration

```swift
var nonConformingFloatDecodingStrategy: JSONDecoder.NonConformingFloatDecodingStrategy { get set }
```

<a id="Discussion"></a>

## Discussion

The default strategy is the [JSONDecoder.NonConformingFloatDecodingStrategy.throw](nonconformingfloatdecodingstrategy-swift.enum/throw.md) strategy.

## See Also

### Decoding Exceptional Numbers

- [JSONDecoder.NonConformingFloatDecodingStrategy](nonconformingfloatdecodingstrategy-swift.enum.md): The strategies for encoding nonconforming floating-point numbers, also known as IEEE 754 exceptional values.
