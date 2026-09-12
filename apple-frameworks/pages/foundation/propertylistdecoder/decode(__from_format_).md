> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistdecoder/decode(_:from:format:)](https://developer.apple.com/documentation/foundation/propertylistdecoder/decode(_:from:format:))

# decode(\_:from:format:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a value of the specified type by decoding a property list using the supplied format.

## Declaration

```swift
func decode<T>(_ type: T.Type, from data: Data, format: inout PropertyListDecoder.PropertyListFormat) throws -> T where T : Decodable
```

<a id="Discussion"></a>

## Discussion

If the data is not a valid property list, this method throws the [DecodingError.dataCorrupted(\_:)](https://developer.apple.com/documentation/swift/decodingerror/datacorrupted%28_:%29) error. If a value within the property list fails to decode, this method throws the corresponding error.

## See Also

### Customizing Decoding

- [userInfo](userinfo.md): A dictionary you use to customize decoding by providing contextual information.
