> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/base64encodedstring(options:)](https://developer.apple.com/documentation/foundation/nsdata/base64encodedstring(options:))

# base64EncodedString(options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Base64 encoded string from the string using the given options.

## Declaration

```swift
func base64EncodedString(options: NSData.Base64EncodingOptions = []) -> String
```

## Parameters

- `options`: A mask that specifies options for Base-64 encoding the data. Possible values are given in [NSData.Base64EncodingOptions](base64encodingoptions.md).

<a id="return-value"></a>

## Return Value

A Base64 encoded string.

<a id="Discussion"></a>

## Discussion

By default, no line endings are inserted.

If you specify one of the line length options ([lineLength64Characters](base64encodingoptions/linelength64characters.md) or [lineLength76Characters](base64encodingoptions/linelength76characters.md)) but don’t specify the kind of line ending to insert, the default line ending is Carriage Return + Line Feed.

## See Also

### Encoding and Decoding Base64 Representations

- [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md): Initializes a data object with the given Base64 encoded data.
- [init(base64Encoding:)](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md): Initializes a data object with the given Base64 encoded string.
- [base64EncodedData(options:)](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64Encoding()](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSData.Base64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSData.Base64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.

# base64EncodedStringWithOptions: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a Base64 encoded string from the string using the given options.

## Declaration

```objectivec
- (NSString *) base64EncodedStringWithOptions:(NSDataBase64EncodingOptions) options;
```

## Parameters

- `options`: A mask that specifies options for Base-64 encoding the data. Possible values are given in [NSDataBase64EncodingOptions](base64encodingoptions.md).

<a id="return-value"></a>

## Return Value

A Base64 encoded string.

<a id="Discussion"></a>

## Discussion

By default, no line endings are inserted.

If you specify one of the line length options ([NSDataBase64Encoding64CharacterLineLength](base64encodingoptions/linelength64characters.md) or [NSDataBase64Encoding76CharacterLineLength](base64encodingoptions/linelength76characters.md)) but don’t specify the kind of line ending to insert, the default line ending is Carriage Return + Line Feed.

## See Also

### Encoding and Decoding Base64 Representations

- [initWithBase64Encoding:](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [base64EncodedDataWithOptions:](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64Encoding](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSDataBase64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSDataBase64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.
