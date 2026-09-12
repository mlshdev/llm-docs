> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmetadata](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmetadata)

# VSAccountMetadata (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A collection of information for a subscriber’s account.

## Declaration

```swift
class VSAccountMetadata
```

<a id="overview"></a>

## Overview

The [VSAccountMetadata](vsaccountmetadata.md) object contains the information you requested in the [VSAccountMetadataRequest](vsaccountmetadatarequest.md) object that you passed to the [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md) method. If the call succeeds, the system sends the [VSAccountMetadata](vsaccountmetadata.md) object to your app’s completion handler for your app to process.

## Topics

### Getting TV Provider Info

- [accountProviderIdentifier](vsaccountmetadata/accountprovideridentifier.md): The unique identifier of the account provider.
- [authenticationExpirationDate](vsaccountmetadata/authenticationexpirationdate.md): The date when the user’s current authentication session expires.

### Getting App Authentication Info

- [accountProviderResponse](vsaccountmetadata/accountproviderresponse.md): The response from the account provider.
- [samlAttributeQueryResponse](vsaccountmetadata/samlattributequeryresponse.md): The SAML response from the account provider.
- [verificationData](vsaccountmetadata/verificationdata.md): Data you use to verify that the response came from the account provider.

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
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

# VSAccountMetadata (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

A collection of information for a subscriber’s account.

## Declaration

```objectivec
@interface VSAccountMetadata : NSObject
```

<a id="overview"></a>

## Overview

The [VSAccountMetadata](vsaccountmetadata.md) object contains the information you requested in the [VSAccountMetadataRequest](vsaccountmetadatarequest.md) object that you passed to the [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md) method. If the call succeeds, the system sends the [VSAccountMetadata](vsaccountmetadata.md) object to your app’s completion handler for your app to process.

## Topics

### Getting TV Provider Info

- [accountProviderIdentifier](vsaccountmetadata/accountprovideridentifier.md): The unique identifier of the account provider.
- [authenticationExpirationDate](vsaccountmetadata/authenticationexpirationdate.md): The date when the user’s current authentication session expires.

### Getting App Authentication Info

- [accountProviderResponse](vsaccountmetadata/accountproviderresponse.md): The response from the account provider.
- [SAMLAttributeQueryResponse](vsaccountmetadata/samlattributequeryresponse.md): The SAML response from the account provider.
- [verificationData](vsaccountmetadata/verificationdata.md): Data you use to verify that the response came from the account provider.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.
