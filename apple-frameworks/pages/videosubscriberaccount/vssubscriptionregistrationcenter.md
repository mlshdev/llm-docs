> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vssubscriptionregistrationcenter](https://developer.apple.com/documentation/videosubscriberaccount/vssubscriptionregistrationcenter)

# VSSubscriptionRegistrationCenter (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · Mac Catalyst 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object that stores subscription information that the system provides to the Apple TV app.

## Declaration

```swift
class VSSubscriptionRegistrationCenter
```

<a id="overview"></a>

## Overview

Use the methods in this class to retrieve the default registration center object and set the user’s current subscription for your app. This subscription informs the Apple TV app of the user’s access level and tiers.

## Topics

### Setting the Current Subscription

- [setCurrentSubscription(\_:)](vssubscriptionregistrationcenter/setcurrentsubscription%28__%29.md): Deprecated. Sets the subscription information for the current user.

### Getting the Default Registration Center

- [default()](vssubscriptionregistrationcenter/default%28%29.md): Deprecated. Returns the default subscription registration center object.

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

### TV app integration

- [VSAppleSubscription](vsapplesubscription-swift.struct.md): An Apple streaming service customer and their subscriptions.
- [VSAccountApplicationProvider](vsaccountapplicationprovider.md): An object to display app-specific providers in your app.

# VSSubscriptionRegistrationCenter (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 18.0) · iPadOS 11.0+ (deprecated in 18.0) · macOS · tvOS 11.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

An object that stores subscription information that the system provides to the Apple TV app.

## Declaration

```objectivec
@interface VSSubscriptionRegistrationCenter : NSObject
```

<a id="overview"></a>

## Overview

Use the methods in this class to retrieve the default registration center object and set the user’s current subscription for your app. This subscription informs the Apple TV app of the user’s access level and tiers.

## Topics

### Setting the Current Subscription

- [setCurrentSubscription:](vssubscriptionregistrationcenter/setcurrentsubscription%28__%29.md): Deprecated. Sets the subscription information for the current user.

### Getting the Default Registration Center

- [defaultSubscriptionRegistrationCenter](vssubscriptionregistrationcenter/default%28%29.md): Deprecated. Returns the default subscription registration center object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### TV app integration

- [VSAppleSubscription](vsapplesubscription-c.class.md): An Apple streaming service customer and their subscriptions.
- [VSAccountApplicationProvider](vsaccountapplicationprovider.md): An object to display app-specific providers in your app.
