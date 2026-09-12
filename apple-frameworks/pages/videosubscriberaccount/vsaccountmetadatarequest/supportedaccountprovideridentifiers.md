> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/supportedaccountprovideridentifiers](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/supportedaccountprovideridentifiers)

# supportedAccountProviderIdentifiers (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A list of identifiers for TV providers that your app supports.

## Declaration

```swift
var supportedAccountProviderIdentifiers: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which TV providers receive the request. An empty list indicates that your app supports all TV providers in the region.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.

# supportedAccountProviderIdentifiers (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A list of identifiers for TV providers that your app supports.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSString *> * supportedAccountProviderIdentifiers;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify which TV providers receive the request. An empty list indicates that your app supports all TV providers in the region.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](channelidentifier.md): The channel identifier for the request.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.
