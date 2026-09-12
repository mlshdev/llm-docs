> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistdecoder/decode(_:from:)](https://developer.apple.com/documentation/foundation/propertylistdecoder/decode(_:from:))

# decode(\_:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value of the specified type by decoding a property list using the default property list format.

## Declaration

```swift
func decode<T>(_ type: T.Type, from data: Data) throws -> T where T : Decodable
```

## Parameters

- `type`: The type of the value to decode from the supplied property list.
- `data`: The property list to decode.

<a id="Discussion"></a>

## Discussion

If the data is not a valid property list, this method throws the [DecodingError.dataCorrupted(\_:)](https://developer.apple.com/documentation/swift/decodingerror/datacorrupted%28_:%29) error. If a value within the property list fails to decode, this method throws the corresponding error.

## See Also

### Decoding

- [init()](init%28%29.md): Creates a new, reusable property list decoder.
