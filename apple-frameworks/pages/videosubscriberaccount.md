> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount](https://developer.apple.com/documentation/videosubscriberaccount)

# Video Subscriber Account (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+

Support TV provider and Apple TV app functionality.

<a id="overview"></a>

## Overview

`VideoSubscriberAccount` provides APIs to help you create apps that require secure communication with a TV provider’s authentication service. The framework also informs the Apple TV app about whether someone has a subscription and the details of that subscription.

## Topics

### Essentials

- [Video Subscriber Account updates](https://developer.apple.com/documentation/updates/videosubscriberaccount): Learn about important changes in Video Subscriber Account.

### TV provider authentication

- [VSAccountManager](videosubscriberaccount/vsaccountmanager.md): The object that coordinates your app’s authentication requests with a TV provider’s authentication service.

### TV app integration

- [VSAppleSubscription](videosubscriberaccount/vsapplesubscription-swift.struct.md): An Apple streaming service customer and their subscriptions.
- [VSSubscriptionRegistrationCenter](videosubscriberaccount/vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.
- [VSAccountApplicationProvider](videosubscriberaccount/vsaccountapplicationprovider.md): An object to display app-specific providers in your app.

### User account management

- [Signing people in to their media accounts automatically](videosubscriberaccount/signing-people-in-to-media-apps-automatically.md): Implement single sign-on for media-streaming apps by managing a sign-in token on a person’s Apple Account.
- [VSUserAccountManager](videosubscriberaccount/vsuseraccountmanager.md): The object that coordinates your app’s user account actions.
- [VSUserAccount](videosubscriberaccount/vsuseraccount-swift.struct.md): An object that represents a user’s account.

### Errors

- [VSErrorDomain](videosubscriberaccount/vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](videosubscriberaccount/vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](videosubscriberaccount/vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](videosubscriberaccount/vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](videosubscriberaccount/vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSError](videosubscriberaccount/vserror.md): Error information in the framework error domain.
- [VSError.Code](videosubscriberaccount/vserror/code.md): Error codes in the framework error domain.

### Deprecated

- [VSSubscription](videosubscriberaccount/vssubscription.md): Deprecated. An object that describes a subscriber’s access to content.

# Video Subscriber Account (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Framework  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+

Support TV provider and Apple TV app functionality.

<a id="overview"></a>

## Overview

`VideoSubscriberAccount` provides APIs to help you create apps that require secure communication with a TV provider’s authentication service. The framework also informs the Apple TV app about whether someone has a subscription and the details of that subscription.

## Topics

### Essentials

- [Video Subscriber Account updates](https://developer.apple.com/documentation/updates/videosubscriberaccount): Learn about important changes in Video Subscriber Account.

### TV provider authentication

- [VSAccountManager](videosubscriberaccount/vsaccountmanager.md): The object that coordinates your app’s authentication requests with a TV provider’s authentication service.

### TV app integration

- [VSAppleSubscription](videosubscriberaccount/vsapplesubscription-c.class.md): An Apple streaming service customer and their subscriptions.
- [VSSubscriptionRegistrationCenter](videosubscriberaccount/vssubscriptionregistrationcenter.md): Deprecated. An object that stores subscription information that the system provides to the Apple TV app.
- [VSAccountApplicationProvider](videosubscriberaccount/vsaccountapplicationprovider.md): An object to display app-specific providers in your app.

### User account management

- [Signing people in to their media accounts automatically](videosubscriberaccount/signing-people-in-to-media-apps-automatically.md): Implement single sign-on for media-streaming apps by managing a sign-in token on a person’s Apple Account.
- [VSUserAccountManager](videosubscriberaccount/vsuseraccountmanager.md): The object that coordinates your app’s user account actions.
- [VSUserAccount](videosubscriberaccount/vsuseraccount-c.class.md): An object that represents a user’s account with a TV provider.

### Errors

- [VSErrorDomain](videosubscriberaccount/vserrordomain.md): The domain for all errors in the framework.
- [VSErrorInfoKeySAMLResponse](videosubscriberaccount/vserrorinfokeysamlresponse.md): The subscription provider’s SAML error response.
- [VSErrorInfoKeySAMLResponseStatus](videosubscriberaccount/vserrorinfokeysamlresponsestatus.md): The subscription provider’s SAML error-response status code.
- [VSErrorInfoKeyAccountProviderResponse](videosubscriberaccount/vserrorinfokeyaccountproviderresponse.md): The account provider’s error-response object.
- [VSErrorInfoKeyUnsupportedProviderIdentifier](videosubscriberaccount/vserrorinfokeyunsupportedprovideridentifier.md): The identifier of the unsupported subscription provider.
- [VSErrorCode](videosubscriberaccount/vserror/code.md): Error codes in the framework error domain.

### Deprecated

- [VSSubscription](videosubscriberaccount/vssubscription.md): Deprecated. An object that describes a subscriber’s access to content.

### Macros

- [VS_EXPORT](videosubscriberaccount/vs_export.md)
- [VS_EXTERN](videosubscriberaccount/vs_extern.md)
- [VS_INIT_UNAVAILABLE](videosubscriberaccount/vs_init_unavailable.md)
- [VS_INTERNAL_EXPORT](videosubscriberaccount/vs_internal_export.md)
- [VS_INTERNAL_EXTERN](videosubscriberaccount/vs_internal_extern.md)
