> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/base64encodeddata(options:)](https://developer.apple.com/documentation/foundation/data/base64encodeddata(options:))

# base64EncodedData(options:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns Base-64 encoded data.

## Declaration

```swift
func base64EncodedData(options: Data.Base64EncodingOptions = []) -> Data
```

## Parameters

- `options`: The options to use for the encoding. Default value is `[]`.

<a id="return-value"></a>

## Return Value

The Base-64 encoded data.

## See Also

### Base-64 Encoding

- [base64EncodedString(options:)](base64encodedstring%28options_%29.md): Returns a Base-64 encoded string.
- [Data.Base64DecodingOptions](base64decodingoptions.md): Options to use when decoding data.
- [Data.Base64EncodingOptions](base64encodingoptions.md): Options to use when encoding data.
