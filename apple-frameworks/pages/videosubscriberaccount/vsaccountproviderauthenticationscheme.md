> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountproviderauthenticationscheme](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderauthenticationscheme)

# VSAccountProviderAuthenticationScheme (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS · iPadOS · macOS · tvOS · visionOS

Authentication schemes for account provider requests and responses.

## Declaration

```swift
struct VSAccountProviderAuthenticationScheme
```

<a id="Discussion"></a>

## Discussion

If the minimum version your app supports is outside the availability of the [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md) values, you must create an authentication scheme value using the raw string.

```swift
let request = VSAccountMetadataRequest()
// ...
if #available(iOS 13.0, *) {
  request.supportedAuthenticationSchemes = [.api]
} else {
  request.supportedAuthenticationSchemes = [VSAccountProviderAuthenticationScheme("API")]
}
```

The following table shows the raw strings for the [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md) values.

| Scheme | Raw Value |
| --- | --- |
| saml | “SAML” |
| api | “API” |

## Topics

### Creating an Authentication Scheme

- [init(\_:)](vsaccountproviderauthenticationscheme/init%28__%29.md): Creates a new authentication scheme with the specified string.
- [init(rawValue:)](vsaccountproviderauthenticationscheme/init%28rawvalue_%29.md): Creates a new authentication scheme with the specified raw value.

### Authentication Scheme Types

- [saml](vsaccountproviderauthenticationscheme/saml.md): Represents a SAML authentication scheme.
- [api](vsaccountproviderauthenticationscheme/api.md): Represents any authentication scheme.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enqueuing requests

- [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.

# VSAccountProviderAuthenticationScheme (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · macOS · tvOS · visionOS

Authentication schemes for account provider requests and responses.

## Declaration

```objectivec
typedef NSString * VSAccountProviderAuthenticationScheme;
```

<a id="Discussion"></a>

## Discussion

If the minimum version your app supports is outside the availability of the [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md) values, you must create an authentication scheme value using the raw string.

```swift
let request = VSAccountMetadataRequest()
// ...
if #available(iOS 13.0, *) {
  request.supportedAuthenticationSchemes = [.api]
} else {
  request.supportedAuthenticationSchemes = [VSAccountProviderAuthenticationScheme("API")]
}
```

The following table shows the raw strings for the [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md) values.

| Scheme | Raw Value |
| --- | --- |
| saml | “SAML” |
| api | “API” |

## Topics

### Authentication Scheme Types

- [VSAccountProviderAuthenticationSchemeSAML](vsaccountproviderauthenticationscheme/saml.md): Represents a SAML authentication scheme.
- [VSAccountProviderAuthenticationSchemeAPI](vsaccountproviderauthenticationscheme/api.md): Represents any authentication scheme.

## See Also

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
