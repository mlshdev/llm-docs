> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest/channelidentifier](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest/channelidentifier)

# channelIdentifier (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The channel identifier for the request.

## Declaration

```swift
var channelIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This property identifies the app that is making the request. If you distribute multiple apps, use this identifier to communicate which app sent the request.

> **Note**

>  This property is only for applications that use the SAML authentication scheme.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.

# channelIdentifier (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The channel identifier for the request.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * channelIdentifier;
```

<a id="Discussion"></a>

## Discussion

This property identifies the app that is making the request. If you distribute multiple apps, use this identifier to communicate which app sent the request.

> **Note**

>  This property is only for applications that use the SAML authentication scheme.

## See Also

### Requesting App-Level Authentication

- [attributeNames](attributenames.md): The SAML attributes that your app sends to the account provider.
- [supportedAccountProviderIdentifiers](supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](verificationtoken.md): A token that your app sends to an account provider to identify itself.
