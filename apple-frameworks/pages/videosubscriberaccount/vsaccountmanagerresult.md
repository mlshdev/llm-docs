> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanagerresult](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanagerresult)

# VSAccountManagerResult (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

An object that represents a request made for subscriber account information.

## Declaration

```swift
class VSAccountManagerResult
```

<a id="overview"></a>

## Overview

The system returns this object to your app when you app calls [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md). Use this object to cancel the request with [cancel()](vsaccountmanagerresult/cancel%28%29.md) while the request is in progress.

## Topics

### Cancelling a Request

- [cancel()](vsaccountmanagerresult/cancel%28%29.md): Cancels an in-progress request for subscriber account information.

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
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

# VSAccountManagerResult (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

An object that represents a request made for subscriber account information.

## Declaration

```objectivec
@interface VSAccountManagerResult : NSObject
```

<a id="overview"></a>

## Overview

The system returns this object to your app when you app calls [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md). Use this object to cancel the request with [cancel](vsaccountmanagerresult/cancel%28%29.md) while the request is in progress.

## Topics

### Cancelling a Request

- [cancel](vsaccountmanagerresult/cancel%28%29.md): Cancels an in-progress request for subscriber account information.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.
