> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/init(base64encoded:options:)-3ksry](https://developer.apple.com/documentation/foundation/nsdata/init(base64encoded:options:)-3ksry)

# init(base64Encoded:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the given Base64 encoded string.

## Declaration

```swift
init?(base64Encoded base64String: String, options: NSData.Base64DecodingOptions = [])
```

## Parameters

- `base64String`: A Base-64 encoded string.
- `options`: A mask that specifies options for Base-64 decoding the data. Possible values are given in [NSData.Base64DecodingOptions](base64decodingoptions.md).

<a id="return-value"></a>

## Return Value

A data object built by Base64 decoding the provided string. Returns `nil` if the data object could not be decoded.

<a id="discussion"></a>

## Discussion

The default implementation of this method will reject non-alphabet characters, including line break characters. To support different encodings and ignore non-alphabet characters, specify an `options` value of [ignoreUnknownCharacters](base64decodingoptions/ignoreunknowncharacters.md).

# initWithBase64EncodedString:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initializes a data object with the given Base64 encoded string.

## Declaration

```objectivec
- (instancetype) initWithBase64EncodedString:(NSString *) base64String options:(NSDataBase64DecodingOptions) options;
```

## Parameters

- `base64String`: A Base-64 encoded string.
- `options`: A mask that specifies options for Base-64 decoding the data. Possible values are given in [NSDataBase64DecodingOptions](base64decodingoptions.md).

<a id="return-value"></a>

## Return Value

A data object built by Base64 decoding the provided string. Returns `nil` if the data object could not be decoded.

<a id="discussion"></a>

## Discussion

The default implementation of this method will reject non-alphabet characters, including line break characters. To support different encodings and ignore non-alphabet characters, specify an `options` value of [NSDataBase64DecodingIgnoreUnknownCharacters](base64decodingoptions/ignoreunknowncharacters.md).
