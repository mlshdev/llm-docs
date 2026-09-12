> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skcloudservicecontroller](https://developer.apple.com/documentation/storekit/skcloudservicecontroller)

# SKCloudServiceController (Swift)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

An object that determines the current capabilities of a person’s Music library.

> Use [SwiftUI](https://developer.apple.com/documentation/swiftui) and  [MusicKit](../musickit.md) instead.

## Declaration

```swift
class SKCloudServiceController
```

## Mentioned In

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md)
- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md)
- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md)

<a id="overview"></a>

## Overview

Use an [SKCloudServiceController](skcloudservicecontroller.md) object to determine the current capabilities of a customer’s Music library, like whether the device allows playback of Apple Music catalog tracks and the addition of tracks to the library.

## Topics

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus()](skcloudservicecontroller/authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [requestAuthorization(\_:)](skcloudservicecontroller/requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.
- [SKCloudServiceAuthorizationStatus](skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.

### Determining capabilities

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserToken(forDeveloperToken:completionHandler:)](skcloudservicecontroller/requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCode(completionHandler:)](skcloudservicecontroller/requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilities(completionHandler:)](skcloudservicecontroller/requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifier(completionHandler:)](skcloudservicecontroller/requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationToken(forClientToken:withCompletionHandler:)](skcloudservicecontroller/requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

### Notifications

- [SKStorefrontIdentifierDidChange](../foundation/nsnotification/name-swift.struct/skstorefrontidentifierdidchange.md): Deprecated. A notification name for indicating a change in the storefront identifier associated with the device.
- [SKCloudServiceCapabilitiesDidChange](../foundation/nsnotification/name-swift.struct/skcloudservicecapabilitiesdidchange.md): Deprecated. A notification name for indicating a change in the capabilities associated with the Music library on the device.
- [SKStorefrontCountryCodeDidChange](../foundation/nsnotification/name-swift.struct/skstorefrontcountrycodedidchange.md): Deprecated. A notification name for indicating a change in the storefront country or region code associated with the device.

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

### Deprecated

- [SKCloudServiceSetupViewController](skcloudservicesetupviewcontroller.md): Deprecated. A view controller that helps people perform setup for a cloud service, like an Apple Music subscription.

# SKCloudServiceController (Objective-C)

**Framework:** StoreKit  
**Kind:** Class  
**Availability:** iOS 9.3+ (deprecated in 18.0) · iPadOS 9.3+ (deprecated in 18.0) · Mac Catalyst 13.0+ (deprecated in 18.0) · macOS 11.0+ (deprecated in 15.0) · tvOS 9.3+ (deprecated in 18.0) · watchOS 7.0+ (deprecated in 11.0)

An object that determines the current capabilities of a person’s Music library.

> Use [SwiftUI](https://developer.apple.com/documentation/swiftui) and  [MusicKit](../musickit.md) instead.

## Declaration

```objectivec
@interface SKCloudServiceController : NSObject
```

## Mentioned In

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md)
- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md)
- [Offering Apple Music Subscription in Your App](offering-apple-music-subscription-in-your-app.md)

<a id="overview"></a>

## Overview

Use an [SKCloudServiceController](skcloudservicecontroller.md) object to determine the current capabilities of a customer’s Music library, like whether the device allows playback of Apple Music catalog tracks and the addition of tracks to the library.

## Topics

### Getting authorization to access the Music library

- [Requesting Access to Apple Music Library](requesting-access-to-apple-music-library.md): Prompt the customer to authorize access to Apple Music library.
- [authorizationStatus](skcloudservicecontroller/authorizationstatus%28%29.md): Deprecated. Returns the type of authorization the customer has for accessing the Music library on the device.
- [requestAuthorization:](skcloudservicecontroller/requestauthorization%28__%29.md): Deprecated. Asks the customer for permission to access the Music library on the device.
- [SKCloudServiceAuthorizationStatus](skcloudserviceauthorizationstatus.md): Deprecated. Constants that indicate the type of authorization the customer has for accessing the Music library.

### Determining capabilities

- [Determining a person’s Apple Music capabilities](determining-a-person-s-apple-music-capabilities.md): Determine which Apple Music capabilities are available on a customer’s device.
- [requestUserTokenForDeveloperToken:completionHandler:](skcloudservicecontroller/requestusertoken%28fordevelopertoken_completionhandler_%29.md): Deprecated. Returns a user token that you use to access personalized Apple Music content.
- [requestStorefrontCountryCodeWithCompletionHandler:](skcloudservicecontroller/requeststorefrontcountrycode%28completionhandler_%29.md): Deprecated. Gets the country code for the storefront associated with a customer’s iTunes account.
- [requestCapabilitiesWithCompletionHandler:](skcloudservicecontroller/requestcapabilities%28completionhandler_%29.md): Deprecated. Gets the current capabilities associated with the Music library on the device.
- [SKCloudServiceCapability](skcloudservicecapability.md): Deprecated. Constants that specify the current capabilities of the customer’s Music library on the device.
- [requestStorefrontIdentifierWithCompletionHandler:](skcloudservicecontroller/requeststorefrontidentifier%28completionhandler_%29.md): Deprecated. Gets the device’s storefront identifier.
- [requestPersonalizationTokenForClientToken:withCompletionHandler:](skcloudservicecontroller/requestpersonalizationtoken%28forclienttoken_withcompletionhandler_%29.md): Deprecated.

### Notifications

- [SKStorefrontIdentifierDidChangeNotification](skstorefrontidentifierdidchangenotification.md): Deprecated. A notification name for indicating a change in the storefront identifier associated with the device.
- [SKCloudServiceCapabilitiesDidChangeNotification](skcloudservicecapabilitiesdidchangenotification.md): Deprecated. A notification name for indicating a change in the capabilities associated with the Music library on the device.
- [SKStorefrontCountryCodeDidChangeNotification](skstorefrontcountrycodedidchangenotification.md): Deprecated. A notification name for indicating a change in the storefront country or region code associated with the device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Deprecated

- [SKCloudServiceSetupViewController](skcloudservicesetupviewcontroller.md): Deprecated. A view controller that helps people perform setup for a cloud service, like an Apple Music subscription.
