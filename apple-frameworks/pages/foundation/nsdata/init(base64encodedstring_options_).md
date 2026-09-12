> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(base64encodedstring:options:)](https://developer.apple.com/documentation/foundation/nsdata/init(base64encodedstring:options:))

# init(base64EncodedString:options:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the given Base64 encoded string.

## Declaration

```swift
init?(base64EncodedString base64String: String, options: NSData.Base64DecodingOptions = [])
```

## Parameters

- `base64String`: A Base-64 encoded string.
- `options`: A mask that specifies options for Base-64 decoding the data. Possible values are given in [NSData.Base64DecodingOptions](base64decodingoptions.md).

<a id="return-value"></a>

## Return Value

A data object built by Base64 decoding the provided string. Returns `nil` if the data object could not be decoded.

<a id="Discussion"></a>

## Discussion

The default implementation of this method will reject non-alphabet characters, including line break characters. To support different encodings and ignore non-alphabet characters, specify an `options` value of [ignoreUnknownCharacters](base64decodingoptions/ignoreunknowncharacters.md).

## See Also

### Encoding and Decoding Base64 Representations

- [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md): Initializes a data object with the given Base64 encoded data.
- [init(base64Encoding:)](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [base64EncodedData(options:)](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedString(options:)](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding()](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSData.Base64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSData.Base64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.
