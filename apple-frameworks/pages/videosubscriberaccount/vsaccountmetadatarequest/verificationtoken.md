> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/verificationtoken](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/verificationtoken)

# verificationToken (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A token that your app sends to an account provider to identify itself.

## Declaration

```swift
var verificationToken: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Account providers use this token to verify the identity of the requesting app.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.

# verificationToken (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A token that your app sends to an account provider to identify itself.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * verificationToken;
```

<a id="Discussion"></a>

## Discussion

Account providers use this token to verify the identity of the requesting app.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
