> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpreferences](https://developer.apple.com/documentation/intents/inpreferences)

# INPreferences (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The preferences and authorization related to using SiriKit.

## Declaration

```swift
class INPreferences
```

## Mentioned In

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md)

<a id="overview"></a>

## Overview

Use the class methods of [INPreferences](inpreferences.md) to perform tasks related to the use of SiriKit. An iOS app must request authorization to use SiriKit before Siri or Maps are allowed to call on its Intents extension to handle intents. To request authorization, call the [requestSiriAuthorization(\_:)](inpreferences/requestsiriauthorization%28__%29.md) method at some point during your app’s execution. The first time you call this method, the user is prompted to grant or deny authorization for your app. The user can change the authorization settings for your app later in the system settings. You can get your app’s current authorization status using the [siriAuthorizationStatus()](inpreferences/siriauthorizationstatus%28%29.md) method.

## Topics

### Managing the App’s Authorization

- [requestSiriAuthorization(\_:)](inpreferences/requestsiriauthorization%28__%29.md): Requests authorization to use Siri services.
- [siriAuthorizationStatus()](inpreferences/siriauthorizationstatus%28%29.md): Returns the current authorization status of your app.

### Getting the Siri Language

- [siriLanguageCode()](inpreferences/sirilanguagecode%28%29.md): Returns the language that Siri uses to communicate with the user.

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

### Authorization

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INSiriAuthorizationStatus](insiriauthorizationstatus.md): Constants indicating the authorization status of your Intents extension.

# INPreferences (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The preferences and authorization related to using SiriKit.

## Declaration

```objectivec
@interface INPreferences : NSObject
```

## Mentioned In

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md)

<a id="overview"></a>

## Overview

Use the class methods of [INPreferences](inpreferences.md) to perform tasks related to the use of SiriKit. An iOS app must request authorization to use SiriKit before Siri or Maps are allowed to call on its Intents extension to handle intents. To request authorization, call the [requestSiriAuthorization:](inpreferences/requestsiriauthorization%28__%29.md) method at some point during your app’s execution. The first time you call this method, the user is prompted to grant or deny authorization for your app. The user can change the authorization settings for your app later in the system settings. You can get your app’s current authorization status using the [siriAuthorizationStatus](inpreferences/siriauthorizationstatus%28%29.md) method.

## Topics

### Managing the App’s Authorization

- [requestSiriAuthorization:](inpreferences/requestsiriauthorization%28__%29.md): Requests authorization to use Siri services.
- [siriAuthorizationStatus](inpreferences/siriauthorizationstatus%28%29.md): Returns the current authorization status of your app.

### Getting the Siri Language

- [siriLanguageCode](inpreferences/sirilanguagecode%28%29.md): Returns the language that Siri uses to communicate with the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Authorization

- [Requesting Authorization to Use Siri](../sirikit/requesting-authorization-to-use-siri.md): Request permission from the user for Siri and Maps to communicate with your app or Intents app extension.
- [Siri Entitlement](../bundleresources/entitlements/com.apple.developer.siri.md): A Boolean value that indicates whether the app handles Siri requests.
- [INSiriAuthorizationStatus](insiriauthorizationstatus.md): Constants indicating the authorization status of your Intents extension.
