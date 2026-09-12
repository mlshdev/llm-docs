> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountproviderresponse](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountproviderresponse)

# VSAccountProviderResponse (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

An object that contains the response from the account provider.

## Declaration

```swift
class VSAccountProviderResponse
```

<a id="overview"></a>

## Overview

A `VSAccountProviderResponse` object encapsulates the information the account provider sends back to your app, such as authentication scheme type, raw response data, and status code.

## Topics

### Getting Response Info

- [authenticationScheme](vsaccountproviderresponse/authenticationscheme.md): The authentication scheme type of the response.
- [body](vsaccountproviderresponse/body.md): The raw response from the provider.
- [status](vsaccountproviderresponse/status.md): The status code for the response.

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
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

# VSAccountProviderResponse (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · macOS · tvOS 10.1+ · visionOS 1.0+

An object that contains the response from the account provider.

## Declaration

```objectivec
@interface VSAccountProviderResponse : NSObject
```

<a id="overview"></a>

## Overview

A `VSAccountProviderResponse` object encapsulates the information the account provider sends back to your app, such as authentication scheme type, raw response data, and status code.

## Topics

### Getting Response Info

- [authenticationScheme](vsaccountproviderresponse/authenticationscheme.md): The authentication scheme type of the response.
- [body](vsaccountproviderresponse/body.md): The raw response from the provider.
- [status](vsaccountproviderresponse/status.md): The status code for the response.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.
