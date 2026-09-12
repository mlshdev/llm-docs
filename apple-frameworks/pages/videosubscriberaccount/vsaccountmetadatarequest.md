> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadatarequest](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadatarequest)

# VSAccountMetadataRequest (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

An object that specifies what subscriber account information your app retrieves.

## Declaration

```swift
class VSAccountMetadataRequest
```

<a id="overview"></a>

## Overview

Use a `VSAccountMetadataRequest` object to indicate the specific information your app will obtain about a subscriber from their subscription provider. Also, use this object to provide information to the subscription provider that it needs to perform the request, such as a verification token, the authentication schemes your app supports, or your app’s identifier.

## Topics

### Requesting TV Provider Info

- [includeAccountProviderIdentifier](vsaccountmetadatarequest/includeaccountprovideridentifier.md): A Boolean value that indicates whether your app requests the identifier of the account provider.
- [includeAuthenticationExpirationDate](vsaccountmetadatarequest/includeauthenticationexpirationdate.md): A Boolean value that indicates whether your app requests the expiration date of the user’s current authentication session.

### Requesting App-Level Authentication

- [attributeNames](vsaccountmetadatarequest/attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](vsaccountmetadatarequest/channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](vsaccountmetadatarequest/supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](vsaccountmetadatarequest/supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](vsaccountmetadatarequest/verificationtoken.md): A token that your app sends to an account provider to identify itself.

### Specifying Additional Options

- [isInterruptionAllowed](vsaccountmetadatarequest/isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](vsaccountmetadatarequest/featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](vsaccountmetadatarequest/forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](vsaccountmetadatarequest/localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](vsaccountmetadatarequest/applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

### Supporting Authentication Share

- [accountProviderAuthenticationToken](vsaccountmetadatarequest/accountproviderauthenticationtoken.md): An authentication session token that your app sends to the account provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Enqueuing requests

- [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

# VSAccountMetadataRequest (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

An object that specifies what subscriber account information your app retrieves.

## Declaration

```objectivec
@interface VSAccountMetadataRequest : NSObject
```

<a id="overview"></a>

## Overview

Use a `VSAccountMetadataRequest` object to indicate the specific information your app will obtain about a subscriber from their subscription provider. Also, use this object to provide information to the subscription provider that it needs to perform the request, such as a verification token, the authentication schemes your app supports, or your app’s identifier.

## Topics

### Requesting TV Provider Info

- [includeAccountProviderIdentifier](vsaccountmetadatarequest/includeaccountprovideridentifier.md): A Boolean value that indicates whether your app requests the identifier of the account provider.
- [includeAuthenticationExpirationDate](vsaccountmetadatarequest/includeauthenticationexpirationdate.md): A Boolean value that indicates whether your app requests the expiration date of the user’s current authentication session.

### Requesting App-Level Authentication

- [attributeNames](vsaccountmetadatarequest/attributenames.md): The SAML attributes that your app sends to the account provider.
- [channelIdentifier](vsaccountmetadatarequest/channelidentifier.md): The channel identifier for the request.
- [supportedAccountProviderIdentifiers](vsaccountmetadatarequest/supportedaccountprovideridentifiers.md): A list of identifiers for TV providers that your app supports.
- [supportedAuthenticationSchemes](vsaccountmetadatarequest/supportedauthenticationschemes.md): A collection of authentication schemes your app supports for this request.
- [verificationToken](vsaccountmetadatarequest/verificationtoken.md): A token that your app sends to an account provider to identify itself.

### Specifying Additional Options

- [interruptionAllowed](vsaccountmetadatarequest/isinterruptionallowed.md): A Boolean value that indicates whether your app can prompt the user to authenticate to complete the request.
- [featuredAccountProviderIdentifiers](vsaccountmetadatarequest/featuredaccountprovideridentifiers.md): The providers your app lists prominently during authentication.
- [forceAuthentication](vsaccountmetadatarequest/forceauthentication.md): A Boolean value that indicates whether the app ignores cached credentials.
- [localizedVideoTitle](vsaccountmetadatarequest/localizedvideotitle.md): A short, user-presentable name for the video that the user wants to play.
- [applicationAccountProviders](vsaccountmetadatarequest/applicationaccountproviders.md): An array of application-specific providers to add to the list of account providers.

### Supporting Authentication Share

- [accountProviderAuthenticationToken](vsaccountmetadatarequest/accountproviderauthenticationtoken.md): An authentication session token that your app sends to the account provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.
