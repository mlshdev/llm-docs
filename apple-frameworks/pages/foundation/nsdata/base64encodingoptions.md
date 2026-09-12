> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/base64encodingoptions](https://developer.apple.com/documentation/foundation/nsdata/base64encodingoptions)

# NSData.Base64EncodingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to Base64 encode data.

## Declaration

```swift
struct Base64EncodingOptions
```

## Topics

### Initializers

- [init(rawValue:)](base64encodingoptions/init%28rawvalue_%29.md)

### Constants

- [lineLength64Characters](base64encodingoptions/linelength64characters.md): Set the maximum line length to 64 characters, after which a line ending is inserted.
- [lineLength76Characters](base64encodingoptions/linelength76characters.md): Set the maximum line length to 76 characters, after which a line ending is inserted.
- [endLineWithCarriageReturn](base64encodingoptions/endlinewithcarriagereturn.md): When a maximum line length is set, specify that the line ending to insert should include a carriage return.
- [endLineWithLineFeed](base64encodingoptions/endlinewithlinefeed.md): When a maximum line length is set, specify that the line ending to insert should include a line feed.

### Type Properties

- [base64URLAlphabet](base64encodingoptions/base64urlalphabet.md): Use the base64url alphabet to encode the data
- [omitPaddingCharacter](base64encodingoptions/omitpaddingcharacter.md): Omit the `=` padding characters in the end of the base64 encoded result

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
- [NSData.Base64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.

# NSDataBase64EncodingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to Base64 encode data.

## Declaration

```objectivec
enum NSDataBase64EncodingOptions : NSUInteger;
```

## Topics

### Constants

- [NSDataBase64Encoding64CharacterLineLength](base64encodingoptions/linelength64characters.md): Set the maximum line length to 64 characters, after which a line ending is inserted.
- [NSDataBase64Encoding76CharacterLineLength](base64encodingoptions/linelength76characters.md): Set the maximum line length to 76 characters, after which a line ending is inserted.
- [NSDataBase64EncodingEndLineWithCarriageReturn](base64encodingoptions/endlinewithcarriagereturn.md): When a maximum line length is set, specify that the line ending to insert should include a carriage return.
- [NSDataBase64EncodingEndLineWithLineFeed](base64encodingoptions/endlinewithlinefeed.md): When a maximum line length is set, specify that the line ending to insert should include a line feed.

## See Also

### Encoding and Decoding Base64 Representations

- [initWithBase64Encoding:](init%28base64encoding_%29.md): Deprecated. Initializes a data object initialized with the given Base64 encoded string.
- [base64EncodedDataWithOptions:](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedStringWithOptions:](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSDataBase64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.
