> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsaccountmanager](https://developer.apple.com/documentation/videosubscriberaccount/vsaccountmanager)

# VSAccountManager (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The object that coordinates your app’s authentication requests with a TV provider’s authentication service.

## Declaration

```swift
class VSAccountManager
```

<a id="overview"></a>

## Overview

The `VSAccountManager` object allows your app to request access from the user to communicate with their TV provider to understand system-level authentication status, send authentication requests for your app, and deep link to the TV Provider system settings.

## Topics

### Responding to account manager requests

- [delegate](vsaccountmanager/delegate.md): The delegate of the account manager object.
- [VSAccountManagerDelegate](vsaccountmanagerdelegate.md): The methods you use to respond to authentication view controller requests.

### Checking access status

- [checkAccessStatus(options:completionHandler:)](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSCheckAccessOption](vscheckaccessoption.md): The options your app uses when checking access status.
- [VSAccountAccessStatus](vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.

### Enqueuing requests

- [enqueue(\_:completionHandler:)](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

### Deep linking to TV provider settings

- [VSOpenTVProviderSettingsURLString](vsopentvprovidersettingsurlstring.md): A URL string you use to deep link to the system’s TV Provider settings.

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

# VSAccountManager (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · macOS · tvOS 10.0+ · visionOS 1.0+

The object that coordinates your app’s authentication requests with a TV provider’s authentication service.

## Declaration

```objectivec
@interface VSAccountManager : NSObject
```

<a id="overview"></a>

## Overview

The `VSAccountManager` object allows your app to request access from the user to communicate with their TV provider to understand system-level authentication status, send authentication requests for your app, and deep link to the TV Provider system settings.

## Topics

### Responding to account manager requests

- [delegate](vsaccountmanager/delegate.md): The delegate of the account manager object.
- [VSAccountManagerDelegate](vsaccountmanagerdelegate.md): The methods you use to respond to authentication view controller requests.

### Checking access status

- [checkAccessStatusWithOptions:completionHandler:](vsaccountmanager/checkaccessstatus%28options_completionhandler_%29.md): Checks your app’s access to user subscription information, and requests access if needed.
- [VSCheckAccessOption](vscheckaccessoption.md): The options your app uses when checking access status.
- [VSAccountAccessStatus](vsaccountaccessstatus.md): Constants that represent your app’s access status to the user’s subscription information.

### Enqueuing requests

- [enqueueAccountMetadataRequest:completionHandler:](vsaccountmanager/enqueue%28__completionhandler_%29.md): Submits a request for subscriber account information.
- [VSAccountMetadataRequest](vsaccountmetadatarequest.md): An object that specifies what subscriber account information your app retrieves.
- [VSAccountMetadata](vsaccountmetadata.md): A collection of information for a subscriber’s account.
- [VSAccountManagerResult](vsaccountmanagerresult.md): An object that represents a request made for subscriber account information.
- [VSAccountProviderResponse](vsaccountproviderresponse.md): An object that contains the response from the account provider.
- [VSAccountProviderAuthenticationScheme](vsaccountproviderauthenticationscheme.md): Authentication schemes for account provider requests and responses.

### Deep linking to TV provider settings

- [VSOpenTVProviderSettingsURLString](vsopentvprovidersettingsurlstring.md): A URL string you use to deep link to the system’s TV Provider settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
