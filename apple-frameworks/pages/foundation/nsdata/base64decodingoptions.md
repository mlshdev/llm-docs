> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/base64decodingoptions](https://developer.apple.com/documentation/foundation/nsdata/base64decodingoptions)

# NSData.Base64DecodingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to modify the decoding algorithm used to decode Base64 encoded data.

## Declaration

```swift
struct Base64DecodingOptions
```

## Topics

### Initializers

- [init(rawValue:)](base64decodingoptions/init%28rawvalue_%29.md)

### Constants

- [ignoreUnknownCharacters](base64decodingoptions/ignoreunknowncharacters.md): Modify the decoding algorithm so that it ignores unknown non-Base-64 bytes, including line ending characters.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Encoding and Decoding Base64 Representations

- [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md): Initializes a data object with the given Base64 encoded data.
- [init(base64Encoding:)](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md): Initializes a data object with the given Base64 encoded string.
- [base64EncodedData(options:)](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedString(options:)](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding()](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSData.Base64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.

# NSDataBase64DecodingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options to modify the decoding algorithm used to decode Base64 encoded data.

## Declaration

```objectivec
enum NSDataBase64DecodingOptions : NSUInteger;
```

## Topics

### Constants

- [NSDataBase64DecodingIgnoreUnknownCharacters](base64decodingoptions/ignoreunknowncharacters.md): Modify the decoding algorithm so that it ignores unknown non-Base-64 bytes, including line ending characters.

## See Also

### Encoding and Decoding Base64 Representations

- [initWithBase64Encoding:](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [base64EncodedDataWithOptions:](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedStringWithOptions:](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSDataBase64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
