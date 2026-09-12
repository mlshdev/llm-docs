> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/jsondecoder/decode(_:from:)](https://developer.apple.com/documentation/foundation/jsondecoder/decode(_:from:))

# decode(\_:from:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value of the type you specify, decoded from a JSON object.

## Declaration

```swift
func decode<T>(_ type: T.Type, from data: Data) throws -> T where T : Decodable
```

## Parameters

- `type`: The type of the value to decode from the supplied JSON object.
- `data`: The JSON object to decode.

<a id="return-value"></a>

## Return Value

A value of the specified type, if the decoder can parse the data.

<a id="Discussion"></a>

## Discussion

If the data isn’t valid JSON, this method throws the [DecodingError.dataCorrupted(\_:)](https://developer.apple.com/documentation/swift/decodingerror/datacorrupted%28_:%29) error. If a value within the JSON fails to decode, this method throws the corresponding error.
