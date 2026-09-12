> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/supportedauthenticationschemes](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/supportedauthenticationschemes)

# supportedAuthenticationSchemes (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

A collection of authentication schemes your app supports for this request.

## Declaration

```swift
var supportedAuthenticationSchemes: [VSAccountProviderAuthenticationScheme] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to check if the authentication schemes your app supports are compatible with account providers. The default is `VSAccountProviderAuthenticationSchemeSAML`.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.

# supportedAuthenticationSchemes (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

A collection of authentication schemes your app supports for this request.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedAuthenticationSchemes;
```

<a id="Discussion"></a>

## Discussion

Use this property to check if the authentication schemes your app supports are compatible with account providers. The default is `VSAccountProviderAuthenticationSchemeSAML`.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.
