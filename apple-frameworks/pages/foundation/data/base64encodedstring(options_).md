> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/data/base64encodedstring(options:)

# base64EncodedString(options:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a Base-64 encoded string.

## Declaration

```swift
func base64EncodedString(options: Data.Base64EncodingOptions = []) -> String
```

## Parameters

- `options`: The options to use for the encoding. Default value is `[]`.

<a id="return-value"></a>

## Return Value

The Base-64 encoded string.

## See Also

### Base-64 Encoding

- [base64EncodedData(options:)](base64encodeddata%28options_%29.md): Returns Base-64 encoded data.
- [Data.Base64DecodingOptions](base64decodingoptions.md): Options to use when decoding data.
- [Data.Base64EncodingOptions](base64encodingoptions.md): Options to use when encoding data.
