> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(base64encoding:)](https://developer.apple.com/documentation/foundation/nsdata/init(base64encoding:))

# init(base64Encoding:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 4.0+ (deprecated in 7.0) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a data object initialized with the given Base64 encoded string.

> You should transition to either [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md) or [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md).

## Declaration

```swift
init?(base64Encoding base64String: String)
```

## Parameters

- `base64String`: A Base-64 encoded string.

<a id="return-value"></a>

## Return Value

A data object built by Base-64 decoding the provided string. Returns `nil` if the data object could not be decoded.

<a id="Discussion"></a>

## Discussion

Although this method was only introduced publicly for iOS 7, it has existed since iOS 4; you can use it if your application needs to target an operating system prior to iOS 7. This method behaves like [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md), but ignores all unknown characters.

## See Also

### Encoding and Decoding Base64 Representations

- [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md): Initializes a data object with the given Base64 encoded data.
- [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md): Initializes a data object with the given Base64 encoded string.
- [base64EncodedData(options:)](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedString(options:)](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding()](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSData.Base64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSData.Base64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.

# initWithBase64Encoding: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.9) · tvOS 9.0+ (deprecated in 9.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Initializes a data object initialized with the given Base64 encoded string.

> You should transition to either [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md) or [init(base64EncodedData:options:)](init%28base64encodeddata_options_%29.md).

## Declaration

```objectivec
- (id) initWithBase64Encoding:(NSString *) base64String;
```

## Parameters

- `base64String`: A Base-64 encoded string.

<a id="return-value"></a>

## Return Value

A data object built by Base-64 decoding the provided string. Returns `nil` if the data object could not be decoded.

<a id="Discussion"></a>

## Discussion

Although this method was only introduced publicly for iOS 7, it has existed since iOS 4; you can use it if your application needs to target an operating system prior to iOS 7. This method behaves like [init(base64EncodedString:options:)](init%28base64encodedstring_options_%29.md), but ignores all unknown characters.

## See Also

### Encoding and Decoding Base64 Representations

- [base64EncodedDataWithOptions:](base64encodeddata%28options_%29.md): Creates a Base64, UTF-8 encoded data object from the string using the given options.
- [base64EncodedStringWithOptions:](base64encodedstring%28options_%29.md): Creates a Base64 encoded string from the string using the given options.
- [base64Encoding](base64encoding%28%29.md): Deprecated. Initializes a Base64 encoded string from the string.
- [NSDataBase64EncodingOptions](base64encodingoptions.md): Options for methods used to Base64 encode data.
- [NSDataBase64DecodingOptions](base64decodingoptions.md): Options to modify the decoding algorithm used to decode Base64 encoded data.
