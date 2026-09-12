> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/attributenames](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/attributenames)

# attributeNames (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The SAML attributes that your app sends to the account provider.

## Declaration

```swift
var attributeNames: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to add an array of SAML attribute names to a SAML attribute query request.

## See Also

### Requesting App-Level Authentication

- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.

# attributeNames (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The SAML attributes that your app sends to the account provider.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * attributeNames;
```

<a id="Discussion"></a>

## Discussion

Use this property to add an array of SAML attribute names to a SAML attribute query request.

## See Also

### Requesting App-Level Authentication

- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.
